import { Building2, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    category: "Gestión Clínica",
    client: "Clínica General del Norte",
    location: "Barranquilla",
    description:
      "Implementación activa de BioEthicCare360®. Optimización de procesos del comité de ética y fortalecimiento del soporte a decisión clínica en escenarios complejos.",
    status: "En curso",
    impact: ["Procesos de ética optimizados", "Decisiones clínicas mejoradas"],
  },
  {
    category: "Gestión Clínica",
    client: "Hospital de Alta Complejidad",
    location: "Putumayo",
    description:
      "Despliegue exitoso de BioEthicCare360®. Mejora significativa en trazabilidad documental y estandarización de deliberación ética en toda la institución.",
    status: "Completado",
    impact: ["Trazabilidad documental mejorada", "Deliberación ética estandarizada"],
  },
  {
    category: "Salud Comunitaria",
    client: "Proyecto Caracterización Buga",
    location: "Valle del Cauca",
    description:
      "Plataforma móvil para caracterización de perfiles de salud en población rural y urbana. Machine Learning e IA Híbrida para identificar patrones de riesgo.",
    status: "Activo",
    impact: ["Perfiles de salud caracterizados", "Patrones de riesgo identificados"],
    partners: ["UNIMINUTO", "Hospital San José de Buga"],
  },
  {
    category: "Salud Comunitaria",
    client: "Prevención Diabetes",
    location: "Guacarí, Valle del Cauca",
    description:
      "Caracterización y prevención de Diabetes Tipo 2 en población femenina. Análisis de datos para crear modelos preventivos efectivos.",
    status: "Activo",
    impact: ["Modelos preventivos creados", "Población femenina atendida"],
    partners: ["UNIMINUTO", "Universidad Distrital"],
  },
  {
    category: "Logística",
    client: "Cañaveral",
    location: "Colombia",
    description:
      "Desarrollo e implementación de software a medida para optimización y planificación de rutas de transporte. Mejora medible de eficiencia operativa y reducción de costos.",
    status: "Completado",
    impact: ["Eficiencia operativa mejorada", "Costos reducidos"],
  },
];

export function CasesSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "En curso":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Activo":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="casos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Experiencia Comprobada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Casos de <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Software activo generando valor en hospitales, comunidades y empresas
            logísticas.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card
              key={`${caseItem.client}-${index}`}
              className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {caseItem.category}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(caseItem.status)}>
                    {caseItem.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {caseItem.client}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {caseItem.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseItem.description}
                </p>

                {/* Impact */}
                <div className="space-y-2 mb-4">
                  {caseItem.impact.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-card-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Partners */}
                {caseItem.partners && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      Alianzas Estratégicas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.partners.map((partner) => (
                        <span
                          key={partner}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
