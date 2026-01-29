import { Fence, Home, Trees, Hammer } from "lucide-react";

const services = [
  {
    icon: Fence,
    title: "Portails & Clôtures",
    description: "Portails coulissants, battants, clôtures sur-mesure en aluminium ou acier.",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11609_cropped.webp",
  },
  {
    icon: Home,
    title: "Terrasses & Pergolas",
    description: "Terrasses en bois composite, pierre naturelle et pergolas bioclimatiques.",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11129_cropped.webp",
  },
  {
    icon: Trees,
    title: "Aménagement Paysager",
    description: "Création d'espaces verts, allées, murets et aménagements extérieurs complets.",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/12098_cropped.webp",
  },
  {
    icon: Hammer,
    title: "Rénovation Extérieure",
    description: "Rénovation de façades, réfection de terrasses et modernisation d'aménagements.",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11470_cropped.webp",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-sage-50 via-terra-50 to-sand-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-terra-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Nos Services
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Un savoir-faire complet
            <br />
            pour tous vos projets
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            De la conception à la réalisation, nous vous accompagnons dans tous vos projets
            d'aménagement extérieur avec expertise et créativité.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-sand-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terra-100 mb-4 group-hover:bg-terra-200 transition-colors">
                    <Icon className="h-7 w-7 text-terra-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-forest-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sage-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terra-500 to-forest-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
