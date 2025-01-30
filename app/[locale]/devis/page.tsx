import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import QuoteBuilder from '../components/devis/quote-builder';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'devis' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function DevisPage() {
  const t = await getTranslations('devis');
  const messages = await getMessages();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-600 mb-8">{t('subtitle')}</p>
      <NextIntlClientProvider messages={{ devis: messages.devis }}>
        <QuoteBuilder />
      </NextIntlClientProvider>
      
      <div className="mt-8 text-sm text-gray-600">
        <h2 className="font-semibold mb-2">{t('notes.title')}</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>{t('notes.minQuantity')}</li>
          <li>{t('notes.fabricNote')}</li>
          <li>{t('notes.sampleApproval')}</li>
        </ul>
      </div>

      <div className="mt-8 text-sm">
        <h2 className="font-semibold mb-2">{t('contact.title')}</h2>
        <p>Email: texamcontact@gmail.com</p>
        <p>Tel: +212 645 777 664</p>
        <p>Adresse: Doha 1, Ain sbeaa, Casablanca</p>
      </div>
    </div>
  );
} 