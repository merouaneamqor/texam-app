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

        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Détails de la commande</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={[styles.tableCell, { flex: 2 }]}>
                <Text>Description</Text>
              </View>
              <View style={[styles.tableCell, { flex: 1 }]}>
                <Text>Prix (MAD)</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={[styles.tableCell, { flex: 2 }]}>
                <Text>{data.product} x {data.quantity} pièces</Text>
              </View>
              <View style={[styles.tableCell, { flex: 1 }]}>
                <Text>Variable</Text>
              </View>
            </View>

            {data.needPatron && (
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, { flex: 2 }]}>
                  <Text>Création du patron</Text>
                </View>
                <View style={[styles.tableCell, { flex: 1 }]}>
                  <Text>180</Text>
                </View>
              </View>
            )}

            {data.needSample && (
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, { flex: 2 }]}>
                  <Text>Échantillon</Text>
                </View>
                <View style={[styles.tableCell, { flex: 1 }]}>
                  <Text>50-150</Text>
                </View>
              </View>
            )}

            {data.printing && (
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, { flex: 2 }]}>
                  <Text>Impression: {data.printing}</Text>
                </View>
                <View style={[styles.tableCell, { flex: 1 }]}>
                  <Text>6-15 par pièce</Text>
                </View>
              </View>
            )}

            {data.embroideryType && (
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, { flex: 2 }]}>
                  <Text>Broderie: {data.embroideryType} ({data.embroideryColors} couleurs)</Text>
                </View>
                <View style={[styles.tableCell, { flex: 1 }]}>
                  <Text>10-50 par pièce</Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.total}>
            <Text>Total HT: {data.totalHT.toFixed(2)} MAD</Text>
            <Text>Total TTC: {data.totalTTC.toFixed(2)} MAD</Text>
          </View>
        </View>

        <View style={styles.notes}>
          <Text>Notes:</Text>
          <Text>- Prix indicatif hors tissu et selon la complexité finale</Text>
          <Text>- Le paiement de l'échantillon est obligatoire pour la validation de la commande</Text>
          <Text>- Quantité minimum: {data.quantity} pièces</Text>
        </View>
      </Page>
    </Document>
  );
} 