import { Lightbulb, Rocket, Award, Settings } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Visión de Ingeniero",
    description:
      "Entendemos sus procesos (Ingeniería Industrial) y construimos tecnología para mejorarlos (Desarrollo & IA).",
  },
  {
    icon: Rocket,
    title: "Tecnología de Vanguardia",
    description:
      "Expertos en IA generativa, visión por computadora y machine learning que resuelven problemas reales.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description:
      "Software activo generando valor en hospitales, comunidades y empresas de logística.",
  },
  {
    icon: Settings,
    title: "Soluciones Hiperpersonalizadas",
    description:
      "No adaptamos su empresa a nuestro software. Construimos software que se adapta perfectamente a su operación.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            ¿Por Qué Elegirnos?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            La Diferencia <span className="gradient-text">SAVA</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos experiencia técnica, innovación y compromiso para entregar
            resultados excepcionales.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-lg">
                  <reason.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
