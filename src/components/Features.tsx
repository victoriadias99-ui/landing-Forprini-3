import { Edit3, Layers, Hash, Truck } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Edit3 size={32} className="text-packstyle-green" />, text: "TOTALMENTE\nPERSONALIZABLE" },
    { icon: <Layers size={32} className="text-packstyle-green" />, text: "VARIOS\nGRÁFICOS\nPOR\nPEDIDO" },
    { icon: <Hash size={32} className="text-packstyle-green" />, text: "PEDIDO\nMÍNIMO\n50\nUNIDADES" },
    { icon: <Truck size={32} className="text-packstyle-green" />, text: "ENVÍO\nRÁPIDO\nDESDE\n5 DÍAS" },
  ];

  return (
    <section className="bg-[#FDEDD4] py-8 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-start text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-3 flex-1">
            <div className="w-16 h-16 rounded-full border-2 border-packstyle-green flex items-center justify-center bg-white">
              {f.icon}
            </div>
            <p className="text-xs font-bold text-gray-800 whitespace-pre-line leading-tight">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
