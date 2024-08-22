'use client'

import Link from 'next/link';
import { ScissorsIcon, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`px-4 lg:px-6 h-20 flex items-center justify-between bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <Link className="flex items-center justify-center" href="/">
          <ScissorsIcon className="h-8 w-8 text-black" />
          <span className="ml-2 text-2xl font-bold text-black">TEXAM</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {['Accueil', 'Expertise', 'A Propos', 'Contact'].map((item) => (
            <Link key={item} className="text-sm font-medium text-gray-600 hover:text-black transition-colors hover:underline underline-offset-4" href={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </motion.div>
        </button>
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
            {['Accueil', 'Notre Expertise', 'À Propos', 'Contact'].map((item) => (
              <Link
                key={item}
                className="block py-3 text-lg font-medium text-gray-600 hover:text-black transition-colors border-b border-gray-100 last:border-b-0"
                href={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                onClick={toggleMenu}
              >
                {item}
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
                <ScissorsIcon className="h-8 w-8 text-black" />
                <span className="ml-2 text-2xl font-bold text-black">TEXAM</span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">Votre partenaire de confiance dans l'industrie textile depuis 1990.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                {['Accueil', 'Notre Expertise', 'À Propos', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link className="text-sm text-gray-600 hover:text-black transition-colors" href={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-600">123 Rue de la Mode, 75001 Paris, France</p>
              <p className="text-sm text-gray-600 mt-2">contact@texam.fr</p>
              <p className="text-sm text-gray-600 mt-2">+33 1 23 45 67 89</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2023 TEXAM. Tous droits réservés.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-gray-500 hover:text-black transition-colors" href="/privacy">
                Politique de confidentialité
              </Link>
              <Link className="text-sm text-gray-500 hover:text-black transition-colors" href="/terms">
                Conditions d'utilisation
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}