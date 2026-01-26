import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Product Not Found</h1>
          <p className="font-serif text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 font-sans text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <Badge variant="secondary" className="font-sans text-xs uppercase tracking-wider mb-4">
                {product.category}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl font-bold text-primary mb-6">
                {product.price}
              </p>
              <p className="font-serif text-muted-foreground leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline" className="font-sans text-xs">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div className="mb-8 p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  How to Use
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {product.usage}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-sans bg-primary hover:bg-primary/90">
                  <a
                    href={`https://wa.me/918929290209?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-sans">
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact to Order
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="font-sans">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
