import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <div className="prose max-w-3xl">
        <p className="text-lg mb-6">{t('description')}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t('historyTitle')}</h2>
            <p>{t('historyContent')}</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t('valuesTitle')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('quality')}</li>
              <li>{t('innovation')}</li>
              <li>{t('sustainability')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 