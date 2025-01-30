'use client';

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { QuotePDF } from './quote-pdf';
import { UserDetailsModal } from './user-details-modal';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

const FINISHING_COST_PER_PIECE = 3.5; // MAD per piece

const PRODUCTS = {
  'tshirt': {
    name: 'T-shirt',
    patron: 150,
    echantillon: 50,
    confection: { min: 26, max: 30 },
  },
  'sweatshirt': {
    name: 'Sweat-shirt',
    patron: 200,
    echantillon: 100,
    confection: { min: 30, max: 45 },
  },
  'hoodie': {
    name: 'Sweat-à-capuche',
    patron: 250,
    echantillon: 150,
    confection: { min: 40, max: 50 },
  },
  'chemise': {
    name: 'Chemise',
    patron: 250,
    echantillon: 150,
    confection: { min: 55, max: 75 },
  },
  'pantalon': {
    name: 'Pantalon vêtement',
    patron: 150,
    echantillon: 100,
    confection: { min: 35, max: 45 },
  },
  'short': {
    name: 'Short',
    patron: 150,
    echantillon: 100,
    confection: { min: 35, max: 40 },
  },
  'robe-simple': {
    name: 'Robe simple',
    patron: 250,
    echantillon: 150,
    confection: { min: 55, max: 70 },
  },
  'robe-plier': {
    name: 'Robe plier',
    patron: 300,
    echantillon: 200,
    confection: { min: 65, max: 85 },
  },
  'kimono': {
    name: 'Kimono',
    patron: 200,
    echantillon: 150,
    confection: { min: 50, max: 70 },
  },
  'abaya': {
    name: 'Abaya',
    patron: 250,
    echantillon: 150,
    confection: { min: 55, max: 75 },
  },
  'khimar': {
    name: 'Khimar hijab',
    patron: 150,
    echantillon: 130,
    confection: { min: 40, max: 60 },
  },
  'scrunchies': {
    name: 'Scrunchies',
    patron: 50,
    echantillon: 50,
    confection: { min: 7, max: 10 },
  },
  'sous-vetement': {
    name: 'Sous-vêtement',
    patron: 100,
    echantillon: 50,
    confection: { min: 22, max: 26 },
  },
  'tote-bag-grand': {
    name: 'Tote bags (grand)',
    patron: 150,
    echantillon: 100,
    confection: { min: 35, max: 45 },
  },
  'tote-bag-petit': {
    name: 'Tote bags (petit)',
    patron: 100,
    echantillon: 50,
    confection: { min: 12, max: 16 },
  },
  'foulard': {
    name: 'Foulard',
    patron: 0,
    echantillon: 50,
    confection: { min: 10, max: 15 },
  },
  'jellaba': {
    name: 'Jellaba',
    patron: 250,
    echantillon: 150,
    confection: { min: 60, max: 75 },
  },
  'pyjama': {
    name: 'Pyjama de nuit',
    patron: 200,
    echantillon: 150,
    confection: { min: 75, max: 95 },
  },
  'jacket-double': {
    name: 'Jacket (doubleur)',
    patron: 350,
    echantillon: 200,
    confection: { min: 90, max: 105 },
  },
  'jacket-simple': {
    name: 'Jacket (sans doublure)',
    patron: 200,
    echantillon: 150,
    confection: { min: 65, max: 85 },
  },
  'gilet-sans-doublure': {
    name: 'Gilet sans doublure',
    patron: 150,
    echantillon: 100,
    confection: { min: 30, max: 45 },
  },
  'gilet-double': {
    name: 'Gilet doublé',
    patron: 250,
    echantillon: 150,
    confection: { min: 60, max: 85 },
  },
  'peignoir': {
    name: 'Peignoir',
    patron: 200,
    echantillon: 150,
    confection: { min: 35, max: 55 },
  },
  'jupe': {
    name: 'Jupe',
    patron: 200,
    echantillon: 150,
    confection: { min: 35, max: 45 },
  },
  'jupe-tailleur': {
    name: 'Jupe tailleur',
    patron: 200,
    echantillon: 200,
    confection: { min: 45, max: 55 },
  },
  'tablier-travail': {
    name: 'Tablier de travail',
    patron: 200,
    echantillon: 150,
    confection: { min: 30, max: 35 },
  },
  'tablier-cuisine': {
    name: 'Tablier cuisine',
    patron: 150,
    echantillon: 100,
    confection: { min: 25, max: 30 },
  },
};

