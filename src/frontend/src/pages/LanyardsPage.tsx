import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function LanyardsPage() {
  return (
    <ProductPageTemplate
      title="Lanyards with Logo — Custom Printed for Your Team"
      metaTitle="Custom Lanyards with Logo for Companies — OfNeeds India"
      breadcrumb="Lanyards"
      heroSubtitle="Sublimation, satin, tubular lanyards — MOQ 50 pieces, fast delivery across India."
      description="Brand your team with OfNeeds' custom lanyards with logo — available in sublimation, satin, tubular, and polyester materials. Choose from swivel hooks, safety breakaway clasps, badge reels, and more. Perfect for corporate ID cards, events, conferences, and institutional use. Low MOQ of 50 pieces with competitive bulk pricing across India. Our lanyards feature vibrant full-color printing and durable finish that holds up through daily use. HR teams, procurement managers, and event coordinators across Bengaluru and India trust OfNeeds for reliable, fast, and affordable custom lanyard printing. We also offer retractable badge holders and card holders to complete your ID card solution."
      features={[
        {
          title: "MOQ 50 Pieces",
          desc: "Low minimum order quantity suitable for teams, events, and offices of all sizes.",
        },
        {
          title: "Multiple Material Options",
          desc: "Sublimation, satin, tubular, polyester — choose the material that fits your brand.",
        },
        {
          title: "Full-Color Printing",
          desc: "Vibrant, high-resolution logo printing that maintains color accuracy through heavy use.",
        },
        {
          title: "Breakaway Safety Clasp",
          desc: "Optional safety clasp for employee safety in industrial and active environments.",
        },
        {
          title: "Fast Production",
          desc: "Standard lanyards ready in 3–5 business days. Rush orders available.",
        },
        {
          title: "Bulk Discounts",
          desc: "Significant savings on orders above 200, 500, and 1000 pieces.",
        },
      ]}
      faqs={[
        {
          q: "What materials are available for custom lanyards?",
          a: "We offer sublimation, satin, tubular, polyester, and nylon lanyards. Each has different printing characteristics and durability levels.",
        },
        {
          q: "What is the minimum order for lanyards with logo?",
          a: "Minimum order is 50 pieces. Bulk discounts are available for orders above 200, 500, and 1000 pieces.",
        },
        {
          q: "Can I get lanyards with retractable badge holders?",
          a: "Yes. We offer lanyards bundled with retractable badge holders, metal snap hooks, swivel clips, and PVC card holders.",
        },
        {
          q: "What hook types are available?",
          a: "We offer swivel hooks, lobster claws, badge clips, safety breakaway clasps, and retractable reel attachments.",
        },
        {
          q: "Do you supply lanyards for corporate events and conferences?",
          a: "Yes. We supply custom lanyards for corporate events, conferences, seminars, trade shows, and institutional ID programs across India.",
        },
      ]}
      relatedLinks={[
        { label: "ID Cards", href: "/id-cards" },
        { label: "Standees", href: "/standees" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Welcome Goodies", href: "/welcome-goodies" },
      ]}
    />
  );
}
