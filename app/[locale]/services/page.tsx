import { Button } from "@/app/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ServicesPage() {
  const t = await getTranslations('services');

  const services = [
    { key: 'conception', textKey: 'conceptionText' },
    { key: 'samples', textKey: 'samplesText' },
    { key: 'cutting', textKey: 'cuttingText' },
    { key: 'production', textKey: 'productionText' },
    { key: 'customization', textKey: 'customizationText' },
    { key: 'grading', textKey: 'gradingText' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <section className="w-full py-16 md:py-32 lg:py-48 bg-white shadow-lg rounded-lg">
        <div className="container px-6 md:px-8 mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-center text-gray-800">
              {t('title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.key} className="p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {t(`sections.${service.key}`)}
                  </h2>
                  <p className="text-gray-700 text-lg">
                    {t(`sections.${service.textKey}`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {t('minOrder.title')}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                <li>{t('minOrder.50units')}</li>
                <li>{t('minOrder.200units')}</li>
              </ul>
            </div>

            <div className="pt-10 text-center">
              <Button asChild className="bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                <Link href="/devis">
                  {t('cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 