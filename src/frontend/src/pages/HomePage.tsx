import EnquiryForm from "@/components/EnquiryForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Package,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const starterPacks = [
  {
    title: "Essential Welcome Kit",
    price: "₹599",
    per: "per person",
    badge: "Best Seller",
    items: [
      "Custom Polo T-Shirt",
      "Premium Notebook",
      "Metal Pen",
      "Sipper Bottle",
      "OfNeeds Branded Bag",
    ],
    image: "/assets/uploads/image-019d344a-fdd3-74fd-9c26-91469634866e-1.png",
    href: "/welcome-gifts",
  },
  {
    title: "Premium Welcome Kit",
    price: "₹1199",
    per: "per person",
    badge: "Most Popular",
    items: [
      "Custom Polo Shirt",
      "Premium Notebook",
      "Metal Pen",
      "Sipper Bottle",
      "Custom Cap",
      "Coffee Mug",
      "Tote Bag",
    ],
    image: "/assets/uploads/image-019d344a-fdd3-74fd-9c26-91469634866e-1.png",
    href: "/welcome-gifts",
  },
];

const categories = [
  { label: "Corporate Gifts", href: "/corporate-gifts", icon: "🎁" },
  { label: "Welcome Kits", href: "/welcome-gifts", icon: "📦" },
  { label: "Customized T-Shirts", href: "/customized-tshirts", icon: "👕" },
  { label: "Polo T-Shirts", href: "/polo-tshirts", icon: "👔" },
  { label: "Jackets", href: "/jackets", icon: "🧥" },
  { label: "Trophies", href: "/trophies", icon: "🏆" },
  { label: "Lanyards", href: "/lanyards", icon: "🔖" },
  { label: "Sipper Bottles", href: "/sipper-bottles", icon: "🥤" },
  { label: "Custom Mugs", href: "/customized-mugs", icon: "☕" },
  { label: "Standees", href: "/standees", icon: "🪧" },
  { label: "ID Cards", href: "/id-cards", icon: "🪪" },
  { label: "Welcome Goodies", href: "/welcome-goodies", icon: "🎀" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HR Manager, TechCorp India",
    text: "OfNeeds delivered our entire onboarding kit within 5 days. The quality exceeded expectations and our new hires absolutely loved the welcome packs!",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Operations Head, StartupHub",
    text: "We ordered 500 customized polo shirts for our annual event. The print quality was flawless and the bulk pricing was very competitive.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Procurement Manager, InnovateCo",
    text: "From trophies to lanyards, OfNeeds is our go-to vendor for all corporate merchandise. Consistent quality, fast delivery, great support.",
    rating: 5,
  },
];

const clients = [
  { name: "Amazon", initials: "AMZ" },
  { name: "Antstack", initials: "ANT" },
  { name: "Infor", initials: "INF" },
  { name: "SLK Infotech", initials: "SLK" },
  { name: "SVT", initials: "SVT" },
  { name: "Valzy", initials: "VAL" },
];

const stats = [
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Products Delivered", value: "50,000+", icon: Package },
  { label: "Pan-India Delivery", value: "28 States", icon: Truck },
  { label: "Award Winning", value: "4.8★ Rating", icon: Award },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full bg-primary text-primary-foreground"
        data-ocid="hero-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground border-0 text-xs font-semibold px-3 py-1">
              Ready-to-Ship Starter Packs for Employees
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Gifts That <span className="text-accent">Speak</span> Your Brand
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-2">
              Your Reliable Partner for Corporate Gifting Solutions
            </p>
            <p className="text-base text-primary-foreground/65 mb-8 max-w-xl">
              Premium welcome kits, customized merchandise & bulk corporate
              gifts — crafted for HR teams, operations managers, and procurement
              heads across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" data-ocid="hero-cta-quote">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6"
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link to="/welcome-gifts" data-ocid="hero-cta-explore">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-6"
                >
                  Explore Welcome Kits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Packs */}
      <section
        className="w-full bg-muted/40 py-16"
        data-ocid="starter-packs-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Ready-to-Ship Starter Packs for Employees
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Make Day One unforgettable. Curated welcome kits with your company
              logo, delivered across India within 7 days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {starterPacks.map((pack) => (
              <Card
                key={pack.title}
                className="flex flex-col h-full border border-border shadow-corporate-lg"
                data-ocid="starter-pack-card"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={pack.image}
                    alt={`${pack.title} — OfNeeds corporate welcome kit`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-accent text-accent-foreground text-xs font-semibold">
                      {pack.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    {pack.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {pack.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-bold text-primary">
                        {pack.price}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {pack.per}
                      </span>
                    </div>
                    <Link to={pack.href} data-ocid="starter-pack-order-btn">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                        Order Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        className="w-full bg-background py-16"
        data-ocid="categories-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Explore Our Corporate Gifting Collection
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From customized apparel to trophies and awards — everything your
              team needs, under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-corporate transition-smooth text-center group"
                data-ocid="category-card"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-smooth leading-tight">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="w-full bg-primary text-primary-foreground py-12"
        data-ocid="stats-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2"
              >
                <stat.icon className="w-6 h-6 text-accent" />
                <span className="font-display text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </span>
                <span className="text-sm text-primary-foreground/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="w-full bg-muted/30 py-14" data-ocid="trusted-section">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Trusted by Global Leaders
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-16 px-4 bg-card border border-border rounded-lg grayscale hover:grayscale-0 hover:border-accent transition-smooth shadow-sm"
                aria-label={client.name}
                data-ocid="client-logo"
              >
                <span className="font-display font-bold text-sm text-muted-foreground">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="w-full bg-background py-16"
        data-ocid="testimonials-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border border-border shadow-corporate"
                data-ocid="testimonial-card"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }, (_, i) => i + 1).map(
                      (n) => (
                        <Star
                          key={n}
                          className="w-4 h-4 text-accent fill-accent"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section
        className="w-full bg-muted/30 py-16"
        data-ocid="blog-preview-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Latest from Our Blog
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title:
                  "15 Best Corporate Gifting Ideas for Employees in India (2025)",
                href: "/blog/best-corporate-gifting-ideas",
                tag: "Corporate Gifting",
              },
              {
                title: "How to Choose the Right Welcome Gift for New Employees",
                href: "/blog/welcome-gift-guide",
                tag: "Welcome Kits",
              },
              {
                title:
                  "Polo T-Shirts Bulk Order: What to Check Before You Order",
                href: "/blog/polo-tshirts-bulk-order",
                tag: "Apparel",
              },
            ].map((post) => (
              <Link
                key={post.href}
                to={post.href}
                className="group"
                data-ocid="blog-card"
              >
                <Card className="h-full border border-border shadow-corporate hover:border-accent hover:shadow-corporate-lg transition-smooth">
                  <CardContent className="pt-6">
                    <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 text-xs">
                      {post.tag}
                    </Badge>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-smooth leading-snug">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-accent font-medium">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Enquiry Form */}
      <section
        className="w-full bg-background py-16"
        id="contact"
        data-ocid="contact-section"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Request a Bulk Order Quote
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tell us what you need and we'll get back to you within 24 hours
              with a custom quote.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
