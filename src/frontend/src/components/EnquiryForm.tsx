import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire to backend when available
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-4 py-12 text-center"
        data-ocid="enquiry-success"
      >
        <CheckCircle2 className="w-14 h-14 text-accent" />
        <h3 className="font-display text-2xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Your enquiry has been received. Our team will contact you within 24
          hours with a custom quote.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-2"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-card border border-border rounded-lg p-6 shadow-corporate"
      data-ocid="enquiry-form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Priya Sharma"
            data-ocid="enquiry-name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Acme Corp"
            data-ocid="enquiry-company"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="hr@company.com"
            data-ocid="enquiry-email"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            data-ocid="enquiry-phone"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="product">Product Required</Label>
          <Input
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="Welcome Kits, T-Shirts..."
            data-ocid="enquiry-product"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quantity">Quantity Required</Label>
          <Input
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 100 pieces"
            data-ocid="enquiry-quantity"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Additional Requirements</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your requirements, customization needs, deadline, etc."
          rows={4}
          data-ocid="enquiry-message"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
        data-ocid="enquiry-submit"
      >
        {loading ? "Submitting..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
