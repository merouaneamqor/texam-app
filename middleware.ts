import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'ar'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'fr',
  
  // Domains can be used for language-specific domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.fr',
  //     defaultLocale: 'fr'
  //   },
  // ]
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 