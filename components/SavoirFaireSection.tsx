import { Lightbulb, Factory, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Conception",
    description:
      "Écoute de vos besoins et étude personnalisée de votre projet. Conseils sur-mesure pour une solution adaptée.",
  },
  {
    icon: Factory,
    title: "Fabrication",
    description:
      "Production directe dans notre usine du Puy-de-Dôme. Qualité française garantie et respect des délais.",
  },
  {
    icon: Wrench,
    title: "Pose",
    description:
      "Installation professionnelle par nos équipes qualifiées. Finitions soignées et respect des normes.",
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction",
    description:
      "Service après-vente réactif et garantie sur tous nos travaux. Votre satisfaction est notre priorité.",
  },
];

export function SavoirFaireSection() {
  return (
    <section id="savoir-faire" className="relative py-16 md:py-24 bg-gradient-to-br from-sand-100 via-terra-50 to-sage-100 overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmEzNGEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTI0IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Notre Savoir-Faire
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            De la conception à la pose, nous gérons votre projet de A à Z avec expertise et passion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-forest-100">
                  <Icon className="h-8 w-8 text-forest-600" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-neutral-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600">{step.description}</p>

                {/* Connector Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-forest-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTI0IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-terra-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Pourquoi nous choisir ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-terra-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Fabricant Direct Usine
                </h4>
                <p className="text-sm text-white/80">
                  Pas d'intermédiaire, des prix justes et une qualité maîtrisée de bout en bout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-terra-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Expertise Locale
                </h4>
                <p className="text-sm text-white/80">
                  45 ans d'expérience au service des particuliers du Puy-de-Dôme.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-terra-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Notoriété Reconnue
                </h4>
                <p className="text-sm text-white/80">
                  Passage TV et nombreux projets réalisés dans la région.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-terra-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Garantie & SAV
                </h4>
                <p className="text-sm text-white/80">
                  Service après-vente réactif et garantie sur tous nos travaux.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
