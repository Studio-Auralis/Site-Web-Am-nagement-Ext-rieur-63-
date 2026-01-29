import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Aménagement Extérieur
            </h3>
            <p className="text-sand-200 text-sm mb-4">
              Fabricant-Poseur depuis 45 ans. Spécialiste en portails, terrasses et clôtures dans le Puy-de-Dôme.
            </p>
            <div className="flex items-center gap-2 text-sm text-sand-200">
              <div className="bg-terra-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Vu à la TV
              </div>
              <div className="bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Direct Usine
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+33000000000"
                className="flex items-center gap-2 text-sm text-sand-200 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +33 0 00 00 00 00
              </a>
              <a
                href="mailto:contact@exemple.fr"
                className="flex items-center gap-2 text-sm text-sand-200 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@exemple.fr
              </a>
              <div className="flex items-center gap-2 text-sm text-sand-200">
                <MapPin className="h-4 w-4" />
                Puy-de-Dôme (63)
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Légal</h3>
            <div className="space-y-2">
              <Link
                href="/mentions-legales"
                className="block text-sm text-sand-200 hover:text-white transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block text-sm text-sand-200 hover:text-white transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-forest-800 text-center text-sm text-sand-400">
          <p>© {new Date().getFullYear()} Aménagement Extérieur. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
