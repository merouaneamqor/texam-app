import { getTranslations } from 'next-intl/server';
import { Button } from '../components/ui/button';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  {t('welcome')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-lg sm:text-xl md:text-2xl">
                  {t('tagline')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                  {t('servicesBtn')}
                </Button>
                <Button variant="outline" className="text-black border-black hover:bg-gray-100 w-full sm:w-auto">
                  {t('contactBtn')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{t('aboutTitle')}</h2>
                <p className="text-gray-600 text-lg">{t('aboutDescription')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{t('qualityPoint1')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{t('qualityPoint2')}</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('servicesTitle')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('service1Title')}</h3>
                <p className="text-gray-600">{t('service1Description')}</p>
              </div>
              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('service2Title')}</h3>
                <p className="text-gray-600">{t('service2Description')}</p>
              </div>
              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('service3Title')}</h3>
                <p className="text-gray-600">{t('service3Description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="py-16 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{t('qualityTitle')}</h2>
                <p className="text-gray-300 text-lg">{t('qualityDescription')}</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-gray-300">{t('yearsExperience')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1000+</div>
                    <div className="text-gray-300">{t('satisfiedClients')}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t('ctaDescription')}</p>
            <Button className="bg-black text-white hover:bg-gray-800">
              {t('ctaButton')}
            </Button>
          </div>
        </section>
      </main>
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