import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "fabric", label: "1. Understanding Fabric Options" },
  { id: "printing", label: "2. Printing vs. Embroidery Guide" },
  { id: "sizing", label: "3. Sizing for Bulk Orders" },
  { id: "moq", label: "4. MOQ & Pricing Tiers" },
  { id: "turnaround", label: "5. Turnaround Time Planning" },
  { id: "artwork", label: "6. How to Submit Artwork" },
  { id: "quality", label: "7. Quality Checklist" },
];

const fabricData = [
  {
    name: "Cotton Pique",
    gsm: "180–220 GSM",
    pros: "Breathable, soft, natural feel",
    cons: "Can shrink if not pre-washed",
    best: "Office wear, formal events",
  },
  {
    name: "Poly-Cotton Blend",
    gsm: "170–200 GSM",
    pros: "Shape-retaining, less wrinkling",
    cons: "Less breathable than pure cotton",
    best: "Daily wear, uniform programs",
  },
  {
    name: "Performance Dry-Fit",
    gsm: "140–170 GSM",
    pros: "Moisture-wicking, lightweight",
    cons: "Less formal appearance",
    best: "Sports events, outdoor activities",
  },
  {
    name: "CVC (Chief Value Cotton)",
    gsm: "190–210 GSM",
    pros: "Color-fast, economical, durable",
    cons: "Slightly stiffer than pure cotton",
    best: "Budget-conscious bulk orders",
  },
];

const pricingData = [
  {
    qty: "25–50 pieces",
    priceRange: "₹380–₹550/pc",
    notes: "Entry MOQ, setup costs apply",
  },
  {
    qty: "51–100 pieces",
    priceRange: "₹320–₹450/pc",
    notes: "15–20% saving vs. entry tier",
  },
  {
    qty: "101–250 pieces",
    priceRange: "₹270–₹380/pc",
    notes: "Best value range for most companies",
  },
  {
    qty: "250+ pieces",
    priceRange: "₹220–₹320/pc",
    notes: "Maximum discount, dedicated account manager",
  },
];

const timelineSteps = [
  {
    phase: "Artwork submission & approval",
    days: "Day 1–2",
    note: "Submit vector files; OfNeeds sends proof within 24 hours",
  },
  {
    phase: "Sample production (optional)",
    days: "Day 3–5",
    note: "Recommended for orders 100+ pieces; adds 2 business days",
  },
  {
    phase: "Bulk production",
    days: "Day 3–9",
    note: "7–9 days for 25–500 pieces; 10–14 days for 500–2,000 pieces",
  },
  {
    phase: "Quality check & packaging",
    days: "Day 9–10",
    note: "Each piece inspected; individual polybag packaging included",
  },
  {
    phase: "Dispatch & delivery",
    days: "Day 10–12",
    note: "1–2 days to Bangalore/metros; 2–4 days to tier-2 cities",
  },
];

const qualityItems = [
  "Logo position consistent across all pieces (left chest, centered, or sleeve as specified)",
  "Logo colors match approved proof (check against Pantone swatch in natural light)",
  "Stitching quality on embroidered pieces — no loose threads, consistent density",
  "Collar shape consistent and not distorted from printing/embroidery process",
  "Size labels visible and accurate (verify S/M/L/XL distribution against your order)",
  "Fabric GSM feels consistent with sample approved (request GSM test report for large orders)",
  "No stray marks, ink spots, or printing smudges",
  "Packaging intact — individual polybags folded neatly without creasing",
];

