import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const productLinks = [
  { label: "Corporate Gifts", href: "/corporate-gifts" },
  { label: "Welcome Gifts", href: "/welcome-gifts" },
  { label: "Welcome Goodies", href: "/welcome-goodies" },
  { label: "Customized T-Shirts", href: "/customized-tshirts" },
  { label: "Polo T-Shirts", href: "/polo-tshirts" },
  { label: "Jackets", href: "/jackets" },
  { label: "Customized Jackets", href: "/customized-jackets" },
  { label: "Sipper Bottles", href: "/sipper-bottles" },
  { label: "Customized Mugs", href: "/customized-mugs" },
  { label: "Trophies & Awards", href: "/trophies" },
  { label: "Lanyards", href: "/lanyards" },
  { label: "Standees", href: "/standees" },
  { label: "ID Cards", href: "/id-cards" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog/best-corporate-gifting-ideas" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-primary shadow-corporate-lg"
      data-ocid="navbar"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="OfNeeds Home"
          >
            <span className="font-display text-2xl font-bold text-accent tracking-wide">
              OfNeeds
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.slice(0, 1).map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded transition-smooth ${
                    isActive
                      ? "text-accent"
                      : "text-primary-foreground/90 hover:text-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-smooth rounded"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-corporate-lg py-2 z-50">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-smooth"
                      onClick={() => setProductsOpen(false)}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-smooth rounded"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#contact"
              className="ml-2 px-5 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 transition-smooth shadow-sm"
              data-ocid="navbar-cta"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4"
          data-ocid="mobile-menu"
        >
          <nav className="flex flex-col gap-1 pt-3">
            <NavLink
              to="/"
              className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-smooth"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <button
              type="button"
              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-smooth"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products{" "}
              <ChevronDown
                className={`w-4 h-4 transition-smooth ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {productsOpen && (
              <div className="pl-4 flex flex-col gap-1">
                {productLinks.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="px-3 py-2 text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                    onClick={() => {
                      setMobileOpen(false);
                      setProductsOpen(false);
                    }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-smooth"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#contact"
              className="mt-2 px-5 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg text-center hover:bg-accent/90 transition-smooth"
              data-ocid="mobile-cta"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
