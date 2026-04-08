import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function CustomizedTshirtsPage() {
  return (
    <ProductPageTemplate
      title="Customized T-Shirts for Companies — Bulk Orders"
      metaTitle="Customized T-Shirts for Corporate Bulk Orders — OfNeeds India"
      breadcrumb="Customized T-Shirts"
      heroSubtitle="Round neck, polo, dry-fit — embroidered or printed logos. MOQ 25 pieces, pan-India delivery."
      description="Make your brand visible with OfNeeds' customized t-shirts for companies. Available in a wide range of styles — round neck, polo, dry-fit, and more — our t-shirts are crafted with premium fabric and finished with precision-printed or embroidered logos. Perfect for employee uniforms, team outings, corporate events, and brand giveaways. We offer flexible MOQs, fast production, and bulk discounts for companies of all sizes across India. Whether you need 50 or 5,000 pieces, OfNeeds delivers consistent quality on time. Our t-shirts are available in a full range of colors, sizes (XS to 5XL), and fabric weights to suit every season and occasion. We also support DTG (direct-to-garment) printing for complex, multi-color designs."
      features={[
        {
          title: "MOQ from 25 Pieces",
          desc: "Low minimum order for startups and small teams. Scale up anytime without repricing.",
        },
        {
          title: "Multiple Print Methods",
          desc: "Screen printing, embroidery, DTG, sublimation — choose based on design and budget.",
        },
        {
          title: "Premium Fabric Options",
          desc: "100% cotton, poly-cotton, dry-fit, and performance blends available.",
        },
        {
          title: "Full Size Range",
          desc: "XS to 5XL with accurate size charts and free sample sizing available.",
        },
        {
          title: "Fast Turnaround",
          desc: "Standard orders fulfilled in 5–7 business days after artwork approval.",
        },
        {
          title: "Free Design Support",
          desc: "Our in-house design team helps optimize your logo for garment printing at no extra cost.",
        },
      ]}
      faqs={[
        {
          q: "What t-shirt styles does OfNeeds offer for corporate orders?",
          a: "We offer round neck, polo, V-neck, dry-fit, henley, and full-sleeve t-shirts — all available for customization with company logos.",
        },
        {
          q: "What is the minimum order for customized t-shirts?",
          a: "Minimum order is 25 pieces. Bulk discounts are available for orders above 100, 250, and 500 pieces.",
        },
        {
          q: "What printing methods are available?",
          a: "We offer screen printing, embroidery, DTG, heat transfer, and sublimation printing. Each method suits different design complexities and fabric types.",
        },
        {
          q: "Can I order t-shirts in multiple colors and sizes in the same batch?",
          a: "Yes. You can split your order across multiple colors and sizes. We'll create a size-color breakdown sheet for your approval before production.",
        },
        {
          q: "How long does it take to receive customized t-shirts?",
          a: "Standard production time is 5–7 business days after artwork approval. Rush orders in 2–3 days are available for select quantities.",
        },
      ]}
      relatedLinks={[
        { label: "Polo T-Shirts", href: "/polo-tshirts" },
        { label: "Jackets", href: "/jackets" },
        { label: "Customized Jackets", href: "/customized-jackets" },
        { label: "Lanyards", href: "/lanyards" },
        { label: "Welcome Gifts", href: "/welcome-gifts" },
      ]}
    />
  );
}
