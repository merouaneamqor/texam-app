import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
  
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
  // Match all pathnames except for
  // - … files in the public folder
  // - … files with extensions (e.g. favicon.ico)
  // - … internal API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 