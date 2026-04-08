import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is the minimum order for branded sipper bottles?",
    answer:
      "At OfNeeds, the minimum order quantity for custom branded sipper bottles is 50 pieces per style. This applies to all materials — stainless steel, copper, plastic, and glass. For mixed-style orders, each variant must meet the 50-piece MOQ. We serve startups and enterprises alike, with volume discounts starting at 100 pieces. Contact us for a custom quote.",
  },
  {
    question: "Are the sipper bottles leakproof and certified safe?",
    answer:
      "Yes. All sipper bottles supplied by OfNeeds are leakproof, BPA-free, and food-grade certified. Our stainless steel and copper bottles carry food-safe certifications, and the plastic bottles are BPA-free and FDA-compliant. Every batch is quality-tested before dispatch. We provide material safety documentation on request for enterprise orders.",
  },
  {
    question: "What bottle capacities are available?",
    answer:
      "OfNeeds offers sipper bottles in multiple capacities to suit different use cases: 350ml (compact, ideal for desk use), 500ml (standard everyday carry), 750ml (sport and outdoor use), and 1000ml/1 litre (large capacity for gym, field teams, and outdoor events). Custom capacity options are available for orders above 500 pieces.",
  },
  {
    question: "How long does customization and delivery take?",
    answer:
      "Standard customization (logo printing or laser engraving) and delivery takes 7–12 business days after artwork approval. This includes a 1–2 day artwork proofing window. Rush orders within Bangalore can be fulfilled in 5 business days. Pan-India delivery adds 2–3 days. For gifting events or festivals, we recommend placing orders at least 3 weeks in advance.",
  },
  {
    question: "Are the bottles food-grade and certified?",
    answer:
      "All OfNeeds sipper bottles are made from food-grade materials. Stainless steel bottles are made from 18/8 (304-grade) food-safe steel. Copper bottles meet Ayurvedic and wellness safety standards. BPA-free plastic bottles comply with FDA and FSSAI standards. Glass bottles with silicone sleeves are borosilicate glass — heat-resistant and chemical-free. Material certificates available on request.",
  },
  {
    question: "Can you provide custom packaging for sipper bottle gifting?",
    answer:
      "Yes. OfNeeds offers custom packaging for sipper bottle corporate gifts, including branded kraft boxes, premium rigid gift boxes, customized mailer boxes, and individual sleeve packaging. Custom packaging with your company name, logo, and a personalized welcome message is available for an additional charge. Ideal for new employee welcome kits, Diwali gifting, and client appreciation hampers.",
  },
];

const bottleRange = [
  {
    name: "Stainless Steel Vacuum Sipper",
    capacity: "500ml / 750ml",
    material: "18/8 (304-grade) Stainless Steel",
    desc: "Double-wall vacuum insulation keeps beverages hot for 12 hours and cold for 24 hours. Leakproof lid with a wide-mouth opening. Premium weight and finish — the most popular choice for corporate welcome kits and premium gifting.",
    tag: "Most Popular",
  },
  {
    name: "Copper Ayurvedic Bottle",
    capacity: "1000ml",
    material: "Pure Copper",
    desc: "Inspired by traditional Ayurvedic wellness practices, copper bottles are a thoughtful and health-conscious corporate gift. Each bottle is individually hand-hammered with a smooth internal finish. Stores water safely and adds natural antimicrobial benefits.",
    tag: "Wellness Gifting",
  },
  {
    name: "BPA-Free Plastic Sipper",
    capacity: "350ml / 500ml / 750ml",
    material: "Tritan BPA-Free Plastic",
    desc: "Lightweight, durable, and affordable. Ideal for event giveaways, team sports, and high-volume bulk orders where cost is a priority. FDA and FSSAI compliant. Available in 20+ colours with custom logo printing in full colour.",
    tag: "Budget-Friendly",
  },
  {
    name: "Glass Bottle with Silicone Sleeve",
    capacity: "500ml",
    material: "Borosilicate Glass + Silicone",
    desc: "Premium borosilicate glass is heat-resistant, chemical-free, and tasteless — the purest sipping experience. The protective silicone sleeve adds grip and prevents breakage. A sophisticated gifting choice for senior executives, clients, and premium welcome kits.",
    tag: "Executive Gifting",
  },
];

