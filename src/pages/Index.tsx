import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FlavorSelector from "@/components/FlavorSelector";
import ProductCards from "@/components/ProductCards";
import Cart from "@/components/Cart";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  flavor: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('coklat');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleFlavorSelect = (flavor: string) => {
    setSelectedFlavor(flavor);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <FlavorSelector 
        selectedFlavor={selectedFlavor}
        onFlavorSelect={handleFlavorSelect}
      />
      
      <ProductCards
        selectedFlavor={selectedFlavor}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      
      <TestimonialsCarousel />
      
      <FAQAccordion />
      
      <Footer />
      
      <Cart
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;