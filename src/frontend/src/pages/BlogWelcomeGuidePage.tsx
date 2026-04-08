import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Step 1: Define Your Budget Per Employee",
    body: "The first step in choosing the right welcome gift is setting a per-head budget. OfNeeds offers curated welcome kits at ₹599 (Essential) and ₹1,199 (Premium) per person. For startups with tighter budgets, the Essential Kit covers the basics beautifully. For enterprises looking to make a strong first impression, the Premium Kit includes more items with higher perceived value.",
  },
  {
    heading: "Step 2: Prioritize Practical Over Novelty",
    body: "Gifts that employees use every day create the most brand recall. Sipper bottles, notebooks, polo t-shirts, and mugs score highest on daily use frequency. Novelty items like desk toys or figurines may delight initially but rarely see long-term use. Focus your welcome kit budget on items with genuine utility.",
  },
  {
    heading: "Step 3: Ensure Everything Carries Your Logo",
    body: "Every item in the welcome kit should be a brand touchpoint. From the polo t-shirt tag to the sipper bottle base, your logo should appear consistently across all items. OfNeeds handles complete logo customization — embroidery on apparel, laser engraving on bottles, sublimation on mugs — maintaining brand standards across all items.",
  },
  {
    heading: "Step 4: Choose Premium Packaging",
    body: "The unboxing experience matters as much as the contents. A well-packaged welcome kit signals that the company values quality and attention to detail. OfNeeds offers branded gift boxes, tissue paper, welcome cards, and ribbons that elevate the gifting experience from functional to memorable.",
  },
  {
    heading: "Step 5: Plan for Recurring Orders",
    body: "If your company hires regularly, set up a recurring order arrangement with OfNeeds. We offer preferred pricing for monthly onboarding batches and maintain your approved design files for quick reorders. This ensures consistent gifting quality as your team grows.",
  },
];

export default function BlogWelcomeGuidePage() {
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
            Welcome Kits
          </Badge>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-4">
            How to Choose the Right Welcome Gift for New Employees — A Complete
            Checklist
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
              Day One sets the tone for everything that follows. A thoughtful
              welcome gift tells a new employee: we planned for you, we value
              you, and we're glad you're here. But with so many options, how do
              you choose the right welcome gift? This checklist walks you
              through the key decisions — from budget to branding to packaging.
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
                Start with OfNeeds
              </h2>
              <p className="text-muted-foreground mb-4">
                Our ready-to-ship welcome kits start at ₹599/person. Contact us
                to customize your kit and get a bulk quote within 24 hours.
              </p>
              <a href="/#contact">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  data-ocid="blog-cta"
                >
                  Request a Welcome Kit Quote
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground mb-3">
                Related pages:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Welcome Gifts", href: "/welcome-gifts" },
                  { label: "Welcome Goodies", href: "/welcome-goodies" },
                  { label: "Customized T-Shirts", href: "/customized-tshirts" },
                  { label: "Sipper Bottles", href: "/sipper-bottles" },
                  { label: "Custom Mugs", href: "/customized-mugs" },
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
