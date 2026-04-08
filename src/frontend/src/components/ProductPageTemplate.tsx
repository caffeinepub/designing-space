import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";

interface FAQ {
  q: string;
  a: string;
}
interface Feature {
  title: string;
  desc: string;
}

interface ProductPageProps {
  title: string;
  metaTitle: string;
  breadcrumb: string;
  heroSubtitle: string;
  description: string;
  features: Feature[];
  faqs: FAQ[];
  relatedLinks: { label: string; href: string }[];
  schemaType?: string;
  contentBlocks?: { heading: string; body: string }[];
}

export default function ProductPageTemplate({
  title,
  metaTitle,
  breadcrumb,
  heroSubtitle,
  description,
  features,
  faqs,
  relatedLinks,
  contentBlocks,
}: ProductPageProps) {
  return (
    <>
      {/* Breadcrumb + Hero */}
      <section
        className="w-full bg-primary text-primary-foreground py-12"
        data-ocid="product-hero"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-primary-foreground/60 mb-4"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-accent transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground/80">{breadcrumb}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            {title}
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl mb-6">
            {heroSubtitle}
          </p>
          <a href="#enquiry" data-ocid="product-cta-quote">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="w-full bg-background py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {metaTitle}
            </h2>
            <div className="w-12 h-1 bg-accent mb-6 rounded-full" />
            <p className="text-muted-foreground leading-relaxed text-base">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="w-full bg-muted/30 py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose OfNeeds?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <Card
                  key={f.title}
                  className="border border-border shadow-corporate"
                  data-ocid="feature-card"
                >
                  <CardContent className="pt-5">
                    <CheckCircle2 className="w-5 h-5 text-accent mb-2" />
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content blocks */}
      {contentBlocks && contentBlocks.length > 0 && (
        <section className="w-full bg-background py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 max-w-3xl">
            {contentBlocks.map((block) => (
              <div key={block.heading}>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  {block.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="w-full bg-muted/30 py-12" data-ocid="faq-section">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <Card
                  key={faq.q}
                  className="border border-border shadow-corporate"
                  data-ocid="faq-item"
                >
                  <CardContent className="pt-5">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related links */}
      {relatedLinks.length > 0 && (
        <section className="w-full bg-background py-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Explore Related Products
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Badge
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-smooth px-3 py-1.5 text-sm cursor-pointer"
                    data-ocid="related-link"
                  >
                    {link.label} <ArrowRight className="ml-1 w-3 h-3 inline" />
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section
        className="w-full bg-muted/40 py-16"
        id="enquiry"
        data-ocid="product-enquiry-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Request a Bulk Order Quote
            </h2>
            <p className="text-muted-foreground">
              Get a customized quote within 24 hours.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
