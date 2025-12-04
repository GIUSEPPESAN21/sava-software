import { ArrowRight, Cpu, Building2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoColibri from "@/assets/logo-colibri.png";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Cpu className="h-4 w-4" />
              Inteligencia Artificial a Medida
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up text-foreground">
              Software para{" "}
              <span className="gradient-text">Salud</span> e{" "}
              <span className="gradient-text">Ingeniería</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Transformamos sectores complejos combinando Ingeniería Industrial,
              Inteligencia Artificial y Desarrollo de Software de vanguardia para
              crear soluciones que optimizan procesos y generan valor medible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#servicios">
                  Descubre Nuestras Soluciones
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#casos">Ver Casos de Éxito</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Co-Founders</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Proyectos Activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground">Sectores Clave</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Main Logo */}
              <div className="relative z-10 p-8 rounded-3xl gradient-card gradient-border shadow-2xl">
                <img
                  src={logoColibri}
                  alt="SAVA Colibrí Logo"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain animate-float"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-card shadow-xl border border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card shadow-xl border border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute top-1/2 -right-8 p-4 rounded-xl bg-card shadow-xl border border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Cpu className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
