'use client'

import Link from 'next/link'
import { MenuIcon, XIcon } from "lucide-react"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Contact', path: '/contact' }
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`px-4 lg:px-6 h-20 flex items-center justify-between bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <Link className="flex items-center justify-center" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.88 76.66" className="h-8 w-auto">
            <g id="b">
              <g id="c">
                <rect x="59.48" y="30.66" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                <rect x="59.48" y="61.32" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                <path d="M45.99,23v45.99c0,4.23-3.43,7.67-7.67,7.67h0c-4.23,0-7.67-3.43-7.67-7.67V23c0-4.23-3.43-7.67-7.67-7.67H7.67C3.43,15.33,0,11.9,0,7.67H0C0,3.43,3.43,0,7.67,0h120.7C132.6,0,136.03,3.43,136.03,7.67h0c0,4.23-3.43,7.67-7.67,7.67H53.66c-4.23,0-7.67,3.43-7.67,7.67Z"/>
                <path d="M256.94,65.52l29.08-61.07c2.82-5.92,11.25-5.92,14.07,0l29.08,61.07c2.46,5.17-1.31,11.14-7.03,11.14h-1.39c-3,0-5.73-1.72-7.03-4.43l-18.96-39.65c-.68-1.43-2.72-1.43-3.4,0l-18.96,39.65c-1.29,2.71-4.03,4.43-7.03,4.43h-1.39c-5.73,0-9.5-5.97-7.03-11.14Z"/>
                <path d="M359.23,40.48v28.51c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67V7.67C343.89,3.43,347.33,0,351.56,0h3.07C357.46,0,360.06,1.56,361.39,4.06l26.45,49.6c.87,1.64,3.22,1.64,4.09,0l26.45-49.6C419.72,1.56,422.32,0,425.15,0h3.07C432.45,0,435.88,3.43,435.88,7.67v61.32c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67v-28.54c0-2.44-3.29-3.22-4.38-1.03l-16.5,24.82c-1.3,2.6-3.95,5.87-6.86,5.87h-5.86c-2.9,0-5.56-3.28-6.86-5.87l-16.49-24.8c-1.09-2.19-4.39-1.41-4.39,1.04Z"/>
                <path d="M182.95,36.74L152.07,4.26c-1.4-1.47-.36-3.9,1.68-3.9h17.69c.63,0,1.24,.26,1.67,.72l21.71,22.8c.91,.96,2.44,.96,3.35,0L219.88,1.07c.44-.46,1.04-.72,1.67-.72h17.69c2.03,0,3.07,2.43,1.68,3.9l-30.87,32.48c-.85,.89-.85,2.29,0,3.18l30.87,32.48c1.4,1.47,.36,3.9-1.68,3.9h-17.69c-.63,0-1.24-.26-1.67-.72l-21.71-22.8c-.91-.96-2.44-.96-3.35,0l-21.71,22.8c-.44,.46-1.04,.72-1.67,.72h-17.69c-2.03,0-3.07-2.43-1.68-3.9l30.87-32.48c.85-.89,.85-2.29,0-3.18Z"/>
                <path d="M239.79,66.09l-24.19-27.07c-.79-.88-.78-2.22,.02-3.1l24.54-26.77c1.43-1.56,4.02-.54,4.01,1.57l-.03,5.26c-.02,2.29-.88,4.49-2.42,6.18l-12.63,13.84c-.8,.87-.81,2.21-.02,3.09l13.03,14.65c1.14,1.28,1.77,2.95,1.76,4.67l-.04,6.15c-.01,2.11-2.62,3.1-4.03,1.52Z"/>
                <path d="M152.54,10.03l24.38,27.29c.76,.85,.75,2.14-.02,2.99l-24.74,26.99c-1.38,1.5-3.88,.52-3.87-1.52l.04-6.36c.01-1.72,.66-3.37,1.82-4.64l13.28-14.55c.77-.84,.78-2.13,.02-2.98l-13.08-14.71c-1.14-1.28-1.77-2.95-1.76-4.67l.04-6.36c.01-2.04,2.53-2.99,3.89-1.47Z"/>
              </g>
            </g>
          </svg>
          <span className="sr-only">TEXAM</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.name} className="text-sm font-medium text-gray-600 hover:text-black transition-colors hover:underline underline-offset-4" href={item.path}>
              {item.name}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </motion.div>
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white py-4 px-4 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="block py-3 text-lg font-medium text-gray-600 hover:text-black transition-colors border-b border-gray-100 last:border-b-0"
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-8 w-full border-t border-gray-200 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link className="flex items-center justify-start" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.88 76.66" className="h-8 w-auto">
                  <g id="b">
                    <g id="c">
                      <rect x="59.48" y="30.66" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                      <rect x="59.48" y="61.32" width="76.55" height="15.33" rx="7.67" ry="7.67"/>
                      <path d="M45.99,23v45.99c0,4.23-3.43,7.67-7.67,7.67h0c-4.23,0-7.67-3.43-7.67-7.67V23c0-4.23-3.43-7.67-7.67-7.67H7.67C3.43,15.33,0,11.9,0,7.67H0C0,3.43,3.43,0,7.67,0h120.7C132.6,0,136.03,3.43,136.03,7.67h0c0,4.23-3.43,7.67-7.67,7.67H53.66c-4.23,0-7.67,3.43-7.67,7.67Z"/>
                      <path d="M256.94,65.52l29.08-61.07c2.82-5.92,11.25-5.92,14.07,0l29.08,61.07c2.46,5.17-1.31,11.14-7.03,11.14h-1.39c-3,0-5.73-1.72-7.03-4.43l-18.96-39.65c-.68-1.43-2.72-1.43-3.4,0l-18.96,39.65c-1.29,2.71-4.03,4.43-7.03,4.43h-1.39c-5.73,0-9.5-5.97-7.03-11.14Z"/>
                      <path d="M359.23,40.48v28.51c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67V7.67C343.89,3.43,347.33,0,351.56,0h3.07C357.46,0,360.06,1.56,361.39,4.06l26.45,49.6c.87,1.64,3.22,1.64,4.09,0l26.45-49.6C419.72,1.56,422.32,0,425.15,0h3.07C432.45,0,435.88,3.43,435.88,7.67v61.32c0,4.23-3.43,7.67-7.67,7.67s-7.67-3.43-7.67-7.67v-28.54c0-2.44-3.29-3.22-4.38-1.03l-16.5,24.82c-1.3,2.6-3.95,5.87-6.86,5.87h-5.86c-2.9,0-5.56-3.28-6.86-5.87l-16.49-24.8c-1.09-2.19-4.39-1.41-4.39,1.04Z"/>
                      <path d="M182.95,36.74L152.07,4.26c-1.4-1.47-.36-3.9,1.68-3.9h17.69c.63,0,1.24,.26,1.67,.72l21.71,22.8c.91,.96,2.44,.96,3.35,0L219.88,1.07c.44-.46,1.04-.72,1.67-.72h17.69c2.03,0,3.07,2.43,1.68,3.9l-30.87,32.48c-.85,.89-.85,2.29,0,3.18l30.87,32.48c1.4,1.47,.36,3.9-1.68,3.9h-17.69c-.63,0-1.24-.26-1.67-.72l-21.71-22.8c-.91-.96-2.44-.96-3.35,0l-21.71,22.8c-.44,.46-1.04,.72-1.67,.72h-17.69c-2.03,0-3.07-2.43-1.68-3.9l30.87-32.48c.85-.89,.85-2.29,0-3.18Z"/>
                      <path d="M239.79,66.09l-24.19-27.07c-.79-.88-.78-2.22,.02-3.1l24.54-26.77c1.43-1.56,4.02-.54,4.01,1.57l-.03,5.26c-.02,2.29-.88,4.49-2.42,6.18l-12.63,13.84c-.8,.87-.81,2.21-.02,3.09l13.03,14.65c1.14,1.28,1.77,2.95,1.76,4.67l-.04,6.15c-.01,2.11-2.62,3.1-4.03,1.52Z"/>
                      <path d="M152.54,10.03l24.38,27.29c.76,.85,.75,2.14-.02,2.99l-24.74,26.99c-1.38,1.5-3.88,.52-3.87-1.52l.04-6.36c.01-1.72,.66-3.37,1.82-4.64l13.28-14.55c.77-.84,.78-2.13,.02-2.98l-13.08-14.71c-1.14-1.28-1.77-2.95-1.76-4.67l.04-6.36c.01-2.04,2.53-2.99,3.89-1.47Z"/>
                    </g>
                  </g>
                </svg>
                <span className="sr-only">TEXAM</span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">Votre partenaire de confiance dans l&apos;industrie textile depuis 1990.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link className="text-sm text-gray-600 hover:text-black transition-colors" href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic">
                <p className="text-sm text-gray-600">123 Rue de la Mode, 75001 Paris, France</p>
                <p className="text-sm text-gray-600 mt-2">
                  <a href="mailto:contact@texam.fr" className="hover:underline">contact@texam.fr</a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <a href="tel:+33123456789" className="hover:underline">+33 1 23 45 67 89</a>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TEXAM. Tous droits réservés.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-gray-500 hover:text-black transition-colors" href="/privacy">
                Politique de confidentialité
              </Link>
              <Link className="text-sm text-gray-500 hover:text-black transition-colors" href="/terms">
                Conditions d&apos;utilisation
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}