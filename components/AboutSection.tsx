import Image from "next/image";
import { Award, Users, Factory, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    number: "45",
    label: "Années d'expertise",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Clients satisfaits",
  },
  {
    icon: Factory,
    number: "100%",
    label: "Fabrication française",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Recommandations",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-terra-100 via-sand-100 to-sage-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11055_cropped.webp"
                    alt="Réalisation aménagement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11609_cropped.webp"
                    alt="Portail moderne"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11129_cropped.webp"
                    alt="Terrasse contemporaine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/12036_cropped.webp"
                    alt="Aménagement complet"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terra-200/40 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-terra-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Notre Histoire
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-6">
              45 ans de passion
              <br />
              au service de
              <br />
              <span className="text-terra-600">votre extérieur</span>
            </h2>

            <div className="space-y-4 mb-8 text-sage-700 leading-relaxed">
              <p>
                Depuis 1979, nous sommes une entreprise familiale spécialisée dans
                l'aménagement extérieur. Notre atelier basé dans le Puy-de-Dôme nous
                permet de concevoir et fabriquer tous nos produits sur-mesure.
              </p>
              <p>
                Notre équipe d'artisans qualifiés combine tradition et innovation pour
                créer des aménagements durables et esthétiques. Chaque projet est unique
                et bénéficie de notre expertise reconnue.
              </p>
              <p className="font-medium text-forest-800">
                Notre passage à la télévision témoigne de la qualité de notre travail
                et de notre savoir-faire reconnu dans toute la région.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terra-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-terra-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-forest-900">{stat.number}</div>
                      <div className="text-sm text-sage-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
