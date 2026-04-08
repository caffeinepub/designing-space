import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is the minimum order quantity for polo t-shirts?",
    answer:
      "At OfNeeds, the minimum order quantity for polo t-shirts is 25 pieces per style and color. This applies to both embroidered and printed options. We accommodate both small startups and large enterprises across India. For mixed-color orders, each color variant must meet the 25-piece MOQ. Contact us for special requirements on smaller or larger batches.",
  },
  {
    question: "Can I get a sample polo t-shirt before placing a bulk order?",
    answer:
      "Yes. We offer pre-production samples with your logo and customization before the bulk order goes into production. Sample charges apply and are typically credited against your bulk order invoice. Samples are dispatched within 3–5 business days from Bangalore. We strongly recommend approving a physical sample before bulk production, especially for first-time orders.",
  },
  {
    question: "How long does a bulk polo t-shirt order take?",
    answer:
      "Standard bulk polo t-shirt orders take 10–15 business days after artwork and sample approval. Rush orders (within Bangalore and major cities) can be expedited to 7 business days for an additional fee. Production timelines depend on order size, customization complexity, and fabric availability. Pan-India delivery adds 2–3 business days post-production.",
  },
  {
    question:
      "What is the difference between embroidery and screen printing for polo t-shirts?",
    answer:
      "Embroidery involves stitching the logo directly onto the fabric using thread — it looks premium, is highly durable, and does not fade with washing. It works best for logos with limited colors and is ideal for left-chest placements. Screen printing uses ink pressed through a mesh screen and is better for full-color, large-format designs. For polo t-shirts, embroidery is the most popular choice for a professional, corporate look.",
  },
  {
    question: "Can polo t-shirts be ordered in custom brand colors?",
    answer:
      "Yes. We offer Pantone color matching for polo t-shirt fabric, so your shirts can closely match your exact brand colors. Our polo t-shirts are available in 30+ standard colors with no additional charge. Custom Pantone-matched fabric is available for orders above 100 pieces and requires a 7–10 day lead time for fabric sourcing. Contact our design team for a color swatch.",
  },
  {
    question: "What fabric options are available for corporate polo t-shirts?",
    answer:
      "OfNeeds offers multiple fabric options: Premium Pique (180 GSM, cotton-polyester blend, ideal for formal corporate use), Performance Dry-Fit (150 GSM, moisture-wicking polyester, great for outdoor or active teams), Classic Cotton (200 GSM, 100% combed cotton, soft and breathable), and Micro-Mesh (lightweight 140 GSM, ultra-breathable for hot climates). All fabrics are pre-shrunk and colorfastness-tested to international standards.",
  },
];

const poloRange = [
  {
    name: "Premium Pique Polo",
    gsm: "180 GSM",
    fabric: "Cotton-Polyester blend",
    desc: "The classic corporate choice. Structured collar, fine pique texture, and a polished drape make it ideal for formal office environments, client-facing teams, and professional uniforms. Available in 30+ colours.",
  },
  {
    name: "Performance Dry-Fit Polo",
    gsm: "150 GSM",
    fabric: "100% Polyester Dry-Fit",
    desc: "Engineered for active teams. Moisture-wicking technology keeps the wearer cool and dry during field work, events, or outdoor activities. Preferred by tech companies with sales and field teams.",
  },
  {
    name: "Classic Cotton Polo",
    gsm: "200 GSM",
    fabric: "100% Combed Cotton",
    desc: "Soft, breathable, and durable. The highest-comfort option in our range. Ideal for day-long office wear, onboarding welcome kits, and brands that prioritize a natural, premium feel.",
  },
  {
    name: "Micro-Mesh Polo",
    gsm: "140 GSM",
    fabric: "Lightweight Polyester Mesh",
    desc: "Ultra-lightweight and breathable. Perfect for companies in warm climates or for events and outdoor brand activations across Karnataka, Tamil Nadu, and Telangana.",
  },
];

