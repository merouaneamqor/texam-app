import { getTranslations } from 'next-intl/server';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Full screen with dramatic image */}
      <section className="relative h-screen">
        <Image
          src="/images/hero/hero-image.jpg"
          alt="Texam Atelier"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-center mb-6">
            {t('welcome')}
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl text-center mb-8">
            {t('tagline')}
          </p>
          <Link 
            href="/devis"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {t('servicesBtn')}
          </Link>
        </div>
      </section>

      {/* Services Grid - Minimal with hover effects */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('service1Title'),
                desc: t('service1Description'),
                image: '/images/services/service1.jpg'
              },
              {
                title: t('service2Title'),
                desc: t('service2Description'),
                image: '/images/services/service2.jpg'
              },
              {
                title: t('service3Title'),
                desc: t('service3Description'),
                image: '/images/services/service3.jpg'
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-light mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Clean and minimal */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">{t('aboutTitle')}</h2>
              <p className="text-gray-600 mb-8">{t('aboutDescription')}</p>
              <Link 
                href="/a-propos"
                className="text-black border-b border-black pb-1 hover:border-gray-400 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about/about-image.jpg"
                alt="About Texam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Dramatic and minimal */}
      <section className="relative h-[70vh]">
        <Image
          src="/images/hero/hero-image.jpg"
          alt="Contact Texam"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">
            {t('ctaTitle')}
          </h2>
          <Link 
            href="/contact"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {t('contactBtn')}
          </Link>
        </div>
      </section>
    </div>
  );
}

// Add metadata generation for SEO
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: t('welcome'),
    description: t('tagline'),
  };
} 