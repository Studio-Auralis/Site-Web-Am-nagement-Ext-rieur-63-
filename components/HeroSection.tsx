import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-sand-50">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Aménagement extérieur professionnel"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-800/85 to-forest-900/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge au-dessus */}
          <div className="inline-flex items-center gap-2 bg-terra-100/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-terra-200">
            <CheckCircle2 className="h-4 w-4 text-forest-600" />
            <span className="text-sm font-semibold text-forest-800">
              Fabricant français depuis 45 ans
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Créons ensemble
            <br />
            <span className="text-terra-300">votre oasis</span>
            <br />
            extérieure
          </h1>

          <p className="text-xl md:text-2xl text-sand-100 mb-10 max-w-2xl leading-relaxed font-light">
            Du portail à la terrasse, nous donnons vie à vos projets d'aménagement
            dans le Puy-de-Dôme avec expertise et passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold rounded-lg bg-terra-500 hover:bg-terra-600 text-white shadow-2xl hover:shadow-terra-600/50 transition-all group"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 shadow-xl transition-all"
            >
              Nos réalisations
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center gap-6 text-sand-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-terra-300" />
              <span className="text-sm font-medium">Direct usine</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-terra-300" />
              <span className="text-sm font-medium">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-terra-300" />
              <span className="text-sm font-medium">Garantie décennale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
