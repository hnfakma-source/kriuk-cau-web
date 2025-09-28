import { Button } from "@/components/ui/button";

interface FlavorSelectorProps {
  selectedFlavor: string;
  onFlavorSelect: (flavor: string) => void;
}

const flavors = [
  {
    id: 'coklat',
    name: 'Coklat',
    emoji: '🍫',
    description: 'Rasa coklat yang rich dan manis',
    color: 'chocolate'
  },
  {
    id: 'matcha',
    name: 'Matcha',
    emoji: '🍃',
    description: 'Rasa matcha yang fresh dan unik',
    color: 'matcha'
  },
  {
    id: 'taro',
    name: 'Taro',
    emoji: '🟣',
    description: 'Rasa taro yang creamy dan lembut',
    color: 'taro'
  }
];

const FlavorSelector = ({ selectedFlavor, onFlavorSelect }: FlavorSelectorProps) => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Pilih Rasa Favoritmu</h2>
          <p className="text-xl text-muted-foreground">
            Tiga varian rasa lezat yang siap memanjakan lidahmu
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Button
                variant={selectedFlavor === flavor.id ? "flavor-active" : "flavor"}
                className={`w-full h-auto p-8 flex flex-col items-center gap-4 ${
                  selectedFlavor === flavor.id ? `border-${flavor.color}` : ''
                }`}
                onClick={() => onFlavorSelect(flavor.id)}
              >
                <div className="text-6xl mb-2">{flavor.emoji}</div>
                <h3 className="text-2xl font-bold">{flavor.name}</h3>
                <p className="text-sm text-center opacity-80">{flavor.description}</p>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorSelector;