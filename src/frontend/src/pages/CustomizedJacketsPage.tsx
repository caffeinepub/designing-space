import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function CustomizedJacketsPage() {
  return (
    <ProductPageTemplate
      title="Customized Jackets India — Corporate & Team Wear"
      metaTitle="Customized Jackets Bulk Order India — OfNeeds Corporate Wear"
      breadcrumb="Customized Jackets"
      heroSubtitle="Fully customized corporate jackets with your logo, colors, and branding. Bulk orders welcome."
      description="OfNeeds specializes in fully customized jackets for Indian corporates, startups, and enterprise teams. Whether you need 25 or 2,500 jackets, we deliver consistent quality with your exact brand specifications. Our customized jackets for India's corporate market cover fleece, softshell, bomber, windbreaker, and hoodie styles — each available with embroidered logos, custom color blocking, sublimation printing, and inner brand labels. We work with leading companies in Bengaluru, Mumbai, Delhi, Hyderabad, and Chennai to produce team wear that builds identity and morale. Our design team can help you create a cohesive apparel line that aligns with your brand guidelines, ensuring every team member looks sharp and professional."
      features={[
        {
          title: "Full Customization",
          desc: "Colors, cuts, logo placement, lining — every aspect tailored to your brand guidelines.",
        },
        {
          title: "Sublimation & Embroidery",
          desc: "Choose the best printing method for your design complexity and budget.",
        },
        {
          title: "Corporate Color Matching",
          desc: "Pantone color matching ensures exact brand color reproduction on every jacket.",
        },
        {
          title: "Bulk Pricing",
          desc: "Competitive tiered pricing for 25, 100, 250, and 1000+ jacket orders.",
        },
        {
          title: "Design Assistance",
          desc: "In-house design team available to create mockups and refine artwork at no extra cost.",
        },
        {
          title: "Quality Control",
          desc: "Every batch undergoes size, color, and print quality checks before shipping.",
        },
      ]}
      faqs={[
        {
          q: "What is the difference between a jacket and a customized jacket?",
          a: "A customized jacket includes specific brand elements — logos, colors, labels, and artwork — designed to represent your company identity. We offer end-to-end customization.",
        },
        {
          q: "Can OfNeeds match our exact brand colors for jacket production?",
          a: "Yes. We use Pantone color matching to ensure your brand colors are reproduced accurately across all jacket styles and fabric types.",
        },
        {
          q: "What is the minimum order for customized jackets?",
          a: "MOQ is 25 pieces. Larger orders receive progressive bulk discounts with free pre-production samples above 100 pieces.",
        },
        {
          q: "How long does customized jacket production take?",
          a: "Typical production time is 7–14 days after artwork and sample approval. Rush orders may be accommodated for select styles.",
        },
        {
          q: "Do you ship customized jackets across India?",
          a: "Yes. We offer pan-India shipping to all major cities and tier-2 locations. International shipping is available on request.",
        },
      ]}
      relatedLinks={[
        { label: "Jackets", href: "/jackets" },
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Polo T-Shirts", href: "/polo-tshirts" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
      ]}
    />
  );
}
