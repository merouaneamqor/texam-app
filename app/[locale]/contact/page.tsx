import { getTranslations } from "next-intl/server";
import { Button } from "@/app/components/ui/button";

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      
      <div className="max-w-2xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('visitUs')}</h2>
          <p className="text-gray-600">Doha 1, Ain sbeaa, Casablanca</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('contactInfo')}</h2>
          <p className="text-gray-600">Email: texamcontact@gmail.com</p>
          <p className="text-gray-600">Tel: +212 645 777 664</p>
        </div>

        <div className="pt-6">
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <a href="mailto:texamcontact@gmail.com">
              {t('contactButton')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
} 