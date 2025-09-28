import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "Apa itu KICAU Kriuk Cau Cihuy?",
    answer: "KICAU Kriuk Cau Cihuy adalah cemilan renyah premium dengan 3 varian rasa unik: Coklat, Matcha, dan Taro. Dibuat dengan bahan berkualitas tinggi untuk memberikan pengalaman ngemil yang tak terlupakan."
  },
  {
    id: "item-2",
    question: "Berapa lama daya tahan produk?",
    answer: "Produk KICAU memiliki daya tahan hingga 6 bulan dari tanggal produksi jika disimpan dalam kemasan tertutup rapat di tempat yang sejuk dan kering. Pastikan untuk mengecek tanggal kedaluwarsa pada kemasan."
  },
  {
    id: "item-3",
    question: "Bagaimana cara memesan?",
    answer: "Sangat mudah! Pilih produk yang diinginkan, tambahkan ke keranjang, lalu klik 'Pesan via WhatsApp'. Anda akan diarahkan ke chat WhatsApp dengan detail pesanan yang sudah tersusun otomatis."
  },
  {
    id: "item-4",
    question: "Apakah tersedia pengiriman ke seluruh Indonesia?",
    answer: "Ya, kami melayani pengiriman ke seluruh Indonesia melalui berbagai ekspedisi terpercaya. Biaya pengiriman akan disesuaikan dengan lokasi tujuan dan akan diinformasikan saat konfirmasi pesanan."
  },
  {
    id: "item-5",
    question: "Berapa minimal pemesanan?",
    answer: "Tidak ada minimal pemesanan untuk produk KICAU. Anda bisa memesan mulai dari 1 kemasan kecil sesuai kebutuhan. Namun, untuk pembelian dalam jumlah banyak tersedia harga khusus."
  },
  {
    id: "item-6",
    question: "Apakah produk ini halal?",
    answer: "Ya, semua produk KICAU Kriuk Cau Cihuy diproduksi dengan standar halal dan menggunakan bahan-bahan yang telah tersertifikasi halal. Kami berkomitmen untuk menyajikan produk yang aman dikonsumsi oleh semua kalangan."
  },
  {
    id: "item-7",
    question: "Bagaimana jika produk rusak saat pengiriman?",
    answer: "Kami sangat memperhatikan kualitas packaging untuk memastikan produk sampai dengan baik. Jika terjadi kerusakan akibat pengiriman, silakan hubungi kami dengan foto bukti kerusakan, dan kami akan memberikan solusi terbaik."
  },
  {
    id: "item-8",
    question: "Apa yang membedakan KICAU dengan cemilan lain?",
    answer: "KICAU memiliki tekstur renyah yang khas dengan kombinasi rasa yang unik dan tidak pasaran. Kami menggunakan bahan berkualitas premium dan proses produksi yang higienis untuk menghasilkan cemilan dengan cita rasa yang konsisten dan memuaskan."
  }
];

const FAQAccordion = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Pertanyaan yang sering ditanyakan tentang KICAU
          </p>
        </div>
        
        <div className="animate-slide-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;