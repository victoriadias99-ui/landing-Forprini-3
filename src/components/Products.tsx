import { CheckCircle2, PlusCircle, ShoppingCart } from 'lucide-react';

export default function Products({ onOpenConfigurator }: { onOpenConfigurator?: () => void }) {
  const products = [
    {
      name: "Bolsas doypack",
      image: "https://picsum.photos/seed/doypack/300/400",
      features: [
        "LIGERAS",
        "PERSONALIZABLES",
        "APTAS PARA EL CONTACTO CON ALIMENTOS",
        "SE MANTIENEN DE PIE",
        "CON MUCHOS ACCESORIOS"
      ]
    },
    {
      name: "Bolsas planas",
      image: "https://picsum.photos/seed/planas/300/400",
      features: [
        "LIGERAS Y FLEXIBLES",
        "PERSONALIZABLES",
        "APTAS PARA EL CONTACTO CON ALIMENTOS",
        "PROVISTAS DE ORIFICIO PARA COLGARLAS",
        "CON MUCHOS ACCESORIOS"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <img src={p.image} alt={p.name} className="h-64 object-contain mb-6 drop-shadow-xl" referrerPolicy="no-referrer" />
            <h3 className="text-xl font-bold text-gray-900 mb-6">{p.name}</h3>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-gray-400" /> {f}
                </li>
              ))}
            </ul>
            <p className="font-bold text-gray-900 mb-4">A partir de 50 piezas</p>
            <button onClick={onOpenConfigurator} className="w-full max-w-xs bg-packstyle-green text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-packstyle-green-dark transition-colors mb-4">
              CONFIGURAR <ShoppingCart size={18} />
            </button>
            <a href="#" className="text-packstyle-green text-sm flex items-center gap-1 hover:underline">
              MÁS INFORMACIÓN <PlusCircle size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
