"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après 100px de scroll
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:+33000000000"
      className={`md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-terra-600 text-white rounded-full shadow-2xl hover:bg-terra-700 hover:scale-110 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Appelez-nous"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
