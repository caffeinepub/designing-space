import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "1. Employee Welcome Kits",
    body: "The best corporate gift is one that employees use every day. A well-curated welcome kit sets the tone for a new hire's journey. Include a custom polo t-shirt, premium notebook, sipper bottle, and a branded mug — all printed with your company logo. OfNeeds offers ready-to-ship welcome kits from ₹599/person, making it easy to onboard in style without breaking the budget.",
  },
  {
    heading: "2. Customized T-Shirts for Team Outings",
    body: "Customized t-shirts create instant team identity and are among the most popular corporate gifts in India. Whether for annual events, team outings, or everyday wear, polo and round neck t-shirts with embroidered logos look professional and are always appreciated. Order in bulk from OfNeeds with MOQ starting at just 25 pieces.",
  },
  {
    heading: "3. Premium Trophies & Awards",
    body: "Recognition is the most powerful motivator. Crystal trophies, metal awards, and custom-engraved plaques from OfNeeds are used for annual award nights, employee of the month programs, and sales achievement celebrations. Every trophy is individually packaged in a luxury box with custom engraving.",
  },
  {
    heading: "4. Eco-Friendly Sipper Bottles",
    body: "Sustainability is now a corporate priority. Branded stainless steel sipper bottles and copper bottles from OfNeeds reduce single-use plastic while keeping your brand visible at every meeting and commute. Available with laser engraving for a premium, long-lasting finish.",
  },
  {
    heading: "5. Custom Lanyards for Events",
    body: "Custom lanyards with company logo are essential for corporate events, conferences, and daily employee ID use. OfNeeds offers sublimation and satin lanyards with full-color printing, breakaway safety clasps, and multiple hook options. MOQ starts at just 50 pieces.",
  },
  {
    heading: "6. Office Mugs with Company Logo",
    body: "A customized ceramic mug is one of the most-used items on any employee's desk. Full-wrap printing keeps your brand visible for years. OfNeeds' dishwasher-safe, microwave-safe ceramic mugs are available in 24-piece batches, making them ideal for small team gifting and large corporate orders alike.",
  },
  {
    heading: "7. Customized Jackets for Corporate Teams",
    body: "Premium fleece jackets and windbreakers with embroidered logos elevate your brand's professional image. Popular for IT companies, manufacturing teams, and event staff, OfNeeds' corporate jackets are available in all sizes with Pantone color matching for exact brand accuracy.",
  },
];

export default function BlogBestGiftingPage() {
  return (
    <>
      <section
        className="w-full bg-primary text-primary-foreground py-12"
        data-ocid="blog-hero"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-accent transition-smooth mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <Badge className="bg-accent text-accent-foreground border-0 mb-4">
            Corporate Gifting
          </Badge>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-4">
            15 Best Corporate Gifting Ideas for Employees in India (2025 Guide)
          </h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/65">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> April 2025
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> OfNeeds Team
            </span>
          </div>
        </div>
      </section>

      <article className="w-full bg-background py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Corporate gifting in India has evolved far beyond boxes of mithai.
              In 2025, the best corporate gifts are practical, personalized, and
              purpose-built to strengthen employee engagement, brand recall, and
              team identity. Whether you're an HR manager planning onboarding
              kits or a procurement head managing bulk orders for a national
              event, this guide covers the top gifting ideas that deliver
              genuine impact.
            </p>

            {sections.map((s) => (
              <div key={s.heading} className="mb-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}

            <div className="bg-muted/40 border border-border rounded-lg p-6 mt-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                Ready to Order?
              </h2>
              <p className="text-muted-foreground mb-4">
                Get a custom bulk quote from OfNeeds for any of the corporate
                gifting ideas above. We handle everything from design to
                delivery.
              </p>
              <a href="/#contact">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  data-ocid="blog-cta"
                >
                  Get a Free Quote
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">
                Explore related pages:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Corporate Gifts", href: "/corporate-gifts" },
                  { label: "Welcome Gifts", href: "/welcome-gifts" },
                  { label: "Customized T-Shirts", href: "/customized-tshirts" },
                  { label: "Trophies", href: "/trophies" },
                  { label: "Sipper Bottles", href: "/sipper-bottles" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-accent hover:underline"
                  >
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
