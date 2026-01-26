import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919211895324?text=${text}`; // Encoding happens via browser, but manual encoding is safer for complex chars, let's use encodeURIComponent for fields if needed, but simple template string usually works. To be safe, let's use encodeURIComponent.

    // Better implementation with encodeURIComponent
    const encodedText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/919211895324?text=${encodedText}`, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to send the message...",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9211895324",
      href: "tel:+919211895324",
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@kalpavyaayurveda.com",
      href: "mailto:support@kalpavyaayurveda.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Wellness Lane, Rishikesh, Uttarakhand 249201",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      href: null,
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30 pattern-leaf">
        <div className="container mx-auto px-4 text-center">
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2">
            Contact Us
          </h1>
          <p className="font-serif text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions about our products or need guidance? We're here to help
            you on your wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="font-sans"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-sans" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-medium text-foreground">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-serif text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-serif text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-display text-lg font-medium text-foreground">
                    Prefer WhatsApp?
                  </h3>
                </div>
                <p className="font-sans text-sm text-muted-foreground mb-4">
                  Message us directly for quick responses about products or orders.
                </p>
                <Button asChild className="font-sans w-full sm:w-auto">
                  <a
                    href="https://wa.me/919211895324"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Map Placeholder */}
              {/* <div className="mt-10">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Visit Our Store
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop"
                    alt="Rishikesh, India - Store Location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