const customizationOptions = [
  {
    method: "Embroidery",
    best: "Logo on left chest, sleeve",
    desc: "Thread is stitched directly into the fabric creating a raised, premium finish. Extremely durable — does not peel or fade. Best for logos with 1–6 colours. Standard for corporate polo shirts.",
  },
  {
    method: "Screen Printing",
    best: "Large back prints, chest designs",
    desc: "Ink is pressed through a fine mesh screen onto the fabric. Cost-effective for large-volume, multi-colour designs. Best for event t-shirts or team uniforms with bold graphics.",
  },
  {
    method: "DTF (Direct-to-Film)",
    best: "Full-colour photographic prints",
    desc: "A film transfer technique that delivers vibrant, full-colour prints with photographic detail. No colour restrictions, no MOQ per colour. Ideal for complex logos or gradient artwork.",
  },
  {
    method: "Sublimation",
    best: "All-over prints, performance wear",
    desc: "Dye is infused directly into the fabric fibres under heat and pressure. Delivers all-over prints with no hand feel. Works only on polyester fabrics. Perfect for sports teams and performance polo shirts.",
  },
];

const steps = [
  {
    n: "01",
    title: "Share Requirements",
    desc: "Fill our bulk enquiry form with quantity, style, colour, and logo details. Our team responds within 2 hours during business hours.",
  },
  {
    n: "02",
    title: "Get a Custom Quote",
    desc: "Receive a detailed quote with per-unit pricing, volume discounts, and customization charges within 24 hours.",
  },
  {
    n: "03",
    title: "Approve Artwork & Sample",
    desc: "Review digital proofs and, if required, a physical pre-production sample with your logo placement.",
  },
  {
    n: "04",
    title: "Production",
    desc: "Your order enters our production facility in Bangalore. Standard lead time: 10–15 business days after approval.",
  },
  {
    n: "05",
    title: "Pan-India Delivery",
    desc: "Packed and dispatched with a tracking number. Delivered across India including Bangalore, Mumbai, Delhi, Hyderabad, and Chennai.",
  },
];

