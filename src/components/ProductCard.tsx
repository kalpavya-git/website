import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <span className="text-xs font-sans uppercase tracking-wider text-accent">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-medium mt-1 text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-xl font-semibold text-primary">
            {product.price}
          </span>
          <Button asChild size="sm" variant="outline" className="font-sans hover:bg-primary hover:text-primary-foreground">
            <Link to={`/products/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
