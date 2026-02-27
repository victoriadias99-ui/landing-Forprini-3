import { Cookie, Coffee, Leaf, Droplet, Pill, Beaker, Dog, Flower2 } from 'lucide-react';

export default function Markets() {
  const markets = [
    { icon: <Cookie size={40} strokeWidth={1} />, name: "Alimentación" },
    { icon: <Coffee size={40} strokeWidth={1} />, name: "Café" },
    { icon: <Leaf size={40} strokeWidth={1} />, name: "Cáñamo" },
    { icon: <Droplet size={40} strokeWidth={1} />, name: "Cosmesi" },
    { icon: <Pill size={40} strokeWidth={1} />, name: "Suplementos" },
    { icon: <Beaker size={40} strokeWidth={1} />, name: "Líquidos" },
    { icon: <Dog size={40} strokeWidth={1} />, name: "Alimentos para mascotas" },
    { icon: <Flower2 size={40} strokeWidth={1} />, name: "Infusiones y especias" },
  ];

  return (
    <section className="bg-[#f0e68c] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            LOS MERCADOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            ¡Flexibles en todos los sentidos! Nuestro packaging es apto para todo tipo de usos
          </h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {markets.map((m, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white transition-colors cursor-pointer shadow-sm">
              <div className="text-gray-700 mb-4">{m.icon}</div>
              <h3 className="font-bold text-gray-900 mb-4 text-sm h-10 flex items-center">{m.name}</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider">MÁS INFORMACIÓN</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
