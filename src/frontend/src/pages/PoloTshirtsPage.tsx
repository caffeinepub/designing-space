import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function PoloTshirtsPage() {
  return (
    <ProductPageTemplate
      title="Polo T-Shirts Bulk Order — Corporate & Event Ready"
      metaTitle="Polo T-Shirts Bulk Order for Companies — OfNeeds India"
      breadcrumb="Polo T-Shirts"
      heroSubtitle="Premium polo t-shirts with embroidered logos. MOQ 25 pieces, competitive bulk pricing across India."
      description="OfNeeds offers premium polo t-shirts for bulk corporate orders — ideal for teams, events, and brand identity programs. Our polo t-shirts feature high-GSM fabric, structured collar, and logo placement via embroidery or screen printing. Available in a full range of colors and sizes, they're the preferred choice of HR teams and procurement heads across India. Low MOQ, fast turnaround, and competitive pricing make OfNeeds the go-to corporate polo t-shirt supplier. Place your bulk order today and get a free sample before you commit. Our polo t-shirts are used for employee uniforms, team outings, annual events, brand activations, and client gifts — all with your company logo prominently displayed."
      features={[
        {
          title: "High-GSM Premium Fabric",
          desc: "180–220 GSM fabric options for a premium, structured feel that holds shape through daily use.",
        },
        {
          title: "Embroidery or Print",
          desc: "Classic embroidered logos for a polished look, or vibrant screen printing for bold designs.",
        },
        {
          title: "MOQ 25 Pieces",
          desc: "Low minimum order. Order small for trials, scale up for bulk with tiered discounts.",
        },
        {
          title: "Free Sample Available",
          desc: "Get a pre-production sample before committing to your full bulk order.",
        },
        {
          title: "Color Customization",
          desc: "150+ color options including Pantone matching for exact brand color accuracy.",
        },
        {
          title: "Fast Delivery",
          desc: "Standard orders in 5–7 days. Bulk orders above 500 pieces in 10–12 days.",
        },
      ]}
      faqs={[
        {
          q: "What is the minimum order for corporate polo t-shirts?",
          a: "MOQ is 25 pieces. We offer bulk discounts for orders above 100, 250, and 500 pieces.",
        },
        {
          q: "What fabric weight do your polo t-shirts use?",
          a: "We offer 180, 200, and 220 GSM fabric options. 200 GSM is our most popular choice for corporate uniforms.",
        },
        {
          q: "Can I get my company logo embroidered on polo t-shirts?",
          a: "Yes. Embroidery is our recommended method for polo t-shirts as it gives a premium, long-lasting finish compared to printing.",
        },
        {
          q: "Do you offer polo t-shirts for women in corporate orders?",
          a: "Yes. We offer both men's and women's polo t-shirt cuts with the same customization options and fabric quality.",
        },
        {
          q: "What is the turnaround time for a bulk polo t-shirt order?",
          a: "Standard production takes 5–7 business days for up to 200 pieces. Larger orders may require 10–14 days.",
        },
      ]}
      relatedLinks={[
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Jackets", href: "/jackets" },
        { label: "Welcome Gifts", href: "/welcome-gifts" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
      ]}
    />
  );
}
