import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";

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

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

// Ganti dengan nomor WhatsApp tujuan (format internasional tanpa +)
const WA_NUMBER = "6281234567890"; // Contoh: 6281234567890

const Cart = ({ cart, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    
    let message = '🛒 *Pesanan KICAU Kriuk Cau Cihuy*\n\n';
    
    cart.forEach(item => {
      message += `• ${item.name}\n`;
      message += `  Jumlah: ${item.quantity}\n`;
      message += `  Harga: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *Total: ${formatPrice(totalPrice)}*\n\n`;
    message += 'Mohon konfirmasi pesanan dan info pengiriman ya! 😊';
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen && totalItems === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          variant="cart"
          size="lg"
          className="rounded-full shadow-lg relative"
          onClick={() => setIsOpen(true)}
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      ) : (
        <Card className="w-80 max-h-96 animate-scale-in">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg">Keranjang Belanja</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </CardHeader>
          
          <CardContent className="max-h-60 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Keranjang masih kosong
              </p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <span className="text-2xl">{item.image}</span>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-lg text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={handleWhatsAppOrder}
                  >
                    Pesan via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Cart;