export default function BlogPost3Page() {
  useEffect(() => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline:
            "Polo T-Shirts Bulk Order: Complete Buying Guide for HR & Procurement Teams",
          description:
            "Everything you need to know about ordering polo t-shirts in bulk for your company in India. Fabric guide, printing options, MOQ tips & pricing from OfNeeds.",
          author: { "@type": "Organization", name: "OfNeeds Team" },
          publisher: {
            "@type": "Organization",
            name: "OfNeeds",
            logo: {
              "@type": "ImageObject",
              url: "https://ofneeds.com/logo.png",
            },
          },
          datePublished: "2026-04-08",
          dateModified: "2026-04-08",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://ofneeds.com/blog/polo-tshirts-bulk-order-guide",
          },
          keywords:
            "polo t-shirts bulk order, customized polo t-shirts India, corporate t-shirts Bangalore, bulk t-shirt printing",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://ofneeds.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://ofneeds.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Polo T-Shirts Bulk Order Guide",
              item: "https://ofneeds.com/blog/polo-tshirts-bulk-order-guide",
            },
          ],
        },
      ],
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "blog3-schema";
    s.textContent = JSON.stringify(blogSchema);
    if (!document.getElementById("blog3-schema")) {
      document.head.appendChild(s);
    }
    return () => {
      document.getElementById("blog3-schema")?.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Polo T-Shirts Bulk Order Guide for Companies in India | OfNeeds"
        description="Everything you need to know about ordering polo t-shirts in bulk for your company in India. Fabric guide, printing options, MOQ tips & pricing from OfNeeds."
        keywords="polo t-shirts bulk order, corporate polo shirts India, polo t-shirt printing Bangalore, customized polo shirts companies, bulk apparel order India"
        canonicalPath="/blog/polo-tshirts-bulk-order-guide"
      />
      <LandingNav />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section
          className="py-14 px-4"
          style={{
            background: "linear-gradient(135deg, #1a2744 0%, #2d4373 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <nav
              className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-[#c9a84c]">
                Home
              </Link>
              <span>/</span>
              <span className="text-blue-200">Blog</span>
              <span>/</span>
              <span className="text-[#c9a84c]">
                Polo T-Shirts Bulk Order Guide
              </span>
            </nav>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Apparel Guide
              </span>
              <span className="text-blue-300 text-xs">April 8, 2026</span>
              <span className="text-blue-300 text-xs">· 10 min read</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Polo T-Shirts Bulk Order: Complete Buying Guide for HR &amp;
              Procurement Teams
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              By <strong className="text-white">OfNeeds Team</strong> ·
              Corporate apparel specialists, Bangalore, India
            </p>
          </div>
        </section>

        {/* Content layout */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Article */}
          <article data-ocid="blog3-article">
            {/* TOC mobile */}
            <div className="lg:hidden bg-card border border-border rounded-xl p-5 mb-8">
              <p className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Table of Contents
              </p>
              <ol className="space-y-1.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-primary hover:text-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Intro */}
            <section id="intro">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-4 mt-0"
              >
                Why Polo T-Shirts Remain India&apos;s Most-Ordered Corporate
                Apparel
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Of all the corporate apparel categories OfNeeds fulfills —
                t-shirts, jackets, hoodies, caps — the polo t-shirt consistently
                tops the order list. In 2025, our polo orders grew 40%
                year-over-year, driven by IT companies, BPOs, retail chains, and
                manufacturing firms across Bangalore, Hyderabad, and Delhi NCR.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The reason is straightforward: the polo t-shirt occupies a rare
                sweet spot between formal and casual. It&apos;s professional
                enough for client-facing environments, comfortable enough for
                long office days, and versatile enough for events, outings, and
                daily uniform programs. It projects team identity without the
                rigidity of a formal shirt.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                However, a bulk polo order done wrong — wrong fabric, wrong
                printing method, wrong turnaround timeline — is a costly
                mistake. This guide walks HR managers and procurement teams
                through every decision point in the process, drawing on
                OfNeeds&apos; direct experience fulfilling thousands of polo
                orders across India.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-5 py-4 mb-6">
                <p className="text-sm font-semibold text-accent mb-1">
                  ⚡ Quick Numbers
                </p>
                <p className="text-sm text-foreground/80">
                  MOQ: 25 pieces · Turnaround: 7–12 days · Price: ₹220–₹550/pc
                  depending on qty &amp; fabric · Available across India
                </p>
              </div>
            </section>

            {/* Section 1 — Fabric */}
            <section id="fabric" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                1. Understanding Fabric Options
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Fabric choice is the single most important decision in a polo
                bulk order — it determines comfort, durability, print quality,
                and perceived value. Here&apos;s a practical comparison:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "#1a2744", color: "white" }}>
                      <th className="text-left px-4 py-3 rounded-tl-lg">
                        Fabric
                      </th>
                      <th className="text-left px-4 py-3">GSM</th>
                      <th className="text-left px-4 py-3">Pros</th>
                      <th className="text-left px-4 py-3">Cons</th>
                      <th className="text-left px-4 py-3 rounded-tr-lg">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fabricData.map((row) => (
                      <tr
                        key={row.name}
                        className="bg-card border-b border-border even:bg-muted/30"
                      >
                        <td className="px-4 py-3 font-semibold">{row.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.gsm}
                        </td>
                        <td className="px-4 py-3">{row.pros}</td>
                        <td className="px-4 py-3">{row.cons}</td>
                        <td className="px-4 py-3">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-5 py-4 mb-4">
                <p className="text-sm font-semibold text-accent mb-1">
                  💡 OfNeeds Recommendation
                </p>
                <p className="text-sm text-foreground/80">
                  For most corporate programs, 220 GSM cotton pique is the sweet
                  spot — premium feel, excellent logo print quality, and
                  durability through 50+ washes. Order samples before committing
                  to large quantities.
                </p>
              </div>
            </section>

            {/* Section 2 — Printing vs Embroidery */}
            <section id="printing" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                2. Printing vs. Embroidery — Making the Right Decision
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This is the question we get asked most often. The right answer
                depends on your logo type, budget, and quality expectations.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Screen Printing
              </h3>
              <p className="text-foreground/80 mb-3">
                <strong>Best for:</strong> Simple logos with 1–4 flat colors.
                Cost-effective for large quantities. The print sits on top of
                the fabric.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-4">
                <li>Cost: ₹30–₹80 per piece (per color layer)</li>
                <li>
                  Durability: Good — 40–50 washes before fading with premium
                  inks
                </li>
                <li>
                  Not suitable for: Detailed photography, gradients, complex
                  multi-color designs
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Embroidery
              </h3>
              <p className="text-foreground/80 mb-3">
                <strong>Best for:</strong> Logos with fine detail, text, or
                complex designs. Creates a premium, 3D texture. Preferred by
                consulting, finance, and luxury brand companies.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-4">
                <li>Cost: ₹80–₹220 per piece (depending on stitch count)</li>
                <li>
                  Durability: Excellent — holds through 100+ washes without
                  color loss
                </li>
                <li>
                  Setup cost: ₹500–₹1,500 digitization fee (one-time for the
                  design)
                </li>
                <li>
                  Not suitable for: Very fine hairline details or photographic
                  images
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Direct-to-Film (DTF) Printing
              </h3>
              <p className="text-foreground/80 mb-4">
                <strong>Best for:</strong> Full-color, photographic-quality
                designs — gradients, multi-color artwork, team event graphics.
                Transfers a film sheet onto the fabric. Ideal for special
                editions and events rather than daily-wear uniforms.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-5 py-4 mb-4">
                <p className="text-sm font-semibold text-accent mb-1">
                  💡 Decision Rule
                </p>
                <p className="text-sm text-foreground/80">
                  Simple text/icon logo → Screen Print. Formal or client-facing
                  wear → Embroidery. Complex colorful event graphics → DTF. When
                  in doubt, order one sample of each — OfNeeds provides samples
                  before bulk production.
                </p>
              </div>
            </section>

            {/* Section 3 — Sizing */}
            <section id="sizing" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                3. How to Measure and Select Sizes for Bulk Orders
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Wrong sizing is one of the most common (and most avoidable)
                problems in bulk apparel orders. Here&apos;s a proven process
                used by OfNeeds&apos; largest clients:
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 1: Collect size preferences — not assumptions
              </h3>
              <p className="text-foreground/80 mb-3">
                Use a simple Google Form or internal HR system to collect each
                employee&apos;s preferred t-shirt size (S/M/L/XL/XXL/3XL).
                Provide a size chart with chest measurements alongside standard
                size labels — different brands vary by 1–2 inches between sizes.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Step 2: Apply the +10% rule for future hires
              </h3>
              <p className="text-foreground/80 mb-3">
                Always order 10% extra across the most common sizes (typically
                M, L, XL in Indian corporate environments). This covers new
                joiners, replacements for damaged pieces, and size exchange
                requests.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Typical corporate size distribution (India)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-4">
                <li>
                  S: 5–8% · M: 25–30% · L: 30–35% · XL: 20–25% · XXL: 8–12% ·
                  3XL: 2–5%
                </li>
              </ul>
            </section>

            {/* Section 4 — MOQ & Pricing */}
            <section id="moq" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                4. MOQ and Pricing Tiers
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Polo t-shirt pricing follows a clear volume discount curve. Here
                are OfNeeds&apos; standard pricing tiers for 220 GSM cotton
                pique with one-color embroidered logo:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ background: "#1a2744", color: "white" }}>
                      <th className="text-left px-4 py-3 rounded-tl-lg">
                        Quantity
                      </th>
                      <th className="text-left px-4 py-3">Price Range</th>
                      <th className="text-left px-4 py-3 rounded-tr-lg">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row) => (
                      <tr
                        key={row.qty}
                        className="bg-card border-b border-border even:bg-muted/30"
                      >
                        <td className="px-4 py-3 font-semibold">{row.qty}</td>
                        <td
                          className="px-4 py-3 font-medium"
                          style={{ color: "#c9a84c" }}
                        >
                          {row.priceRange}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-foreground/80 mb-4">
                Prices above are indicative. Final pricing depends on fabric
                choice, number of logo positions, and printing method. Get an
                exact quote for your requirement from OfNeeds.
              </p>
              <p className="text-foreground/80 mb-4">
                👉{" "}
                <Link
                  to="/customized-tshirts"
                  className="text-primary font-medium hover:text-accent underline underline-offset-2"
                >
                  View Customized T-Shirts &amp; Polo Shirts at OfNeeds →
                </Link>
              </p>
            </section>

            {/* Section 5 — Turnaround */}
            <section id="turnaround" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                5. Turnaround Time Planning for HR Teams
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Turnaround time is the #1 source of stress in corporate apparel
                orders. The safest approach: build a realistic timeline
                backwards from your event or joining date.
              </p>
              <div className="space-y-3 mb-6">
                {timelineSteps.map((step) => (
                  <div
                    key={step.phase}
                    className="flex gap-4 bg-card border border-border rounded-lg p-4"
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: "#1a2744" }}
                    >
                      →
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-foreground text-sm">
                          {step.phase}
                        </span>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: "#c9a84c20", color: "#c9a84c" }}
                        >
                          {step.days}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {step.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-5 py-4 mb-4">
                <p className="text-sm font-semibold text-accent mb-1">
                  ⚠️ Important
                </p>
                <p className="text-sm text-foreground/80">
                  Always build in a 3-day buffer for your first order with a new
                  supplier. Once you&apos;ve placed 2–3 orders with OfNeeds, we
                  can offer priority scheduling that reduces turnaround to 5–7
                  days for repeat clients.
                </p>
              </div>
            </section>

            {/* Section 6 — Artwork */}
            <section id="artwork" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                6. How to Submit Artwork — Formats, Resolution, and Color Modes
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Poor artwork submission is the single biggest cause of
                production delays and quality issues. Here&apos;s what OfNeeds
                requires for perfect results:
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Accepted file formats
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-4">
                <li>
                  <strong>.ai (Adobe Illustrator)</strong> — preferred for
                  screen printing and embroidery
                </li>
                <li>
                  <strong>.eps (Encapsulated PostScript)</strong> — vector
                  format, widely accepted
                </li>
                <li>
                  <strong>.pdf (vector PDF)</strong> — ensure fonts are
                  outlined/embedded
                </li>
                <li>
                  <strong>.png at 300 DPI minimum</strong> — acceptable for DTF
                  only; transparent background required
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Color mode requirements
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80 mb-4">
                <li>
                  <strong>Screen printing:</strong> Pantone (PMS) codes
                  preferred. CMYK accepted. RGB will be converted and may shift.
                </li>
                <li>
                  <strong>Embroidery:</strong> Provide Pantone codes or closest
                  thread color reference (Madeira, Isacord, or Coats chart)
                </li>
                <li>
                  <strong>DTF:</strong> CMYK or RGB accepted — full-color
                  reproduction is accurate
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-5 py-4 mb-4">
                <p className="text-sm font-semibold text-accent mb-1">💡 Tip</p>
                <p className="text-sm text-foreground/80">
                  Don&apos;t have your logo in vector format? OfNeeds offers a
                  logo vectorization service for ₹499 — we&apos;ll convert your
                  PNG/JPG to a production-ready vector file in 24 hours.
                </p>
              </div>
            </section>

            {/* Section 7 — Quality Checklist */}
            <section id="quality" className="mt-10">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-2xl font-bold text-foreground mb-3"
              >
                7. Quality Checklist Before Accepting Delivery
              </h2>
              <p className="text-foreground/80 mb-4">
                Before signing off on a bulk polo order, inspect a sample of at
                least 10% of the pieces (or minimum 10 pieces, whichever is
                higher). Check the following:
              </p>
              <div className="bg-card border border-border rounded-xl p-5 space-y-2 mb-6">
                {qualityItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center text-xs font-bold"
                      style={{ color: "#c9a84c", borderColor: "#c9a84c" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 mb-4">
                OfNeeds conducts internal quality checks on every bulk order
                before dispatch. Our return/replacement rate is less than 0.5%
                of units — but having your own checklist ensures alignment on
                expectations from the start.
              </p>
              <p className="text-foreground/80 mb-4">
                Ready to place your bulk polo t-shirt order?{" "}
                <Link
                  to="/customized-tshirts"
                  className="text-primary font-medium hover:text-accent underline underline-offset-2"
                >
                  View our customized t-shirt options
                </Link>{" "}
                or{" "}
                <a
                  href="/#contact"
                  className="text-primary font-medium hover:text-accent underline underline-offset-2"
                >
                  get a free quote
                </a>{" "}
                from our team in Bangalore.
              </p>
            </section>

            {/* Related Posts */}
            <section className="mt-12 pt-8 border-t border-border">
              <h2
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-xl font-bold text-foreground mb-5"
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/blog/best-corporate-gifting-ideas"
                  className="block bg-card border border-border rounded-xl p-4 hover:border-accent hover:shadow-md transition-all"
                  data-ocid="related-post-gifts3"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Corporate Gifting
                  </span>
                  <p className="font-semibold text-foreground mt-1 text-sm leading-snug">
                    15 Best Corporate Gifting Ideas for Employees in India (2026
                    Guide)
                  </p>
                </a>
                <a
                  href="/blog/welcome-gifts-employee-guide"
                  className="block bg-card border border-border rounded-xl p-4 hover:border-accent hover:shadow-md transition-all"
                  data-ocid="related-post-welcome3"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Employee Onboarding
                  </span>
                  <p className="font-semibold text-foreground mt-1 text-sm leading-snug">
                    How to Choose the Perfect Welcome Gift for New Employees — A
                    Complete Checklist
                  </p>
                </a>
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Explore Related Products
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/customized-tshirts"
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Customized T-Shirts
                  </Link>
                  <Link
                    to="/jackets"
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Corporate Jackets
                  </Link>
                  <Link
                    to="/welcome-gifts"
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Welcome Kits
                  </Link>
                  <Link
                    to="/lanyards"
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Custom Lanyards
                  </Link>
                </div>
              </div>
            </section>
          </article>

          {/* Sidebar TOC — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-5">
              <p className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                Contents
              </p>
              <ol className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">
                  Order polo t-shirts for your team
                </p>
                <Link
                  to="/customized-tshirts"
                  className="block text-center text-sm font-bold py-2 px-4 rounded-lg mb-2 transition-opacity hover:opacity-90"
                  style={{ background: "#c9a84c", color: "#1a2744" }}
                  data-ocid="sidebar-tshirt-cta"
                >
                  View T-Shirt Options
                </Link>
                <a
                  href="/#contact"
                  className="block text-center text-sm font-semibold py-2 px-4 rounded-lg border-2 transition-colors hover:bg-primary hover:text-white"
                  style={{ borderColor: "#1a2744", color: "#1a2744" }}
                >
                  Get Bulk Quote
                </a>
              </div>
            </div>
          </aside>
        </div>

        <LandingCTA
          heading="Ready to Order Bulk Polo T-Shirts for Your Team?"
          subheading="MOQ 25 pieces. Premium fabrics, fast turnaround, pan-India delivery. Get your quote in 4 hours."
        />
      </main>

      <LandingFooter />
    </>
  );
}
