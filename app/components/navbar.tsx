import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Devis', href: '/devis' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
              À propos
            </Link>
            <Link href="/devis" className="text-gray-600 hover:text-black transition-colors">
              Devis
            </Link>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Button className="bg-black text-white hover:bg-gray-800">
              Démarrer un Projet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Démarrer un Projet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 