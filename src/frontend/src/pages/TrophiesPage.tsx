import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function TrophiesPage() {
  return (
    <ProductPageTemplate
      title="Trophies and Awards — Celebrate Achievement in Style"
      metaTitle="Corporate Trophies & Custom Awards — OfNeeds India"
      breadcrumb="Trophies"
      heroSubtitle="Crystal trophies, metal awards, custom engraving — for companies, sports events, and recognition programs."
      description="Celebrate achievement with OfNeeds' premium trophies and awards — crafted for companies, schools, sporting events, and corporate recognition programs. Our range includes crystal trophies, metal awards, acrylic plaques, wooden shields, and custom engraved mementos. All can be personalized with your company name, logo, event name, and recipient details. Bulk orders are welcome with fast turnaround and pan-India delivery. Whether you're recognizing employee performance, event winners, or long-service milestones, OfNeeds delivers trophies that make the moment truly unforgettable. Our trophies are widely used for annual award nights, employee of the month programs, sports day events, and sales recognition across Bengaluru and all major Indian cities."
      features={[
        {
          title: "Custom Engraving",
          desc: "Name, designation, achievement, and date — engraved with precision on every trophy.",
        },
        {
          title: "Wide Range of Styles",
          desc: "Crystal, metal, acrylic, wooden, and hybrid trophies in all shapes and sizes.",
        },
        {
          title: "Bulk Order Discounts",
          desc: "Attractive pricing for orders above 25, 50, and 100 pieces.",
        },
        {
          title: "Premium Packaging",
          desc: "Each trophy is packed in a luxury box with velvet lining for a premium gifting experience.",
        },
        {
          title: "Fast Turnaround",
          desc: "Standard orders fulfilled in 5–7 business days. Rush orders available.",
        },
        {
          title: "Pan-India Delivery",
          desc: "Safe, insured delivery to all major cities and tier-2 locations across India.",
        },
      ]}
      faqs={[
        {
          q: "What types of trophies does OfNeeds offer?",
          a: "We offer crystal trophies, metal awards, acrylic plaques, wooden shields, glass mementos, and fully custom fabricated trophies.",
        },
        {
          q: "Can I get custom text and logo engraved on trophies?",
          a: "Yes. We engrave company names, logos, recipient names, achievement titles, event names, and dates on all trophy types.",
        },
        {
          q: "What is the minimum order quantity for trophies?",
          a: "Minimum order is 5 pieces. Bulk discounts apply for orders above 25, 50, and 100 units.",
        },
        {
          q: "How long does it take to produce custom trophies?",
          a: "Standard production time is 5–7 business days. Rush orders (2–3 days) are available for urgent requirements.",
        },
        {
          q: "Do you deliver trophies outside Bangalore?",
          a: "Yes. We provide pan-India delivery with insured packaging to ensure trophies arrive in perfect condition.",
        },
      ]}
      relatedLinks={[
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Welcome Gifts", href: "/welcome-gifts" },
        { label: "Custom Mugs", href: "/customized-mugs" },
        { label: "Lanyards", href: "/lanyards" },
      ]}
    />
  );
}
