import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Purity",
      description: "We source only the finest organic herbs from traditional Ayurvedic farms across India.",
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "Our formulations follow ancient texts and time-tested recipes passed down through generations.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Every product undergoes rigorous testing for purity, potency, and safety.",
    },
    {
      icon: Users,
      title: "Care",
      description: "We're committed to your wellness journey with personalized guidance and support.",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30 pattern-leaf">
        <div className="container mx-auto px-4 text-center">
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2">
            About Kalpavya Ayurveda
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Rooted in Tradition, <br />
                <span className="text-primary">Growing with Purpose</span>
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Founded in the spiritual heartland of Rishikesh, Kalpavya Ayurveda was born 
                  from a deep reverence for India's ancient healing traditions. For over 25 
                  years, we have been dedicated to bringing the transformative power of 
                  Ayurveda to wellness seekers around the world.
                </p>
                <p>
                  Our journey began when our founder, trained under revered Ayurvedic 
                  practitioners, witnessed the profound impact these ancient remedies had on 
                  modern ailments. This inspired a mission to preserve and share this 
                  precious knowledge while ensuring the highest standards of quality and 
                  authenticity.
                </p>
                <p>
                  Today, we work directly with organic farmers and traditional herbalists 
                  across India, ensuring that every herb we use is sustainably sourced, 
                  ethically harvested, and processed according to classical Ayurvedic methods.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=750&fit=crop"
                  alt="Ayurvedic herbs and preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg max-w-[200px]">
                <span className="font-display text-4xl font-bold">25+</span>
                <p className="font-sans text-sm mt-1 opacity-90">Years of Ayurvedic Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-8">
              "Swasthya Raksha" — Preserving Health
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
              In Ayurveda, we believe that true health is not merely the absence of disease, 
              but a state of complete physical, mental, and spiritual well-being. Our approach 
              focuses on prevention and balance — working with your unique constitution (Kalpavya) 
              to maintain harmony and vitality.
            </p>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              Every product we create is designed to support your body's innate intelligence, 
              helping you achieve lasting wellness through nature's most powerful remedies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Ready to Experience Ayurveda?
          </h2>
          <p className="font-serif text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our collection of authentic herbal products or reach out to learn 
            more about how Ayurveda can support your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-sans">
              <Link to="/products">Browse Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-sans">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
