'use client';

import { Document, Page, Text, View, StyleSheet, Svg, Path, G, Rect } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
  },
  headerTable: {
    width: '100%',
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companyInfo: {
    width: '50%',
    fontSize: 10,
  },
  clientInfo: {
    width: '50%',
    fontSize: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    padding: 8,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  tableCellWhite: {
    color: '#FFFFFF',
  },
  qteCell: {
    width: '10%',
  },
  designationCell: {
    width: '50%',
  },
  priceCell: {
    width: '20%',
  },
  totalCell: {
    width: '20%',
  },
  totals: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  totalLabel: {
    width: 100,
    textAlign: 'right',
    marginRight: 10,
  },
  totalValue: {
    width: 100,
    textAlign: 'right',
  },
  notes: {
    marginTop: 30,
    fontSize: 10,
  },
  reference: {
    fontSize: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  logo: {
    width: 150,
    height: 30,
    marginBottom: 15,
  },
});

interface QuotePDFProps {
  data: {
    product: string;
    quantity: number;
    sizes: number;
    needPatron: boolean;
    needSample: boolean;
    printing?: string;
    embroideryType?: string;
    embroideryColors?: number;
    embroideryPrice?: number;
    totalHT: number;
    totalTTC: number;
    patronPrice?: number;
    samplePrice?: number;
    productionPrice?: number;
    sampleSection?: {
      totalHT: number;
      tva: number;
      totalTTC: number;
    };
    productionSection?: {
      totalHT: number;
      tva: number;
      totalTTC: number;
    };
    userDetails?: {
      name: string;
      email: string;
      phone: string;
    };
    quality: string;
  };
}

const FINISHING_COST_PER_PIECE = 3.5; // MAD per piece

export function QuotePDF({ data }: QuotePDFProps) {
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const now = new Date();
  const randomNum = Math.floor(Math.random() * 9000) + 1000;
  const ref = `${now.getFullYear().toString().slice(-2)}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}-${randomNum}`;

  const renderTableRow = (qte: number | string, designation: string, priceUnit: number | string, total: number | string) => (
    <View style={styles.tableRow}>
      <View style={[styles.tableCell, styles.qteCell]}>
        <Text>{qte}</Text>
      </View>
      <View style={[styles.tableCell, styles.designationCell]}>
        <Text>{designation}</Text>
      </View>
      <View style={[styles.tableCell, styles.priceCell]}>
        <Text>{priceUnit}</Text>
      </View>
      <View style={[styles.tableCell, styles.totalCell]}>
        <Text>{total}</Text>
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Svg style={styles.logo} fill="currentColor" viewBox="0 0 435.88 76.66">
            <G>
              <G>
                <Rect x="59.48" y="30.66" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                <Rect x="59.48" y="61.32" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                <Path d="M45.99,23v45.99c0,4.23-3.43,7.67-7.67,7.67h0c-4.23,0-7.67-3.43-7.67-7.67V23c0-4.23-3.43-7.67-7.67-7.67H7.67C3.43,15.33,0,11.9,0,7.67H0C0,3.43,3.43,0,7.67,0h120.7C132.6,0,136.03,3.43,136.03,7.67h0c0,4.23-3.43,7.67-7.67,7.67H53.66c-4.23,0-7.67,3.43-7.67,7.67Z"/>
                <Path d="M256.94,65.52l29.08-61.07c2.82-5.92,11.25-5.92,14.07,0l29.08,61.07c2.46,5.17-1.31,11.14-7.03,11.14h-1.39c-3,0-5.73-1.72-7.03-4.43l-18.96-39.65c-.68-1.43-2.72-1.43-3.4,0l-18.96,39.65c-1.29,2.71-4.03,4.43-7.03,4.43h-1.39c-5.73,0-9.5-5.97-7.03-11.14Z"/>
                <Path d="M359.23,40.48v28.51c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67V7.67C343.89,3.43,347.33,0,351.56,0h3.07C357.46,0,360.06,1.56,361.39,4.06l26.45,49.6c.87,1.64,3.22,1.64,4.09,0l26.45-49.6C419.72,1.56,422.32,0,425.15,0h3.07C432.45,0,435.88,3.43,435.88,7.67v61.32c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67v-28.54c0-2.44-3.29-3.22-4.38-1.03l-16.5,24.82c-1.3,2.6-3.95,5.87-6.86,5.87h-5.86c-2.9,0-5.56-3.28-6.86-5.87l-16.49-24.8c-1.09-2.19-4.39-1.41-4.39,1.04Z"/>
                <Path d="M182.95,36.74L152.07,4.26c-1.4-1.47-.36-3.9,1.68-3.9h17.69c.63,0,1.24,.26,1.67,.72l21.71,22.8c.91,.96,2.44,.96,3.35,0L219.88,1.07c.44-.46,1.04-.72,1.67-.72h17.69c2.03,0,3.07,2.43,1.68,3.9l-30.87,32.48c-.85,.89-.85,2.29,0,3.18l30.87,32.48c1.4,1.47,.36,3.9-1.68,3.9h-17.69c-.63,0-1.24-.26-1.67-.72l-21.71-22.8c-.91-.96-2.44-.96-3.35,0l-21.71,22.8c-.44,.46-1.04,.72-1.67,.72h-17.69c-2.03,0-3.07-2.43-1.68-3.9l30.87-32.48c.85-.89,.85-2.29,0-3.18Z"/>
                <Path d="M239.79,66.09l-24.19-27.07c-.79-.88-.78-2.22,.02-3.1l24.54-26.77c1.43-1.56,4.02-.54,4.01,1.57l-.03,5.26c-.02,2.29-.88,4.49-2.42,6.18l-12.63,13.84c-.8,.87-.81,2.21-.02,3.09l13.03,14.65c1.14,1.28,1.77,2.95,1.76,4.67l-.04,6.15c-.01,2.11-2.62,3.1-4.03,1.52Z"/>
                <Path d="M152.54,10.03l24.38,27.29c.76,.85,.75,2.14-.02,2.99l-24.74,26.99c-1.38,1.5-3.88,.52-3.87-1.52l.04-6.36c.01-1.72,.66-3.37,1.82-4.64l13.28-14.55c.77-.84,.78-2.13,.02-2.98l-13.08-14.71c-1.14-1.28-1.77-2.95-1.76-4.67l.04-6.36c.01-2.04,2.53-2.99,3.89-1.47Z"/>
              </G>
            </G>
          </Svg>

          <View style={styles.headerTable}>
            <View style={styles.headerRow}>
              <View style={styles.companyInfo}>
                <Text>Texam confection</Text>
                <Text>Adresse : Doha 1, Ain sbeaa, Casablanca</Text>
                <Text>Tél : +212645777664</Text>
                <Text>Service couture</Text>
              </View>
              <View style={styles.clientInfo}>
                <Text>Date de facturation : {currentDate}</Text>
                <Text>EXPEDIER À</Text>
                {data.userDetails && (
                  <>
                    <Text>Client(e) : {data.userDetails.name}</Text>
                    <Text>Tél : {data.userDetails.phone}</Text>
                  </>
                )}
              </View>
            </View>
          </View>
          
          <Text style={styles.reference}>Réf:{ref}</Text>
        </View>

        {/* Échantillon Section */}
        <Text style={styles.sectionTitle}>Échantillon</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={[styles.tableCell, styles.qteCell]}>
              <Text style={styles.tableCellWhite}>QTE</Text>
            </View>
            <View style={[styles.tableCell, styles.designationCell]}>
              <Text style={styles.tableCellWhite}>DESIGNATION</Text>
            </View>
            <View style={[styles.tableCell, styles.priceCell]}>
              <Text style={styles.tableCellWhite}>PRIX UNIT HT</Text>
            </View>
            <View style={[styles.tableCell, styles.totalCell]}>
              <Text style={styles.tableCellWhite}>MONTANT HT</Text>
            </View>
          </View>
          
          {data.needPatron && data.patronPrice && data.patronPrice > 0 && renderTableRow(
            1,
            `Création patronage ${data.product.toUpperCase()}`,
            `${data.patronPrice.toFixed(2)} DH`,
            `${data.patronPrice.toFixed(2)} DH`
          )}
          
          {data.needSample && data.samplePrice && renderTableRow(
            1,
            `Service couture ${data.product.toUpperCase()}`,
            `${data.samplePrice.toFixed(2)} DH`,
            `${data.samplePrice.toFixed(2)} DH`
          )}
        </View>

        {/* Production Section */}
        <Text style={styles.sectionTitle}>Production</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={[styles.tableCell, styles.qteCell]}>
              <Text style={styles.tableCellWhite}>QTE</Text>
            </View>
            <View style={[styles.tableCell, styles.designationCell]}>
              <Text style={styles.tableCellWhite}>DESIGNATION</Text>
            </View>
            <View style={[styles.tableCell, styles.priceCell]}>
              <Text style={styles.tableCellWhite}>PRIX UNIT HT</Text>
            </View>
            <View style={[styles.tableCell, styles.totalCell]}>
              <Text style={styles.tableCellWhite}>MONTANT HT</Text>
            </View>
          </View>

          {renderTableRow(
            data.quantity,
            `Service couture ${data.product.toUpperCase()} (Qualité ${data.quality === 'premium' ? 'Premium' : 'Moyenne'})`,
            `${data.productionPrice?.toFixed(2)} DH`,
            `${((data.productionPrice || 0) * data.quantity).toFixed(2)} DH`
          )}

          {data.printing && renderTableRow(
            data.quantity,
            data.printing,
            "6,00 DH",
            `${(6 * data.quantity).toFixed(2)} DH`
          )}

          {data.embroideryType && data.embroideryColors && data.embroideryPrice && renderTableRow(
            data.quantity,
            `${data.embroideryType} (${data.embroideryColors} couleur${data.embroideryColors > 1 ? 's' : ''})`,
            `${data.embroideryPrice.toFixed(2)} DH`,
            `${(data.embroideryPrice * data.quantity).toFixed(2)} DH`
          )}

          {data.sizes > 1 && renderTableRow(
            1,
            `Gradation taille 1-${data.sizes}`,
            "70,00 DH",
            `${(70 * (data.sizes - 1)).toFixed(2)} DH`
          )}

          {renderTableRow(
            data.quantity,
            `Finition / Repassage / Emballage`,
            `${FINISHING_COST_PER_PIECE.toFixed(2)} DH`,
            `${(FINISHING_COST_PER_PIECE * data.quantity).toFixed(2)} DH`
          )}

          {/* Add the unit price row with production-only calculation */}
          <View style={[styles.tableRow, { backgroundColor: '#f8f8f8' }]}>
            <View style={[styles.tableCell, styles.qteCell]}>
              <Text>1</Text>
            </View>
            <View style={[styles.tableCell, styles.designationCell]}>
              <Text>Prix unitaire produit fini (sans tissu)</Text>
            </View>
            <View style={[styles.tableCell, styles.priceCell]}>
              <Text>{(
                (data.productionPrice || 0) + // Base production cost
                (data.embroideryPrice || 0) + // Embroidery cost if applicable
                (data.printing ? 6 : 0) + // Printing cost if applicable
                (data.sizes > 1 ? (70 * (data.sizes - 1)) / data.quantity : 0) + // Grading cost per unit
                FINISHING_COST_PER_PIECE // Always add finishing cost
              ).toFixed(2)} DH</Text>
            </View>
            <View style={[styles.tableCell, styles.totalCell]}>
              <Text>-</Text>
            </View>
          </View>
        </View>

        <View style={styles.totals}>
          <View style={[styles.tableRow, { borderWidth: 1, borderColor: '#000', marginTop: 10 }]}>
            <View style={[styles.tableCell, { width: '50%', backgroundColor: '#f8f8f8' }]}>
              <Text>TOTAL HT</Text>
            </View>
            <View style={[styles.tableCell, { width: '50%', textAlign: 'right' }]}>
              <Text>{data.totalHT.toFixed(2)} DH</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderWidth: 1, borderColor: '#000', borderTopWidth: 0 }]}>
            <View style={[styles.tableCell, { width: '50%', backgroundColor: '#f8f8f8' }]}>
              <Text>TVA (0.5%)</Text>
            </View>
            <View style={[styles.tableCell, { width: '50%', textAlign: 'right' }]}>
              <Text>{(data.totalHT * 0.005).toFixed(2)} DH</Text>
            </View>
          </View>
          <View style={[styles.tableRow, { borderWidth: 1, borderColor: '#000', borderTopWidth: 0 }]}>
            <View style={[styles.tableCell, { width: '50%', backgroundColor: '#000' }]}>
              <Text style={{ color: '#FFFFFF' }}>TOTAL TTC</Text>
            </View>
            <View style={[styles.tableCell, { width: '50%', textAlign: 'right', backgroundColor: '#f8f8f8' }]}>
              <Text style={{ fontWeight: 'bold' }}>{data.totalTTC.toFixed(2)} DH</Text>
            </View>
          </View>
        </View>

        <View style={styles.notes}>
          <Text>Notes importantes:</Text>
          <Text>1- Il faut faire un échantillon avant le lancement de la production (la quantité estimée).</Text>
          <Text>2- Le paiement de l&apos;échantillon est obligatoire pour la validation de votre commande.</Text>
          <Text>3- A noter que le prix de l&apos;échantillon n&apos;est pas remboursable.</Text>
          
          <Text style={{ marginTop: 10 }}>Coordonnées bancaires:</Text>
          <Text>Titulaire : MONSIEUR MOUBARAK AMQOR</Text>
          <Text>RIB : 230 780 4472265211007800 82</Text>
          <Text>IBAN : MA64 2307 8044 7226 5211 0078 0082</Text>
          <Text>Code SWIFT : CIHMMAMC</Text>
          <Text>ICE : 002379956000002</Text>

          <Text style={{ marginTop: 20 }}>
            Arrêté la présente facture à la somme de : {'//'}{data.totalTTC.toFixed(2)}{'//'} MAD
          </Text>
        </View>
      </Page>
    </Document>
  );
} 