import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function StandeesPage() {
  return (
    <ProductPageTemplate
      title="Standees Printing for Events, Offices & Exhibitions"
      metaTitle="Standees Printing Services India — Corporate Events | OfNeeds"
      breadcrumb="Standees"
      heroSubtitle="Roll-up standees, X-banners, custom size — HD printing, 48–72 hour delivery across India."
      description="Make your brand impossible to ignore with OfNeeds' high-quality standees printing services. We offer roll-up standees, X-banners, L-banners, and custom-size standees ideal for corporate events, exhibitions, office lobbies, product launches, and sales presentations. Full-color HD printing, premium base hardware, and fast delivery across India — all at competitive prices. Whether you need 1 piece or 500, OfNeeds delivers with precision and speed. Upload your design or let our team create one for you. Get your standees printed and delivered within 48–72 hours across major Indian cities. Our standees use premium 440-GSM vinyl for sharp, vibrant printing that stands out in any environment — indoors or outdoors."
      features={[
        {
          title: "48–72 Hour Delivery",
          desc: "Express standee printing and delivery to major Indian cities within 48–72 hours.",
        },
        {
          title: "HD Full-Color Printing",
          desc: "1440 DPI print resolution with vibrant, fade-resistant ink for crisp, sharp output.",
        },
        {
          title: "Multiple Standee Types",
          desc: "Roll-up, X-banner, L-banner, snap frame, and custom-size standees available.",
        },
        {
          title: "Premium Hardware",
          desc: "Sturdy aluminum base and carry bag included with all roll-up standees.",
        },
        {
          title: "No MOQ",
          desc: "Order even 1 standee. Bulk discounts apply for 5, 10, and 25+ pieces.",
        },
        {
          title: "Design Service Available",
          desc: "Our in-house design team creates print-ready artwork from your brand guidelines.",
        },
      ]}
      faqs={[
        {
          q: "What standee sizes does OfNeeds offer?",
          a: "We offer standard sizes (85×200cm, 100×200cm) and custom sizes for roll-up standees, X-banners, and L-banners. Custom cut sizes are also available.",
        },
        {
          q: "How quickly can I get standees printed?",
          a: "Standard turnaround is 24–48 hours for single-side prints. Double-side and custom sizes may take 48–72 hours depending on artwork readiness.",
        },
        {
          q: "Can OfNeeds design the standee artwork for me?",
          a: "Yes. Our in-house design team can create professional standee designs from your logo, product photos, and brand guidelines. Design service has additional charges.",
        },
        {
          q: "What file format do I need to submit for standee printing?",
          a: "We accept PDF, AI, EPS, and high-resolution JPG/PNG files. Files should be at least 150 DPI at print size for best results.",
        },
        {
          q: "Do you deliver standees outside Bangalore?",
          a: "Yes. We deliver standees pan-India. Standard delivery takes 2–4 business days to major cities. Same-day delivery available in Bangalore for urgent orders.",
        },
      ]}
      relatedLinks={[
        { label: "ID Cards", href: "/id-cards" },
        { label: "Lanyards", href: "/lanyards" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Welcome Goodies", href: "/welcome-goodies" },
      ]}
    />
  );
}
