import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function WelcomeGiftsPage() {
  return (
    <ProductPageTemplate
      title="Welcome Gifts for New Employees"
      metaTitle="Employee Welcome Kits & Onboarding Gifts — OfNeeds India"
      breadcrumb="Welcome Gifts"
      heroSubtitle="Make Day One unforgettable. Premium welcome kits starting at ₹599/person — delivered across India."
      description="First impressions matter. OfNeeds' welcome gifts for new employees are thoughtfully curated to make Day One memorable and meaningful. Our starter packs include customized apparel, notebooks, pens, sipper bottles, mugs, and more — all carrying your company logo and packed in premium gift boxes. Available at ₹599 (Essential) and ₹1199 (Premium), our welcome kits are trusted by startups and enterprises alike. Fast dispatch, flexible customization, and bulk discounts make OfNeeds the preferred welcome gift supplier for HR teams across India. Our kits help new hires feel valued from their very first day, strengthening employee engagement, brand loyalty, and company culture from the ground up."
      features={[
        {
          title: "Starting at ₹599/person",
          desc: "Cost-effective welcome kits without compromising on quality or presentation.",
        },
        {
          title: "Fully Customizable",
          desc: "Add your logo, brand colors, and a personalized welcome message to every kit.",
        },
        {
          title: "Ready-to-Ship",
          desc: "Stock available for immediate dispatch. No long wait times for urgent onboarding.",
        },
        {
          title: "Premium Packaging",
          desc: "Custom gift boxes with tissue, thank-you cards, and branded packaging available.",
        },
        {
          title: "MOQ from 10 Kits",
          desc: "Perfect for small teams and large enterprises. Scale up easily as you grow.",
        },
        {
          title: "7-Day Delivery",
          desc: "Guaranteed delivery within 7 business days for orders placed before 12 PM.",
        },
      ]}
      faqs={[
        {
          q: "What is included in the Essential Welcome Kit at ₹599?",
          a: "The Essential Kit includes a custom polo t-shirt, premium notebook, metal pen, sipper bottle, and an OfNeeds tote bag — all with your company logo.",
        },
        {
          q: "What is included in the Premium Welcome Kit at ₹1199?",
          a: "The Premium Kit includes a custom polo shirt, premium notebook, metal pen, sipper bottle, custom cap, coffee mug, and a tote bag.",
        },
        {
          q: "Can I mix Essential and Premium kits in one order?",
          a: "Yes. You can place a single order with a mix of both kit types. Our team will coordinate to ensure consistent packaging and branding.",
        },
        {
          q: "Do you offer fully custom welcome kits beyond the two standard options?",
          a: "Absolutely. We can build fully custom kits with any combination of products. Contact us with your requirements and budget for a custom quote.",
        },
        {
          q: "What is the minimum order quantity for welcome kits?",
          a: "Minimum order is 10 kits. For orders above 100 kits, we offer attractive bulk discounts and free branded packaging.",
        },
      ]}
      relatedLinks={[
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Customized T-Shirts", href: "/customized-tshirts" },
        { label: "Sipper Bottles", href: "/sipper-bottles" },
        { label: "Custom Mugs", href: "/customized-mugs" },
        { label: "Welcome Goodies", href: "/welcome-goodies" },
      ]}
    />
  );
}