export default function PoloTshirtsPage() {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Bulk Polo T-Shirts for Companies",
      description:
        "Premium polo t-shirts in bulk for corporate teams. Custom logo printing and embroidery available. MOQ 25 pieces. Supplied by OfNeeds, Bangalore, India.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "299",
        highPrice: "800",
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
          name: "Apparel",
          item: "https://ofneeds.com/customized-tshirts",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Polo T-Shirts",
          item: "https://ofneeds.com/polo-tshirts",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "polo-product-schema";
    s1.textContent = JSON.stringify(productSchema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "polo-breadcrumb-schema";
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
        title="Polo T-Shirts Bulk Order for Companies | OfNeeds India"
        description="Order polo t-shirts in bulk for your company from OfNeeds. Custom logo printing & embroidery, MOQ 25 pieces, fast delivery across India. Get a free quote!"
        keywords="polo t-shirts bulk order, corporate polo shirts India, customized polo shirts companies, bulk polo shirts Bangalore, company polo t-shirts, polo shirts with logo India"
        canonicalPath="/polo-tshirts"
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
            <Link to="/customized-tshirts" className="hover:text-white">
              Apparel
            </Link>
            <span className="mx-1">›</span>
            <span style={{ color: "#c9a84c" }}>Polo T-Shirts</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Polo T-Shirts Bulk Order — Premium Corporate Apparel
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            High-quality polo t-shirts customized with your company logo. MOQ
            just 25 pieces, embroidery or screen printing, delivered across
            India from Bangalore.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg transition-opacity hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
                data-ocid="polo-hero-cta"
              >
                Get a Free Quote
              </button>
            </a>
            <Link to="/customized-tshirts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors font-semibold"
              >
                All T-Shirts
              </button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Why polo */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Polo T-Shirts are the Corporate Identity Standard
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            Among all corporate apparel choices, the polo t-shirt strikes the
            perfect balance between professionalism and comfort. Unlike formal
            shirts, polos are breathable and mobile-friendly — making them the
            go-to choice for IT companies, manufacturing teams, field sales
            executives, and startup employees across India. With your company
            logo embroidered or printed on the left chest, every polo becomes a
            wearable brand asset.
          </p>
          <p className="text-[#374151] leading-relaxed mb-4">
            OfNeeds supplies bulk polo t-shirts to 200+ companies across
            Bangalore, Karnataka, and pan-India. Our clients range from
            fast-growing startups ordering 25–50 pieces for new joiners to
            enterprise firms placing standing orders for 500–5000 pieces per
            quarter for their entire workforce. With flexible MOQs, Pantone
            colour matching, and multiple customization techniques, we ensure
            every piece looks consistent, premium, and on-brand.
          </p>
          <p className="text-[#374151] leading-relaxed">
            Whether you need polo shirts for employee uniforms, corporate
            events, team outings, client meets, or welcome kits — OfNeeds has
            the right fabric, the right print, and the right price to make your
            brand stand out in style.
          </p>
        </section>

        {/* Range */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Polo T-Shirt Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {poloRange.map((polo) => (
              <div
                key={polo.name}
                className="border border-[#e5e7eb] rounded-xl p-6 hover:border-[#c9a84c] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-[#1a2744] mb-1">
                  {polo.name}
                </h3>
                <div className="flex gap-4 text-sm text-[#c9a84c] font-semibold mb-3">
                  <span>{polo.gsm}</span>
                  <span>·</span>
                  <span>{polo.fabric}</span>
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {polo.desc}
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
            Customization Options for Corporate Polo Shirts
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            Every polo t-shirt from OfNeeds can be customized with your company
            logo and branding using four industry-standard techniques. Our
            in-house design team in Bangalore assists with artwork preparation,
            logo vectorization, and placement optimization at no extra charge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customizationOptions.map((opt) => (
              <div key={opt.method} className="bg-[#f8f9fa] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1a2744] mb-1">
                  {opt.method}
                </h3>
                <p className="text-sm text-[#c9a84c] font-semibold mb-2">
                  Best for: {opt.best}
                </p>
                <p className="text-[#374151] text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Quality Assurance &amp; Fabric Specifications
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            At OfNeeds, every bulk polo t-shirt order goes through a rigorous
            multi-step quality control process before dispatch from our
            Bangalore warehouse. We test for:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#374151] mb-4">
            {[
              "Colorfastness (ISO 105-C06) — zero bleeding after 30 washes",
              "Shrinkage control — pre-shrunk fabric, <3% dimensional change",
              "Thread count and GSM verification per batch",
              "Seam strength and stitch density checks",
              "Logo placement accuracy (±2mm tolerance)",
              "Collar roll and button alignment inspection",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#c9a84c" }} className="font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#374151] leading-relaxed">
            All fabrics are sourced from OEKO-TEX certified mills, ensuring they
            are free from harmful chemicals and safe for daily wear. We provide
            a quality certificate with every bulk order above 100 pieces.
          </p>
        </section>

        {/* Ordering process */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            How to Order Bulk Polo T-Shirts from OfNeeds
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex-1 bg-[#f8f9fa] rounded-xl p-6 text-center"
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    color: "#c9a84c",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="text-base font-bold text-[#1a2744] mb-2">
                  {s.title}
                </h3>
                <p className="text-[#374151] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service areas */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Pan-India Corporate Polo T-Shirt Delivery
          </h2>
          <p className="text-[#374151] leading-relaxed mb-4">
            Based in Kalyana Nagar, Bangalore, OfNeeds delivers bulk polo
            t-shirt orders across India. We have fulfilled orders for companies
            in Whitefield, Electronic City, Koramangala, Marathahalli, and all
            major Bangalore business hubs with same-city dispatch in 2–3 days.
            For Karnataka clients, orders to Mysore, Hubli, Mangalore, and
            Belgaum arrive within 3–4 business days.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Bangalore",
              "Mumbai",
              "Delhi NCR",
              "Hyderabad",
              "Chennai",
              "Pune",
              "Kolkata",
              "Pan-India",
            ].map((city) => (
              <div
                key={city}
                className="border border-[#c9a84c] rounded-lg px-4 py-3 text-center text-sm font-semibold text-[#1a2744]"
              >
                {city}
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-[#f8f9fa] rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Explore Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Corporate Jackets", to: "/jackets" },
              { label: "Corporate Gifts", to: "/corporate-gifts" },
              { label: "Welcome Gifts for Employees", to: "/welcome-gifts" },
              { label: "Custom Lanyards", to: "/lanyards" },
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
