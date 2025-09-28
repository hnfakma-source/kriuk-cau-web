import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

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

interface ProductCardsProps {
  selectedFlavor: string;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const products: Product[] = [
  {
    id: 'kicau-coklat-small',
    name: 'KICAU Coklat - Kemasan Kecil',
    flavor: 'coklat',
    price: 15000,
    description: 'Kemasan praktis untuk cemilan sehari-hari',
    image: '🍫'
  },
  {
    id: 'kicau-coklat-large',
    name: 'KICAU Coklat - Kemasan Besar',
    flavor: 'coklat',
    price: 35000,
    description: 'Kemasan hemat untuk keluarga dan sharing',
    image: '🍫'
  },
  {
    id: 'kicau-matcha-small',
    name: 'KICAU Matcha - Kemasan Kecil',
    flavor: 'matcha',
    price: 15000,
    description: 'Kemasan praktis untuk cemilan sehari-hari',
    image: '🍃'
  },
  {
    id: 'kicau-matcha-large',
    name: 'KICAU Matcha - Kemasan Besar',
    flavor: 'matcha',
    price: 35000,
    description: 'Kemasan hemat untuk keluarga dan sharing',
    image: '🍃'
  },
  {
    id: 'kicau-taro-small',
    name: 'KICAU Taro - Kemasan Kecil',
    flavor: 'taro',
    price: 15000,
    description: 'Kemasan praktis untuk cemilan sehari-hari',
    image: '🟣'
  },
  {
    id: 'kicau-taro-large',
    name: 'KICAU Taro - Kemasan Besar',
    flavor: 'taro',
    price: 35000,
    description: 'Kemasan hemat untuk keluarga dan sharing',
    image: '🟣'
  }
];

const ProductCards = ({ selectedFlavor, cart, onAddToCart, onUpdateQuantity }: ProductCardsProps) => {
  const filteredProducts = selectedFlavor === 'all' 
    ? products 
    : products.filter(product => product.flavor === selectedFlavor);

  const getCartQuantity = (productId: string) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem?.quantity || 0;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Produk Kami</h2>
          <p className="text-xl text-muted-foreground">
            Pilih kemasan yang sesuai dengan kebutuhanmu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const cartQuantity = getCartQuantity(product.id);
            
            return (
              <Card 
                key={product.id} 
                className="animate-scale-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {formatPrice(product.price)}
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-4">
                  {cartQuantity > 0 ? (
                    <div className="flex items-center justify-between w-full">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(product.id, cartQuantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-semibold px-4">
                        {cartQuantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(product.id, cartQuantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="cart" 
                      className="w-full"
                      onClick={() => onAddToCart(product)}
                    >
                      Tambah ke Keranjang
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;