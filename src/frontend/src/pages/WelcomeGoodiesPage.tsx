import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function WelcomeGoodiesPage() {
  return (
    <ProductPageTemplate
      title="Welcome Goodies & Employee Onboarding Kits"
      metaTitle="Welcome Goodies for New Employees — Onboarding Kits India | OfNeeds"
      breadcrumb="Welcome Goodies"
      heroSubtitle="Curated goodies bags for new hires — branded merchandise, stationery & accessories to make Day One special."
      description="OfNeeds' welcome goodies are thoughtfully curated collections of branded merchandise designed to delight new employees on their first day. Our onboarding kits combine practicality with brand storytelling — from custom notebooks and pens to sipper bottles, mugs, t-shirts, and tech accessories. Each item in the goodies bag can carry your company logo, making every object a reminder of your culture and values. We serve HR managers, operations teams, and procurement heads at startups, SMEs, and large enterprises across India. Our welcome goodies range from affordable starter bundles to premium onboarding experiences, with options to fully customize the contents, packaging, and personalization for each new hire."
      features={[
        {
          title: "Curated Item Selection",
          desc: "We help you select the right combination of products for maximum impact and utility.",
        },
        {
          title: "Fully Customizable",
          desc: "Logo, colors, messaging — every item can be personalized for your brand.",
        },
        {
          title: "Premium Packaging",
          desc: "Branded boxes, tissue paper, welcome cards, and ribbons available for all kit tiers.",
        },
        {
          title: "Budget-Friendly Options",
          desc: "Starter goodies from ₹299/person. Premium options up to ₹2,500/person.",
        },
        {
          title: "Bulk & Recurring Orders",
          desc: "Set up a recurring order for monthly onboarding batches at preferred pricing.",
        },
        {
          title: "Fast Dispatch",
          desc: "Ready-to-ship stock available for urgent onboarding. Custom orders in 5–7 days.",
        },
      ]}
      faqs={[
        {
          q: "What items are typically included in welcome goodies?",
          a: "Common items include notebooks, pens, sipper bottles, mugs, t-shirts, caps, tote bags, tech accessories, and custom keychains — selected based on your budget and brand.",
        },
        {
          q: "Can I choose specific items for my welcome goodies bag?",
          a: "Yes. We offer fully custom kit building — choose any combination of items and we'll price it accordingly and produce samples for approval.",
        },
        {
          q: "What is the minimum order for welcome goodies?",
          a: "Minimum order is 10 sets. For recurring monthly onboarding orders, we offer preferential pricing with a volume commitment.",
        },
        {
          q: "Do you include branded packaging in the goodies kits?",
          a: "Yes. We can include custom boxes, tissue paper, branded stickers, welcome cards, and ribbons at additional cost depending on quantity and specification.",
        },
        {
          q: "Do you offer eco-friendly welcome goodies options?",
          a: "Yes. We have a dedicated range of eco-friendly goodies including jute bags, recycled notebooks, bamboo pens, and stainless steel bottles.",
        },
      ]}
      relatedLinks={[
        { label: "Welcome Gifts", href: "/welcome-gifts" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Sipper Bottles", href: "/sipper-bottles" },
        { label: "Custom Mugs", href: "/customized-mugs" },
      ]}
    />
  );
}
