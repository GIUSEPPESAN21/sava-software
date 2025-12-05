import { Linkedin, Mail, Phone } from "lucide-react";
import logoSava from "@/assets/logo-sava.jpg";

const footerLinks = {
  servicios: [
    { label: "Sector Salud", href: "#servicios" },
    { label: "Sector Logística", href: "#servicios" },
    { label: "Inteligencia Artificial", href: "#servicios" },
    { label: "Software a Medida", href: "#servicios" },
  ],
  productos: [
    { label: "BioEthicCare360®", href: "#productos" },
    { label: "SaludIA", href: "#productos" },
    { label: "OSIRIS", href: "#productos" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#inicio" },
    { label: "Equipo", href: "#equipo" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="hero-gradient border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <img
                src={logoSava}
                alt="SAVA Software"
                className="h-12 rounded-lg"
              />
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Transformamos sectores complejos a través de la tecnología,
              combinando Ingeniería Industrial e Inteligencia Artificial.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/savasoftware/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn de SAVA Software"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:joseph.sanchez@uniminuto.edu.co"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+573222074527"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Teléfono"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SAVA Software. Todos los derechos
              reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Software for Health & Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
