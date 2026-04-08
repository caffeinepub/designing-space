import { Linkedin } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { Link } from "react-router-dom";

const productLinks = [
  { label: "Corporate Gifts", href: "/corporate-gifts" },
  { label: "Welcome Gifts", href: "/welcome-gifts" },
  { label: "Customized T-Shirts", href: "/customized-tshirts" },
  { label: "Polo T-Shirts", href: "/polo-tshirts" },
  { label: "Trophies & Awards", href: "/trophies" },
  { label: "Lanyards", href: "/lanyards" },
  { label: "Standees", href: "/standees" },
  { label: "ID Cards", href: "/id-cards" },
];

const blogLinks = [
  {
    label: "Best Corporate Gifting Ideas",
    href: "/blog/best-corporate-gifting-ideas",
  },
  {
    label: "Welcome Gift Guide for Employees",
    href: "/blog/welcome-gift-guide",
  },
  {
    label: "Polo T-Shirts Bulk Order Guide",
    href: "/blog/polo-tshirts-bulk-order",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "ofneeds.com";

  return (
    <footer className="bg-primary text-primary-foreground" data-ocid="footer">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-accent tracking-wide">
                OfNeeds
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              Your Reliable Partner for Corporate Gifting Solutions. Premium
              customized merchandise delivered across India.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary-foreground/60 hover:text-accent transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Products
            </h3>
            <ul className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Blog
            </h3>
            <ul className="flex flex-col gap-2">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+917090795666"
                  className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  +91 70907 95666
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ofneeds.com"
                  className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-smooth"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  hello@ofneeds.com
                </a>
              </li>
              <li>
                <address className="flex items-start gap-2 text-sm text-primary-foreground/70 not-italic">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    #31, 3rd Main BDA Road, Kalyana Nagar, Moodalapalya
                    Nagarabhavi Main Road, Bangalore-560072
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/50 text-sm">
            © {year} OfNeeds. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
