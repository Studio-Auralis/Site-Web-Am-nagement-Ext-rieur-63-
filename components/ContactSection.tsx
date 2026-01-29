import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-br from-sage-100 via-sand-100 to-terra-100 overflow-hidden">
      {/* Décorations */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-forest-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terra-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Parlez-nous de votre projet. Nous vous répondons rapidement avec une étude personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+33000000000"
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Phone className="h-5 w-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Téléphone</div>
                    <div className="text-sm text-neutral-600">+33 0 00 00 00 00</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@exemple.fr"
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Mail className="h-5 w-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Email</div>
                    <div className="text-sm text-neutral-600">contact@exemple.fr</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Zone d'intervention</div>
                    <div className="text-sm text-neutral-600">
                      Puy-de-Dôme (63) et alentours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-50 border border-forest-200 rounded-lg p-4">
              <h4 className="font-semibold text-forest-900 mb-2">
                Réponse rapide garantie
              </h4>
              <p className="text-sm text-forest-800">
                Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
