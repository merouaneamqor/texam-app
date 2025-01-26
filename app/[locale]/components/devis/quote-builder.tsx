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

const PRODUCTS = {
  tshirt: {
    name: 'T-shirt',
    patron: 180,
    echantillon: 50,
    confection: { min: 26, max: 35 },
  },
  sweatshirt: {
    name: 'Sweatshirt',
    patron: 180,
    echantillon: 100,
    confection: { min: 30, max: 45 },
  },
  hoodie: {
    name: 'Hoodie',
    patron: 250,
    echantillon: 150,
    confection: { min: 35, max: 55 },
  },
  pantalon: {
    name: 'Pantalon',
    patron: 180,
    echantillon: 150,
    confection: { min: 30, max: 45 },
  },
  short: {
    name: 'Short',
    patron: 180,
    echantillon: 150,
    confection: { min: 26, max: 35 },
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
  needSample: boolean;
  printing: PrintingKey | null;
  embroideryType: EmbroideryKey | null;
  embroideryColors: EmbroideryColors;
  ownFabric: boolean;
}

export default function QuoteBuilder() {
  const [formData, setFormData] = useState<FormData>({
    product: null,
    quantity: 50,
    sizes: 1,
    needPatron: false,
    needSample: false,
    printing: null,
    embroideryType: null,
    embroideryColors: 1,
    ownFabric: true,
  });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const calculateTotal = () => {
    if (!formData.product) return 0;

    const product = PRODUCTS[formData.product];
    let total = 0;

    // Patron
    if (formData.needPatron) {
      total += product.patron;
    }

    // Échantillon
    if (formData.needSample) {
      total += product.echantillon;
    }

    // Gradation des tailles
    if (formData.sizes > 1) {
      total += (formData.sizes - 1) * 70;
    }

    // Confection (using average price for estimation)
    const confectionPrice = (product.confection.min + product.confection.max) / 2;
    total += confectionPrice * formData.quantity;

    // Impression
    if (formData.printing && formData.printing !== 'none') {
      total += PRINTING[formData.printing].price * formData.quantity;
    }

    // Broderie
    if (formData.embroideryType && formData.embroideryType !== 'none' && formData.embroideryColors) {
      const embroideryPrice = EMBROIDERY[formData.embroideryType].prices[formData.embroideryColors] || 0;
      total += embroideryPrice * formData.quantity;
    }

    // Finition et emballage (using average of 4.5 MAD)
    total += 4.5 * formData.quantity;

    return total;
  };

  const handleChange = (field: keyof FormData, value: FormData[keyof FormData]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const minQuantity = formData.ownFabric ? 50 : 200;

  const handleDownloadPDF = async () => {
    if (!formData.product) return;
    
    setIsGeneratingPDF(true);
    try {
      const doc = (
        <QuotePDF
          data={{
            product: PRODUCTS[formData.product].name,
            quantity: formData.quantity,
            sizes: formData.sizes,
            needPatron: formData.needPatron,
            needSample: formData.needSample,
            printing: formData.printing && formData.printing !== 'none' ? PRINTING[formData.printing].name : undefined,
            embroideryType: formData.embroideryType && formData.embroideryType !== 'none' ? EMBROIDERY[formData.embroideryType].name : undefined,
            embroideryColors: formData.embroideryColors,
            totalHT: calculateTotal(),
            totalTTC: calculateTotal() * 1.005,
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
      const doc = (
        <QuotePDF
          data={{
            product: PRODUCTS[formData.product].name,
            quantity: formData.quantity,
            sizes: formData.sizes,
            needPatron: formData.needPatron,
            needSample: formData.needSample,
            printing: formData.printing && formData.printing !== "none" ? PRINTING[formData.printing].name : undefined,
            embroideryType:
              formData.embroideryType && formData.embroideryType !== "none"
                ? EMBROIDERY[formData.embroideryType].name
                : undefined,
            embroideryColors: formData.embroideryColors,
            totalHT: calculateTotal(),
            totalTTC: calculateTotal() * 1.005,
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
      alert(error instanceof Error ? error.message : "Une erreur est survenue lors de l&apos;envoi du devis");
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
                <SelectContent>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleChange('quantity', parseInt(e.target.value) || 0)
                }
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
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  handleChange('ownFabric', checked as boolean)
                }
              />
              <Label htmlFor="ownFabric" className="text-sm font-medium leading-none cursor-pointer">
                Je fournis mon propre tissu
              </Label>
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

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sample"
                checked={formData.needSample}
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  handleChange('needSample', checked as boolean)
                }
              />
              <Label htmlFor="sample" className="text-sm font-medium leading-none cursor-pointer">
                Besoin d&apos;un échantillon
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
              Total Estimé: {calculateTotal().toFixed(2)} MAD
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