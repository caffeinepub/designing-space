import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "1. Choose the Right Fabric GSM",
    body: "The single most important factor in a corporate polo t-shirt order is fabric GSM (grams per square meter). For everyday office wear, 200 GSM is ideal — it holds shape, breathes well, and looks professional after multiple washes. For outdoor events or summer activations, 180 GSM dry-fit polyester works better. For premium gifting, 220 GSM pique cotton delivers a luxury feel. Always request fabric swatches before committing to a bulk order.",
  },
  {
    heading: "2. Decide Between Embroidery and Printing",
    body: "For polo t-shirts, embroidery is almost always the better choice for corporate logo placement. It has better durability (lasts 50+ washes without fading), adds texture and perceived quality, and looks premium on chest placement. Screen printing works well for large back designs or complex multi-color graphics. For photographic or gradient designs on dry-fit fabric, sublimation printing is the best option.",
  },
  {
    heading: "3. Set Your Color and Size Split Before Ordering",
    body: "One of the most common mistakes in bulk polo orders is not planning the size-color split in advance. Always collect employee size data before placing the order. For a typical office team in India, a rough starting split is: XS (5%), S (15%), M (35%), L (30%), XL (10%), XXL (5%). This avoids leftover inventory and ensures everyone gets the right fit.",
  },
  {
    heading: "4. Request a Pre-Production Sample",
    body: "For orders above 50 pieces, always request a pre-production sample from your vendor. This lets you verify fabric quality, logo placement accuracy, color matching, and fit before the full batch goes into production. OfNeeds provides pre-production samples for all bulk orders above 50 pieces. Factor in 2–3 extra days for sample approval in your project timeline.",
  },
  {
    heading: "5. Understand Lead Times and Plan Ahead",
    body: "Standard polo t-shirt bulk orders take 5–7 business days for up to 200 pieces and 10–14 days for larger quantities. If you have a fixed event date — annual day, onboarding batch, product launch — always add 5 extra buffer days to avoid last-minute delivery stress. OfNeeds offers rush production for select quantities at an additional charge when planned in advance.",
  },
];

export default function BlogPoloTshirtsPage() {
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
            Corporate Apparel
          </Badge>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-4">
            Polo T-Shirts Bulk Order: What to Check Before You Place a Corporate
            Order
          </h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/65">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> March 2025
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
              Placing a bulk polo t-shirt order for your company seems
              straightforward — until you receive 200 shirts in the wrong size
              or with a logo that fades after three washes. Here's a practical
              checklist of everything to verify before placing your corporate
              polo t-shirt order, based on hundreds of corporate orders
              fulfilled by OfNeeds.
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
                Place Your Polo T-Shirt Order
              </h2>
              <p className="text-muted-foreground mb-4">
                OfNeeds handles corporate polo t-shirt orders from 25 pieces
                with free sample, logo customization, and pan-India delivery.
              </p>
              <a href="/#contact">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  data-ocid="blog-cta"
                >
                  Get a Bulk Quote
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">
                Related pages:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Polo T-Shirts", href: "/polo-tshirts" },
                  { label: "Customized T-Shirts", href: "/customized-tshirts" },
                  { label: "Jackets", href: "/jackets" },
                  { label: "Corporate Gifts", href: "/corporate-gifts" },
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
