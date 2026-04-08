import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function CustomizedMugsPage() {
  return (
    <ProductPageTemplate
      title="Customized Mugs for Offices — Every Sip Builds Brand Recall"
      metaTitle="Customized Mugs for Corporate Offices — Bulk Orders | OfNeeds India"
      breadcrumb="Customized Mugs"
      heroSubtitle="Ceramic, steel, travel, and magic mugs with company logo. MOQ 24 pieces, fast pan-India delivery."
      description="Reinforce your brand with every coffee break. OfNeeds' customized mugs for offices are available in ceramic, stainless steel, travel, and magic variants — all printed with your company logo or custom message. Perfect for employee desks, client gifting, and corporate giveaways. Our mugs are dishwasher-safe, food-grade certified, and built to last. With a minimum order of just 24 pieces and competitive bulk pricing, OfNeeds is the trusted office mug supplier for companies across Bengaluru and India. Custom mugs have the highest daily brand visibility of any corporate gift — every morning coffee break becomes a brand impression. We offer full-wrap printing, one-color logo prints, and personalized name printing for individual employee mugs."
      features={[
        {
          title: "MOQ 24 Pieces",
          desc: "Start with as few as 24 mugs — perfect for small teams, events, and trial orders.",
        },
        {
          title: "Multiple Mug Types",
          desc: "Ceramic, stainless steel, travel mugs, magic color-change mugs, and glass options.",
        },
        {
          title: "Full-Wrap Printing",
          desc: "360° custom printing available for maximum brand visibility on every mug.",
        },
        {
          title: "Dishwasher Safe",
          desc: "All ceramic and steel mugs are dishwasher-safe with durable sublimation printing.",
        },
        {
          title: "Name Personalization",
          desc: "Individual name printing on mugs available for employee gifting and onboarding kits.",
        },
        {
          title: "Custom Gift Box",
          desc: "Individual mug packaging in custom branded boxes available for premium gifting.",
        },
      ]}
      faqs={[
        {
          q: "What types of mugs does OfNeeds offer for corporate orders?",
          a: "We offer ceramic mugs, stainless steel mugs, travel mugs, magic (color-change) mugs, glass mugs, and bone china mugs — all printable with logos.",
        },
        {
          q: "What is the minimum order for customized office mugs?",
          a: "MOQ is 24 pieces. Bulk discounts are available for orders above 50, 100, and 250 mugs.",
        },
        {
          q: "Can I get individual employee names printed on mugs?",
          a: "Yes. We offer personalized mug printing with individual names. This option requires a slightly longer production time and has a minimum of 24 pieces.",
        },
        {
          q: "Are the mugs microwave and dishwasher safe?",
          a: "Yes. Our ceramic sublimation mugs are microwave and dishwasher safe. Steel and travel mugs are dishwasher safe but not microwave compatible.",
        },
        {
          q: "Can customized mugs be included in welcome kits?",
          a: "Yes. Mugs are a popular inclusion in employee welcome kits. They can be paired with sipper bottles, notebooks, and other branded items.",
        },
      ]}
      relatedLinks={[
        { label: "Sipper Bottles", href: "/sipper-bottles" },
        { label: "Welcome Gifts", href: "/welcome-gifts" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Trophies", href: "/trophies" },
      ]}
    />
  );
}