const PRINTING = {
  dtfSmall: { name: 'DTF (5-20 cm)', price: 6 },
  dtfLarge: { name: 'DTF (20-40 cm)', price: 15 },
};

const EMBROIDERY = {
  logo: {
    name: 'Logo (8 cm)',
    prices: {
      1: 10,
      2: 15,
      3: 20,
    },
  },
  design: {
    name: 'Design (10-15 cm)',
    prices: {
      1: 25,
      2: 35,
      3: 50,
    },
  },
};

type ProductKey = keyof typeof PRODUCTS;
type PrintingKey = keyof typeof PRINTING | 'none';
type EmbroideryKey = keyof typeof EMBROIDERY | 'none';
type EmbroideryColors = 1 | 2 | 3;

interface FormData {
  product: ProductKey | null;
  quantity: number;
  sizes: number;
  needPatron: boolean;
  printing: PrintingKey | null;
  embroideryType: EmbroideryKey | null;
  embroideryColors: EmbroideryColors;
  ownFabric: boolean;
  quality: 'premium' | 'medium';
}

export default function QuoteBuilder() {
  const [formData, setFormData] = useState<FormData>({
    product: null,
    quantity: 50,
    sizes: 1,
    needPatron: false,
    printing: null,
    embroideryType: null,
    embroideryColors: 1,
    ownFabric: true,
    quality: 'medium',
  });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const calculateTotals = () => {
    if (!formData.product) return {
      sampleHT: 0,
      sampleTVA: 0,
      sampleTTC: 0,
      productionHT: 0,
      productionTVA: 0,
      productionTTC: 0,
      totalTTC: 0
    };

    const product = PRODUCTS[formData.product];
    
    // Calculate Sample Section
    let sampleHT = 0;
    
    // Sample (Échantillon) - Always included
    sampleHT += product.echantillon;
    
    // Patron (only if needed and product has patron cost)
    if (formData.needPatron && product.patron > 0) {
      sampleHT += product.patron;
    }
    
    // Get the correct price based on quality
    const confectionPrice = formData.quality === 'premium' 
      ? product.confection.max 
      : product.confection.min;

    const sampleTVA = sampleHT * 0.005;
    const sampleTTC = sampleHT + sampleTVA;

    // Calculate Production Section
    let productionHT = 0;

    // Service couture
    productionHT += confectionPrice * formData.quantity;
    
    // Gradation des tailles (only if more than one size and not a Foulard)
    if (formData.sizes > 1 && product.name.toUpperCase() !== 'FOULARD') {
      productionHT += (formData.sizes - 1) * 70;
    }

    // Impression
    if (formData.printing && formData.printing !== 'none') {
      productionHT += PRINTING[formData.printing].price * formData.quantity;
    }

    // Broderie
    if (formData.embroideryType && formData.embroideryType !== 'none' && formData.embroideryColors) {
      const embroideryPrice = EMBROIDERY[formData.embroideryType].prices[formData.embroideryColors] || 0;
      productionHT += embroideryPrice * formData.quantity;
    }

    // Finition, Repassage et Emballage
    productionHT += FINISHING_COST_PER_PIECE * formData.quantity;

    const productionTVA = productionHT * 0.005;
    const productionTTC = productionHT + productionTVA;

    // Calculate final total
    const totalTTC = sampleTTC + productionTTC;

    return {
      sampleHT,
      sampleTVA,
      sampleTTC,
      productionHT,
      productionTVA,
      productionTTC,
      totalTTC
    };
  };

  const handleChange = (field: keyof FormData, value: FormData[keyof FormData]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const minQuantity = formData.ownFabric ? 50 : 200;

  const handleDownloadPDF = async () => {
    if (!formData.product) return;
    
    setIsGeneratingPDF(true);
    try {
      const product = PRODUCTS[formData.product];
      const totals = calculateTotals();
      
      // Calculate embroidery price if selected
      let embroideryPrice = 0;
      if (formData.embroideryType && formData.embroideryType !== 'none') {
        embroideryPrice = EMBROIDERY[formData.embroideryType].prices[formData.embroideryColors];
      }

      const doc = (
        <QuotePDF
          data={{
            product: product.name,
            quantity: formData.quantity,
            sizes: formData.sizes,
            needPatron: formData.needPatron,
            needSample: true,
            quality: formData.quality,
            printing: formData.printing && formData.printing !== 'none' ? PRINTING[formData.printing].name : undefined,
            embroideryType: formData.embroideryType && formData.embroideryType !== 'none' ? EMBROIDERY[formData.embroideryType].name : undefined,
            embroideryColors: formData.embroideryColors,
            embroideryPrice: embroideryPrice,
            totalHT: totals.sampleHT + totals.productionHT,
            totalTTC: totals.totalTTC,
            patronPrice: product.patron,
            samplePrice: product.echantillon,
            productionPrice: formData.quality === 'premium' ? product.confection.max : product.confection.min,
            sampleSection: {
              totalHT: totals.sampleHT,
              tva: totals.sampleTVA,
              totalTTC: totals.sampleTTC
            },
            productionSection: {
              totalHT: totals.productionHT,
              tva: totals.productionTVA,
              totalTTC: totals.productionTTC
            }
          }}
        />
      );

      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'devis-texam.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleDetailedQuote = async (userDetails: { name: string; email: string; phone: string }) => {
    if (!formData.product) return;

    setIsSending(true);
    try {
      console.log('Creating PDF document...');
      const product = PRODUCTS[formData.product];
      const totals = calculateTotals();
      
      // Calculate embroidery price if selected
      let embroideryPrice = 0;
      if (formData.embroideryType && formData.embroideryType !== 'none') {
        embroideryPrice = EMBROIDERY[formData.embroideryType].prices[formData.embroideryColors];
      }

      const doc = (
        <QuotePDF
          data={{
            product: product.name,
            quantity: formData.quantity,
            sizes: formData.sizes,
            needPatron: formData.needPatron,
            needSample: true,
            quality: formData.quality,
            printing: formData.printing && formData.printing !== 'none' ? PRINTING[formData.printing].name : undefined,
            embroideryType: formData.embroideryType && formData.embroideryType !== 'none' ? EMBROIDERY[formData.embroideryType].name : undefined,
            embroideryColors: formData.embroideryColors,
            embroideryPrice: embroideryPrice,
            totalHT: totals.sampleHT + totals.productionHT,
            totalTTC: totals.totalTTC,
            patronPrice: product.patron,
            samplePrice: product.echantillon,
            productionPrice: formData.quality === 'premium' ? product.confection.max : product.confection.min,
            sampleSection: {
              totalHT: totals.sampleHT,
              tva: totals.sampleTVA,
              totalTTC: totals.sampleTTC
            },
            productionSection: {
              totalHT: totals.productionHT,
              tva: totals.productionTVA,
              totalTTC: totals.productionTTC
            },
            userDetails,
          }}
        />
      );

      console.log('Generating PDF blob...');
      // Create the PDF instance first
      const pdfInstance = pdf(doc);
      // Get the actual blob directly
      const blob = await pdfInstance.toBlob();

      console.log('Converting to base64...');
      // Convert blob to base64
      const base64data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            const base64 = reader.result;
            console.log('Base64 conversion complete, length:', base64.length);
            resolve(base64);
          } else {
            reject(new Error('Failed to convert PDF to base64'));
          }
        };
        reader.onerror = () => {
          console.error('FileReader error:', reader.error);
          reject(reader.error);
        };
        reader.readAsDataURL(blob);
      });

      console.log('Sending to API...');
      // Send to our API
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfBase64: base64data,
          userDetails,
        }),
      });

      const result = await response.json();
      console.log('API response:', result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      // Download the PDF for the user
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "devis-texam.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert("Devis envoyé avec succès! Le PDF a été téléchargé.");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error handling detailed quote:", error);
      alert(error instanceof Error ? error.message : "Une erreur est survenue l&apos;envoi du devis");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Type de Produit</Label>
              <Select onValueChange={(value: string) => handleChange('product', value as ProductKey)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un produit" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto">
                  <SelectGroup>
                    {Object.entries(PRODUCTS).map(([key, product]) => (
                      <SelectItem key={key} value={key}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Quantité</Label>
              <Input
                type="number"
                min={minQuantity}
                value={formData.quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newValue = parseInt(e.target.value) || 0;
                  handleChange('quantity', newValue);
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  const newValue = parseInt(e.target.value) || 0;
                  handleChange('quantity', Math.max(newValue, minQuantity));
                }}
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum {minQuantity} pièces
              </p>
            </div>

            <div>
              <Label>Nombre de Tailles</Label>
              <Input
                type="number"
                min={1}
                value={formData.sizes}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleChange('sizes', parseInt(e.target.value))
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="ownFabric"
                checked={formData.ownFabric}
                onCheckedChange={(checked: boolean | 'indeterminate') => {
                  const isChecked = checked as boolean;
                  setFormData(prev => ({
                    ...prev,
                    ownFabric: isChecked,
                    quantity: !isChecked ? 200 : prev.quantity < 50 ? 50 : prev.quantity
                  }));
                }}
              />
              <Label htmlFor="ownFabric" className="text-sm font-medium leading-none cursor-pointer">
                Je fournis mon propre tissu
              </Label>
            </div>

            <div>
              <Label>Qualité de Confection</Label>
              <div className="flex gap-4 mt-2">
                <RadioGroup 
                  value={formData.quality}
                  onValueChange={(value) => handleChange('quality', value as 'premium' | 'medium')}
                >    
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">
                      Moyenne (À partir de {formData.product ? PRODUCTS[formData.product].confection.min : 0} DH/pièce)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium">
                      Premium ({formData.product ? PRODUCTS[formData.product].confection.max : 0} DH/pièce)
                    </Label>
                  </div>  
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="patron"
                checked={formData.needPatron}
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  handleChange('needPatron', checked as boolean)
                }
              />
              <Label htmlFor="patron" className="text-sm font-medium leading-none cursor-pointer">
                Besoin d&apos;un patron
              </Label>
            </div>

            <p className="text-sm text-red-600 mt-1">
              *Le paiement de l&apos;échantillon est obligatoire pour la validation de votre commande
            </p>

            <div>
              <Label>Impression</Label>
              <Select onValueChange={(value: string) => handleChange('printing', value as PrintingKey)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez le type d&apos;impression" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="none">Aucune impression</SelectItem>
                    {Object.entries(PRINTING).map(([key, { name }]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Type de Broderie</Label>
              <Select onValueChange={(value: string) => handleChange('embroideryType', value as EmbroideryKey)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez le type de broderie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="none">Aucune broderie</SelectItem>
                    {Object.entries(EMBROIDERY).map(([key, { name }]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {formData.embroideryType && formData.embroideryType !== 'none' && (
              <div>
                <Label>Nombre de Couleurs (Broderie)</Label>
                <Select 
                  value={formData.embroideryColors.toString()} 
                  onValueChange={(value: string) => 
                    handleChange('embroideryColors', parseInt(value) as EmbroideryColors)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1 couleur</SelectItem>
                      <SelectItem value="2">2 couleurs</SelectItem>
                      <SelectItem value="3">3 couleurs ou plus</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="text-right">
            <div className="text-lg font-semibold">
              Total Estimé: {calculateTotals().totalTTC.toFixed(2)} MAD
            </div>
            <p className="text-sm text-gray-500 mt-1">
              *Prix indicatif hors tissu et selon la complexité finale
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800" 
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF || !formData.product}
            >
              {isGeneratingPDF ? 'Génération du PDF...' : 'Télécharger le Devis PDF'}
            </Button>
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={() => setIsModalOpen(true)}
              disabled={isGeneratingPDF || !formData.product}
            >
              Demander un Devis Détaillé
            </Button>
          </div>
        </div>
      </div>

      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleDetailedQuote}
        isLoading={isSending}
      />
    </>
  );
} 