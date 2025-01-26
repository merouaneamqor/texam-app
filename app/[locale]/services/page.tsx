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
    <div className="min-h-screen bg-white">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              {t('title')}
            </h1>

            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.key} className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    {t(`sections.${service.key}`)}
                  </h2>
                  <p className="text-gray-600">
                    {t(`sections.${service.textKey}`)}
                  </p>
                </div>
              ))}

              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-4">
                  {t('minOrder.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('minOrder.50units')}</li>
                  <li>{t('minOrder.200units')}</li>
                </ul>
              </div>

              <div className="pt-8 text-center">
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="/devis">
                    {t('cta')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 