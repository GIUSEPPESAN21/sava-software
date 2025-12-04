import { Heart, Truck, Brain, Shield, Activity, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Sector Salud",
    subtitle: "Innovación para la Vida",
    description:
      "Optimización de procesos clínicos en hospitales de alta complejidad y desarrollo de aplicaciones de salud preventiva para comunidades rurales.",
    features: [
      "Gestión Clínica Hospitalaria",
      "Salud Preventiva Comunitaria",
      "IA para Decisiones Éticas",
    ],
    color: "primary",
  },
  {
    icon: Truck,
    title: "Sector Logística",
    subtitle: "IA para la Eficiencia",
    description:
      "Implementación de soluciones de IA para optimización de cadena de suministro, planificación de rutas y gestión inteligente de inventarios.",
    features: [
      "Optimización de Rutas",
      "Gestión de Inventarios",
      "Análisis Predictivo",
    ],
    color: "primary",
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "IA generativa, visión por computadora y machine learning aplicado a problemas reales.",
  },
  {
    icon: Shield,
    title: "Seguridad y Cumplimiento",
    description: "Soluciones que garantizan trazabilidad y cumplimiento normativo.",
  },
  {
    icon: Activity,
    title: "Análisis de Datos",
    description: "Modelos predictivos y análisis estadístico para toma de decisiones.",
  },
  {
    icon: Package,
    title: "Software a Medida",
    description: "Desarrollo personalizado que se adapta perfectamente a su operación.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Nuestras Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Áreas de <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Convertimos los desafíos de la industria en ventajas competitivas a
            través de tecnología de vanguardia.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {service.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-card-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