const customizationMethods = [
  {
    method: "Laser Engraving",
    desc: "The most durable customization method. A laser removes the surface coating to reveal the metal below, creating a permanent, oxidation-resistant mark. Zero ink fading — the logo looks premium for the lifetime of the bottle. Best for stainless steel and copper bottles.",
  },
  {
    method: "Screen Printing",
    desc: "Vibrant, full-colour logo printing using durable inks baked onto the bottle surface. Best for BPA-free plastic and budget sipper bottles. Available in up to 4 spot colours. Cost-effective for large-volume orders.",
  },
  {
    method: "UV Digital Printing",
    desc: "Full-colour photographic printing directly onto the bottle surface using UV-cured inks. No colour limitations. Ideal for complex logos, gradient artwork, or designs with multiple colours. Works on all bottle types.",
  },
  {
    method: "Pantone Colour Matching",
    desc: "Custom bottle colours matched exactly to your brand's Pantone reference. Ensures your gifting inventory is perfectly on-brand. Available for plastic sipper bottles with an MOQ of 200 pieces.",
  },
];

const useCases = [
  {
    title: "Employee Onboarding Kits",
    desc: "Include a branded sipper bottle in every new employee welcome kit. It's a daily-use gift that keeps your brand visible on every desk, in every meeting, and on every commute.",
  },
  {
    title: "Festive Corporate Gifting",
    desc: "Diwali, New Year, Onam — a premium branded sipper bottle makes a thoughtful, practical, and eco-friendly festive gift for your entire team or client base.",
  },
  {
    title: "Event Giveaways & Conferences",
    desc: "Branded sipper bottles are among the most retained event giveaways. Conference attendees carry them home and use them daily — delivering ongoing brand exposure long after the event.",
  },
  {
    title: "Client Appreciation Gifts",
    desc: "Send a premium stainless steel sipper or a hand-hammered copper bottle to key clients as a year-end or project-completion gift. Paired with custom packaging, it becomes a memorable brand moment.",
  },
];

