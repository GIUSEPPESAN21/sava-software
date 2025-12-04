import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "BioEthicCare360®",
    tagline: "Plataforma de Decisión Clínica y Ética",
    description:
      "Plataforma robusta para apoyar la toma de decisiones clínicas y éticas en UCI, Oncología y Cuidado Paliativo. Digitaliza flujos de trabajo garantizando trazabilidad, agilidad y cumplimiento normativo.",
    features: [
      "Gestión de Consentimiento Informado",
      "Acta Ética 1-Click con soporte legal",
      "Auditor de Sesgos con IA",
      "Deliberación Guiada con marcos éticos",
    ],
    status: "Implementado",
    statusColor: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    name: "SaludIA",
    tagline: "Salud Preventiva Comunitaria",
    description:
      "Herramientas de IA para llevar alta tecnología a comunidades vulnerables, mitigando disparidades y promoviendo la medicina preventiva a través de aplicaciones móviles accesibles.",
    features: [
      "Caracterización de perfiles de salud",
      "Machine Learning para patrones de riesgo",
      "Intervenciones tempranas",
      "Modelos preventivos efectivos",
    ],
    status: "Activo",
    statusColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    name: "OSIRIS",
    tagline: "Gestión Inteligente de Inventarios",
    description:
      "Plataforma revolucionaria que transforma la gestión de inventarios manual en un sistema automatizado e inteligente usando Visión por Computadora e IA Multimodal.",
    features: [
      "Visión por Computadora",
      "Reconocimiento instantáneo de artículos",
      "Conteo en tiempo real desde app",
      "Eliminación de quiebres de stock",
    ],
    status: "En Desarrollo",
    statusColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Nuestras Soluciones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Productos <span className="gradient-text">Innovadores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Software diseñado para resolver problemas reales con tecnología de
            vanguardia.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-xl flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={product.statusColor}
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {product.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-card-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  asChild
                >
                  <a href="#contacto">
                    Más Información
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
