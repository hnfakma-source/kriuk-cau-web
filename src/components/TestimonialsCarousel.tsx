import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Jakarta",
    rating: 5,
    comment: "KICAU Kriuk Cau Cihuy ini beneran nagih! Rasa coklatnya premium banget, ga terlalu manis. Teksturnya juga pas, renyah tapi ga keras. Udah jadi cemilan wajib keluarga nih!"
  },
  {
    id: 2,
    name: "Andi P.",
    location: "Bandung",
    rating: 5,
    comment: "Varian matchanya juara! Sebagai pecinta matcha, rasanya authentic dan ga artificial. Packagingnya juga cantik, cocok buat oleh-oleh. Recommended banget!"
  },
  {
    id: 3,
    name: "Lisa W.",
    location: "Surabaya",
    rating: 5,
    comment: "Taronya unik dan enak banget! Anak-anak juga suka. Harganya affordable untuk kualitas segini. Pesen lewat WA juga gampang dan respon cepet."
  },
  {
    id: 4,
    name: "Budi S.",
    location: "Yogyakarta",
    rating: 5,
    comment: "Pertama kali coba langsung suka! Ketiga varian rasanya punya karakter masing-masing. Crunchy-nya pas, ga bikin rahang pegal. Bakal repeat order nih!"
  },
  {
    id: 5,
    name: "Dinda R.",
    location: "Medan",
    rating: 5,
    comment: "KICAU ini beda dari cemilan lain. Rasanya balance dan ga bikin eneg. Cocok buat ngemil sambil kerja atau nonton drakor. Packagingnya juga praktis dibawa kemana-mana!"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400">⭐</span>
    ));
  };

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Kata Mereka Tentang KICAU</h2>
          <p className="text-xl text-muted-foreground">
            Testimoni dari para pecinta cemilan renyah
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-lg mb-6 leading-relaxed italic">
                      "{testimonial.comment}"
                    </blockquote>
                    
                    <div>
                      <cite className="font-semibold text-primary">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;