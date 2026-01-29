"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold text-forest-900">
              Aménagement <span className="text-terra-600">Extérieur</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#realisations"
              className="text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="#savoir-faire"
              className="text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Savoir-Faire
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:+33000000000"
              className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 text-xs font-semibold rounded-lg bg-terra-600 hover:bg-terra-700 text-white shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neutral-200">
            <Link
              href="#realisations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="#savoir-faire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Savoir-Faire
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-forest-800 hover:text-terra-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