export default function SipperBottlesPage() {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Custom Branded Sipper Bottles for Corporate Gifts",
      description:
        "Customized sipper bottles for corporate gifting. Stainless steel, copper, BPA-free options with logo printing and engraving. Bulk orders from OfNeeds, Bangalore, India.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "299",
        highPrice: "1500",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        areaServed: "IN",
        seller: { "@type": "Organization", name: "OfNeeds" },
      },
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ofneeds.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Corporate Gifts",
          item: "https://ofneeds.com/corporate-gifts",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sipper Bottles",
          item: "https://ofneeds.com/sipper-bottles",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "sipper-product-schema";
    s1.textContent = JSON.stringify(productSchema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "sipper-breadcrumb-schema";
    s2.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => {
      s1.remove();
      s2.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Sipper Bottles for Corporate Gifts | Custom Branded | OfNeeds India"
        description="Custom branded sipper bottles for corporate gifting from OfNeeds. Stainless steel, copper & BPA-free options. Bulk orders for companies across India — get a free quote!"
        keywords="sipper bottles corporate gifts, branded sipper bottles India, custom sipper bottles bulk, corporate gifting sipper bottles Bangalore, promotional bottles India"
        canonicalPath="/sipper-bottles"
      />
      <LandingNav />

      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #2d4373 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1">›</span>
            <Link to="/corporate-gifts" className="hover:text-white">
              Corporate Gifts
            </Link>
            <span className="mx-1">›</span>
            <span style={{ color: "#c9a84c" }}>Sipper Bottles</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sipper Bottles Corporate Gifts — Brand Every Sip
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Customized sipper bottles that travel everywhere with your brand.
            Stainless steel, copper, BPA-free, and glass options with laser
            engraving and full-colour printing. Bulk orders for companies across
            India — minimum 50 pieces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg transition-opacity hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
                data-ocid="sipper-hero-cta"
              >
                Get a Free Quote
              </button>
            </a>
            <Link to="/welcome-gifts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors font-semibold"
              >
                Explore Welcome Kits
              </button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Why sipper bottles */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Sipper Bottles Make Ideal Corporate Gifts
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            Among all corporate gifting options, sipper bottles consistently
            rank as one of the most appreciated and long-retained gifts. Unlike
            consumables or decorative items, a quality sipper bottle becomes
            part of the recipient's daily routine — travelling to work, sitting
            on their desk, accompanying them to meetings and the gym. Every use
            reinforces your brand.
          </p>
          <p className="text-[#374151] leading-relaxed mb-4">
            For HR teams planning employee onboarding kits, a branded sipper
            bottle is the perfect utility addition that communicates care and
            thoughtfulness. For procurement and events teams at Bangalore
            companies looking for high-impact event giveaways, a custom
            stainless steel sipper outperforms paper bags, keychains, and
            notepads in terms of daily brand visibility and perceived value.
          </p>
          <p className="text-[#374151] leading-relaxed">
            OfNeeds supplies custom sipper bottles to 150+ companies across
            India. Our clients include IT firms in Bangalore, manufacturing
            companies in Pune, and e-commerce startups in Mumbai — all relying
            on OfNeeds for consistent quality, competitive bulk pricing, and
            reliable delivery.
          </p>
        </section>

        {/* Bottle range */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Corporate Sipper Bottle Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bottleRange.map((bottle) => (
              <div
                key={bottle.name}
                className="border border-[#e5e7eb] rounded-xl p-6 hover:border-[#c9a84c] hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#1a2744]">
                    {bottle.name}
                  </h3>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      background: "#c9a84c1a",
                      color: "#c9a84c",
                      border: "1px solid #c9a84c",
                    }}
                  >
                    {bottle.tag}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-[#c9a84c] font-semibold mb-3">
                  <span>{bottle.capacity}</span>
                  <span>·</span>
                  <span>{bottle.material}</span>
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {bottle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Customization */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Customization Options for Branded Sipper Bottles
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            We offer four customization methods depending on the bottle material
            and your branding requirements. Our design team provides free
            artwork consultation and digital proofs before any production
            begins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customizationMethods.map((m) => (
              <div key={m.method} className="bg-[#f8f9fa] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                  {m.method}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainable */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sustainable Corporate Gifting with Reusable Bottles
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            In an era where corporate sustainability commitments matter to
            employees and clients alike, sipper bottles are a powerful way to
            demonstrate your company's eco-consciousness. By gifting reusable
            bottles, you're directly reducing single-use plastic consumption
            within your organization. A single stainless steel sipper bottle
            replaces hundreds of disposable plastic bottles over its lifetime.
          </p>
          <p className="text-[#374151] leading-relaxed">
            OfNeeds also offers eco-friendly sipper bottle options made from
            bamboo-stainless steel hybrids, recycled ocean plastic, and
            wheat-straw composites for companies with strong green gifting
            mandates. These make excellent choices for ESG-focused companies,
            sustainability award ceremonies, and green team initiatives across
            India.
          </p>
        </section>

        {/* Use cases */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Use Cases for Branded Sipper Bottles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="border-l-4 pl-5"
                style={{ borderColor: "#c9a84c" }}
              >
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                  {uc.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bulk benefits */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Bulk Order Benefits &amp; Volume Pricing
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#374151]">
            {[
              "Volume discounts from 100 pieces (up to 30% off)",
              "Free design consultation and artwork proofing",
              "Dedicated account manager for orders above 200 pieces",
              "Custom packaging options (branded boxes, mailers)",
              "GST invoice with MSME credit for corporate buyers",
              "Standing order arrangements for monthly onboarding batches",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#c9a84c" }} className="font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Internal links */}
        <section className="bg-[#f8f9fa] rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Corporate Gifting Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Gifts", to: "/corporate-gifts" },
              { label: "Welcome Gifts for Employees", to: "/welcome-gifts" },
              { label: "Customized Mugs for Offices", to: "/customized-mugs" },
              { label: "Welcome Goodies & Kits", to: "/welcome-goodies" },
              { label: "Trophies & Awards", to: "/trophies" },
            ].map((link) => (
              <Link key={link.to} to={link.to}>
                <span className="inline-block bg-white border border-[#c9a84c] text-[#1a2744] font-medium px-4 py-2 rounded-full text-sm hover:bg-[#c9a84c] transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <LandingCTA />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
