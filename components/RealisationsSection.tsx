"use client";

import Image from "next/image";
import { useState } from "react";

// Données de démonstration - À remplacer par les vraies données du CMS
const realisations = [
  {
    id: 1,
    title: "Portail aluminium moderne",
    category: "Portails",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11609_cropped.webp",
  },
  {
    id: 2,
    title: "Terrasse bois composite",
    category: "Terrasses",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11129_cropped.webp",
  },
  {
    id: 3,
    title: "Clôture design",
    category: "Clôtures",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11470_cropped.webp",
  },
  {
    id: 4,
    title: "Aménagement paysager",
    category: "Portails",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/12098_cropped.webp",
  },
  {
    id: 5,
    title: "Terrasse contemporaine",
    category: "Terrasses",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/12036_cropped.webp",
  },
  {
    id: 6,
    title: "Aménagement complet",
    category: "Clôtures",
    image: "https://www.daniel-moquet.fr/upimg/pages/landing-thumbnails/11055_cropped.webp",
  },
];

const categories = ["Tous", "Portails", "Terrasses", "Clôtures"];

export function RealisationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredRealisations =
    selectedCategory === "Tous"
      ? realisations
      : realisations.filter((r) => r.category === selectedCategory);

  return (
    <section id="realisations" className="relative py-16 md:py-24 bg-gradient-to-br from-sand-50 via-sage-50 to-terra-100 overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-forest-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-terra-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez nos projets réalisés dans le Puy-de-Dôme. Chaque projet est unique et conçu sur-mesure.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-forest-600 text-white shadow-md"
                  : "bg-white text-forest-800 hover:bg-forest-50 border border-forest-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de réalisations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRealisations.map((realisation) => (
            <div
              key={realisation.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={realisation.image}
                  alt={realisation.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold text-forest-600 mb-1">
                  {realisation.category}
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-800">
                  {realisation.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
