"use client"
import { Scissors } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Header component that maintains consistent branding across all pages
// Using only the #8b5cf6 purple color for brand elements
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with brand purple */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-brand-purple p-2 text-white">
            <Scissors size={20} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Föndevu</h1>
        </Link>

        {/* Desktop Navigation - Empty as these pages require login */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Navigation links removed - only accessible after login */}
        </nav>
      </div>
    </header>
  )
}
