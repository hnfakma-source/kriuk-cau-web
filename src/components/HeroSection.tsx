import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-snacks.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            KICAU
            <span className="block text-4xl md:text-6xl text-yellow-300 animate-bounce-gentle">
              Kriuk Cau Cihuy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Cemilan Renyah & Lezat dengan 3 Varian Rasa Pilihan
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-lg">
            <span className="bg-chocolate/80 px-4 py-2 rounded-full">🍫 Coklat</span>
            <span className="bg-matcha/80 px-4 py-2 rounded-full">🍃 Matcha</span>
            <span className="bg-taro/80 px-4 py-2 rounded-full">🟣 Taro</span>
          </div>
          
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToProducts}
            className="animate-scale-in"
          >
            Lihat Produk Kami
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;