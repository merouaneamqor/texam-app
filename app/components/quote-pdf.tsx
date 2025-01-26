'use client';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  companyInfo: {
    fontSize: 10,
    marginBottom: 20,
  },
  clientInfo: {
    fontSize: 10,
    marginBottom: 20,
  },
  table: {
    display: 'flex',
    width: 'auto',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  total: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'right',
  },
  notes: {
    marginTop: 30,
    fontSize: 10,
    color: '#666',
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
    totalHT: number;
    totalTTC: number;
    userDetails?: {
      name: string;
      email: string;
      phone: string;
    };
  };
}

export function QuotePDF({ data }: QuotePDFProps) {
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const ref = Math.random().toString(36).substring(7).toUpperCase();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>DEVIS</Text>
          <View style={styles.companyInfo}>
            <Text>Texam confection</Text>
            <Text>Adresse : Doha 1, Ain sbeaa, Casablanca</Text>
            <Text>Tél : +21264577766</Text>
            <Text>Service couture                                    Réf:{ref}</Text>
          </View>
          <View style={styles.clientInfo}>
            <Text>Date de facturation : {currentDate}</Text>
            {data.userDetails && (
              <>
                <Text>Client(e) : {data.userDetails.name}</Text>
                <Text>Tél : {data.userDetails.phone}</Text>
                <Text>Email : {data.userDetails.email}</Text>
              </>
            )}
          </View>
        </View>

        {/* Échantillon Section */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Échantillon</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, { width: 50 }]}>QTE</Text>
              <Text style={[styles.tableCell, { width: 200 }]}>DESIGNATION</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>PRIX UNIT HT</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>MONTANT HT</Text>
            </View>
            {data.needPatron && (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: 50 }]}>1</Text>
                <Text style={[styles.tableCell, { width: 200 }]}>Creation patronage {data.product}</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>180,00 DH</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>180,00 DH</Text>
              </View>
            )}
            {data.needSample && (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: 50 }]}>1</Text>
                <Text style={[styles.tableCell, { width: 200 }]}>Service couture {data.product}</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>150,00 DH</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>150,00 DH</Text>
              </View>
            )}
          </View>
          <View style={styles.total}>
            <Text>TOTAL HT: {(data.needPatron ? 180 : 0) + (data.needSample ? 150 : 0)} DH</Text>
            <Text>TVA: {((data.needPatron ? 180 : 0) + (data.needSample ? 150 : 0)) * 0.005} DH</Text>
            <Text>TOTAL TTC: {((data.needPatron ? 180 : 0) + (data.needSample ? 150 : 0)) * 1.005} DH</Text>
          </View>
        </View>

        {/* Production Section */}
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Production</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, { width: 50 }]}>QTE</Text>
              <Text style={[styles.tableCell, { width: 200 }]}>DESIGNATION</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>PRIX UNIT HT</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>MONTANT HT</Text>
            </View>
            {data.sizes > 1 && (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: 50 }]}>1</Text>
                <Text style={[styles.tableCell, { width: 200 }]}>Gradation tailles</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>70,00 DH</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>{70 * (data.sizes - 1)},00 DH</Text>
              </View>
            )}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, { width: 50 }]}>{data.quantity}</Text>
              <Text style={[styles.tableCell, { width: 200 }]}>Service couture {data.product}</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>35,00 DH</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>{35 * data.quantity},00 DH</Text>
            </View>
            {data.printing && (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: 50 }]}>{data.quantity}</Text>
                <Text style={[styles.tableCell, { width: 200 }]}>Impression {data.printing}</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>15,00 DH</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>{15 * data.quantity},00 DH</Text>
              </View>
            )}
            {data.embroideryType && (
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: 50 }]}>{data.quantity}</Text>
                <Text style={[styles.tableCell, { width: 200 }]}>Broderie {data.embroideryType}</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>50,00 DH</Text>
                <Text style={[styles.tableCell, { width: 100 }]}>{50 * data.quantity},00 DH</Text>
              </View>
            )}
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, { width: 50 }]}>{data.quantity}</Text>
              <Text style={[styles.tableCell, { width: 200 }]}>Finition / Repassage / Emballage</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>3,00 DH</Text>
              <Text style={[styles.tableCell, { width: 100 }]}>{3 * data.quantity},00 DH</Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text>TOTAL HT: {data.totalHT.toFixed(2)} DH</Text>
            <Text>TVA: {(data.totalHT * 0.005).toFixed(2)} DH</Text>
            <Text>TOTAL TTC: {data.totalTTC.toFixed(2)} DH</Text>
            <Text>Prix unitaire TTC: {(data.totalTTC / data.quantity).toFixed(2)} DH</Text>
          </View>
        </View>

        <View style={styles.notes}>
          <Text>Notes importantes:</Text>
          <Text>1- Il faut faire un échantillon avant le lancement de la production (la quantité estimée).</Text>
          <Text>2- Le paiement de l&apos;échantillon est obligatoire pour la validation de votre commande.</Text>
          <Text>3- A noter que le prix de l&apos;échantillon n&apos;est pas remboursable.</Text>
          <Text style={{ marginTop: 20 }}>
            Arrêté la présente facture à la somme de : {'//'}{data.totalTTC.toFixed(2)}{'//'} MAD
          </Text>
        </View>
      </Page>
    </Document>
  );
} 