import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function JacketsPage() {
  return (
    <ProductPageTemplate
      title="Jackets with Company Logo — Represent Your Brand in Style"
      metaTitle="Corporate Jackets with Logo — Bulk Orders India | OfNeeds"
      breadcrumb="Jackets"
      heroSubtitle="Fleece, bomber, windbreaker jackets with embroidered or printed company logos. MOQ 25 pieces."
      description="Brand your workforce with OfNeeds' customized jackets with company logo — designed for style, comfort, and brand impact. From lightweight windbreakers to premium fleece jackets and hoodies, we offer a wide range to match your company culture and climate. Each jacket features embroidered or printed logos for a polished, professional look. Popular among IT companies, startups, manufacturing teams, and event organizers across India. Minimum orders start at 25 pieces with fast dispatch. Our jackets are crafted from high-quality fabrics with reinforced stitching for long-term durability. Available in a full spectrum of corporate colors with custom lining, zip pullers, and inner label branding options."
      features={[
        {
          title: "Premium Quality Fabrics",
          desc: "Fleece, polyester, nylon, and cotton-blend options. Built for all-day comfort and longevity.",
        },
        {
          title: "Embroidery & Printing",
          desc: "High-definition embroidery for logos on chest, back, and sleeve positions.",
        },
        {
          title: "Custom Color Options",
          desc: "Full Pantone color matching available for brand-accurate jacket production.",
        },
        {
          title: "MOQ from 25 Pieces",
          desc: "Low MOQ with attractive bulk pricing tiers for larger orders.",
        },
        {
          title: "Complete Size Range",
          desc: "S to 5XL with accurate fit charts and optional pre-production samples.",
        },
        {
          title: "Fast Turnaround",
          desc: "Standard jackets delivered in 7–10 business days after artwork sign-off.",
        },
      ]}
      faqs={[
        {
          q: "What types of corporate jackets does OfNeeds offer?",
          a: "We offer fleece jackets, bomber jackets, windbreakers, softshell jackets, hoodies, and track jackets — all customizable with company logos.",
        },
        {
          q: "What is the minimum order for jackets with company logo?",
          a: "MOQ is 25 pieces. Bulk discounts apply for orders above 50, 100, and 250 pieces.",
        },
        {
          q: "Can logos be placed on specific positions on the jacket?",
          a: "Yes. We support chest left/right, full back, sleeve, and inner collar label placements depending on jacket style and printing method.",
        },
        {
          q: "Are samples available before bulk production?",
          a: "Yes. We produce a pre-production sample for your approval before proceeding with the full order.",
        },
        {
          q: "Do you offer custom inner lining and zipper branding?",
          a: "Yes. Premium jacket customization includes custom inner lining prints, branded zip pullers, and custom woven labels on request.",
        },
      ]}
      relatedLinks={[
        { label: "Customized Jackets", href: "/customized-jackets" },
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Polo T-Shirts", href: "/polo-tshirts" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
      ]}
    />
  );
}
