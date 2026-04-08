import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function IdCardsPage() {
  return (
    <ProductPageTemplate
      title="ID Cards Printing for Companies — Professional & Durable"
      metaTitle="Employee ID Cards Printing — Bulk PVC & Photo ID | OfNeeds India"
      breadcrumb="ID Cards"
      heroSubtitle="PVC, composite, and photo ID cards with barcodes, QR codes & custom designs. MOQ 50 pieces."
      description="OfNeeds provides professional ID cards printing for companies, schools, hospitals, and events. Our ID cards are available in PVC, composite, and paper formats — with options for photo ID, barcodes, QR codes, and custom designs. Ideal for employee identity cards, visitor passes, and event credentials. Bulk printing starts at just 50 cards with fast turnaround. We serve corporate HR teams, security departments, and event managers across India. Order custom ID cards from OfNeeds and get consistently high-quality output, fast dispatch, and durable card finishing every time. Our ID cards are printed at 300 DPI for crisp text and sharp photo reproduction, with optional lamination, signature strips, magnetic stripes, and RFID chips for access control systems."
      features={[
        {
          title: "Multiple Card Types",
          desc: "PVC, composite, paper, and proximity cards. RFID and magnetic stripe options available.",
        },
        {
          title: "High-Res Photo Printing",
          desc: "300 DPI printing for sharp, professional photo ID cards every time.",
        },
        {
          title: "Barcode & QR Code",
          desc: "Custom barcodes and QR codes for access control, attendance tracking, and identity verification.",
        },
        {
          title: "MOQ 50 Cards",
          desc: "Low minimum order. Suitable for small offices and large enterprise rollouts alike.",
        },
        {
          title: "Durable Finish",
          desc: "Matte or gloss lamination for scratch-resistance and long card life.",
        },
        {
          title: "Fast Printing",
          desc: "Standard ID cards ready in 24–48 hours. Bulk orders in 3–5 business days.",
        },
      ]}
      faqs={[
        {
          q: "What types of ID cards does OfNeeds print?",
          a: "We print PVC ID cards, composite cards, paper laminate cards, proximity (RFID) cards, and magnetic stripe cards for access control systems.",
        },
        {
          q: "Can ID cards include employee photos, barcodes, and QR codes?",
          a: "Yes. All our ID cards support photo printing, barcodes, QR codes, digital signatures, and custom security features.",
        },
        {
          q: "What is the minimum order for ID card printing?",
          a: "MOQ is 50 cards. Bulk discounts apply for orders above 100, 250, and 500 cards.",
        },
        {
          q: "How long does ID card printing take?",
          a: "Standard PVC cards are printed within 24–48 hours. RFID and magnetic stripe cards may require 3–5 business days.",
        },
        {
          q: "Do you supply lanyards and card holders with ID cards?",
          a: "Yes. We offer complete ID card solutions including matching lanyards, retractable reel holders, and neck holders. Bundle pricing available.",
        },
      ]}
      relatedLinks={[
        { label: "Lanyards", href: "/lanyards" },
        { label: "Standees", href: "/standees" },
        { label: "Corporate Gifts", href: "/corporate-gifts" },
        { label: "Welcome Goodies", href: "/welcome-goodies" },
      ]}
    />
  );
}
