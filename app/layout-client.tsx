'use client'

import Link from 'next/link'
import { MenuIcon, XIcon } from "lucide-react"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/app/components/navbar'
import { Button } from '@/app/components/ui/button'


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
    <>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </>
  )
}