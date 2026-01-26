import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Leaf, Shield, Heart, Sparkles, Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.webp";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure herbs sourced from traditional Ayurvedic farms",
    },
    {
      icon: Shield,
      title: "Time-Tested",
      description: "Formulations refined over thousands of years",
    },
    {
      icon: Heart,
      title: "Holistic Healing",
      description: "Treating root causes, not just symptoms",
    },
    {
      icon: Sparkles,
      title: "Quality Assured",
      description: "Rigorous testing for purity and potency",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block font-sans text-sm uppercase tracking-[0.3em] text-accent mb-4 animate-fade-in">
              Ancient Wisdom • Modern Wellness
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Discover the Healing Power of{" "}
              <span className="text-primary">Ayurveda</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Experience authentic herbal supplements crafted from centuries-old
              recipes. Restore balance to your body, mind, and spirit with nature's
              most powerful remedies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="font-sans bg-primary hover:bg-primary/90">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-sans border-primary/30 hover:bg-primary/10">
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ayurveda Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
              Why Choose Ayurveda
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
              The Science of Life
            </h2>
            <p className="font-serif text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ayurveda, the 5,000-year-old system of natural healing, offers a holistic
              approach to wellness that addresses the root cause of imbalance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="text-center border-none bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
                Our Offerings
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
                Featured Products
              </h2>
            </div>
            <Link
              to="/products"
              className="font-sans text-primary hover:text-primary/80 transition-colors flex items-center gap-2 mt-4 md:mt-0"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <span className="font-display text-4xl font-bold text-primary">25+</span>
              <p className="font-sans text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div>
              <span className="font-display text-4xl font-bold text-primary">50+</span>
              <p className="font-sans text-sm text-muted-foreground mt-1">Herbal Products</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div>
              <span className="font-display text-4xl font-bold text-primary">10k+</span>
              <p className="font-sans text-sm text-muted-foreground mt-1">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div>
              <span className="font-display text-4xl font-bold text-primary">100%</span>
              <p className="font-sans text-sm text-muted-foreground mt-1">Natural Ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-herb text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Begin Your Wellness Journey
          </h2>
          <p className="font-serif text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Have questions about our products or need guidance on choosing the right
            Ayurvedic supplements for your needs? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-sans">
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-sans border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/919211895324" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
