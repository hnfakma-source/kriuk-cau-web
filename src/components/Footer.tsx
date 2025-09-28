const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">KICAU</h3>
            <p className="text-muted-foreground mb-4">
              Kriuk Cau Cihuy - Cemilan renyah dengan 3 varian rasa pilihan yang memanjakan lidah.
            </p>
            <div className="flex gap-2 justify-center md:justify-start">
              <span className="bg-chocolate/20 px-3 py-1 rounded-full text-sm">🍫 Coklat</span>
              <span className="bg-matcha/20 px-3 py-1 rounded-full text-sm">🍃 Matcha</span>
              <span className="bg-taro/20 px-3 py-1 rounded-full text-sm">🟣 Taro</span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📱 WhatsApp: +62 812-3456-7890</p>
              <p>📧 Email: hello@kicau.com</p>
              <p>🕒 Operasional: 08:00 - 20:00 WIB</p>
            </div>
          </div>
          
          {/* Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Informasi</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✅ Produk Halal</p>
              <p>🚚 Pengiriman ke Seluruh Indonesia</p>
              <p>💯 Kualitas Terjamin</p>
              <p>⭐ Rating 5.0/5.0</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 KICAU Kriuk Cau Cihuy. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with ❤️ for cemilan lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;