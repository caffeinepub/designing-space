import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function CorporateGiftsPage() {
  return (
    <ProductPageTemplate
      title="Corporate Gifting Solutions for Every Budget"
      metaTitle="Corporate Gifts India — Premium Bulk Gifting by OfNeeds"
      breadcrumb="Corporate Gifts"
      heroSubtitle="Onboarding kits, festive gifts & event giveaways — all curated and delivered pan-India."
      description="At OfNeeds, we make corporate gifting effortless and impactful. Whether you need bulk gifts for employee onboarding, festive seasons, or corporate events, our curated collection delivers premium quality at competitive prices. From customized merchandise to ready-to-ship starter packs, every product can carry your company logo. We serve HR teams, procurement managers, and event organizers across India with fast turnaround and pan-India delivery. Our end-to-end gifting solutions help you build brand recall and employee engagement with every gift. With over 500 happy clients and 50,000+ products delivered, OfNeeds is the corporate gifting partner trusted by leading companies in Bengaluru and across India. We handle bulk orders from 25 pieces to 10,000+ with consistent quality, competitive pricing, and guaranteed on-time delivery."
      features={[
        {
          title: "MOQ from 25 Pieces",
          desc: "Flexible minimum order quantities to suit startups and enterprises alike.",
        },
        {
          title: "Pan-India Delivery",
          desc: "Fast, reliable shipping to all 28 states within 7–10 business days.",
        },
        {
          title: "Logo Customization",
          desc: "Screen printing, embroidery, laser engraving — your brand, your way.",
        },
        {
          title: "Quality Assurance",
          desc: "Every product undergoes quality checks before dispatch. No compromises.",
        },
        {
          title: "Dedicated Account Manager",
          desc: "A single point of contact from order to delivery for bulk clients.",
        },
        {
          title: "Bulk Discounts",
          desc: "Attractive pricing tiers for orders above 100, 500, and 1000 units.",
        },
      ]}
      faqs={[
        {
          q: "What types of corporate gifts does OfNeeds offer?",
          a: "We offer welcome kits, customized apparel, trophies, lanyards, sipper bottles, mugs, standees, ID cards, and more — all customizable with your brand.",
        },
        {
          q: "What is the minimum order quantity for corporate gifts?",
          a: "Our MOQ varies by product — typically 25 pieces for apparel, 24–50 pieces for mugs and bottles, and 50 pieces for lanyards and ID cards.",
        },
        {
          q: "How long does delivery take for bulk corporate orders?",
          a: "Standard production and delivery is 7–10 business days. Rush orders may be available depending on product type and quantity.",
        },
        {
          q: "Do you offer samples before bulk production?",
          a: "Yes. We can send a pre-production sample for approval before we proceed with the full bulk order.",
        },
        {
          q: "Can I customize packaging for corporate gift sets?",
          a: "Absolutely. We offer custom gift boxes, tissue paper, thank-you cards, and fully branded packaging for premium gifting experiences.",
        },
      ]}
      relatedLinks={[
        { label: "Welcome Gifts", href: "/welcome-gifts" },
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Trophies", href: "/trophies" },
        { label: "Custom Mugs", href: "/customized-mugs" },
        { label: "Welcome Goodies", href: "/welcome-goodies" },
      ]}
    />
  );
}
