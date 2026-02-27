import { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Droplet, Sun, Feather } from 'lucide-react';

export default function Materials() {
  const [activeTab, setActiveTab] = useState(0);

  const materialsData = [
    {
      name: "ALUMINIO",
      title: "Aluminio",
      image: "https://picsum.photos/seed/aluminio/300/450",
      description: "Resistente y altamente protector, el aluminio es un excelente aliado para el packaging, especialmente para los formatos flexibles. Aun manteniendo su ligereza, actúa como barrera contra los gases, la humedad y la luz, impidiendo el desplazamiento de los compuestos orgánicos y el deterioro del contenido.",
      features: [
        { icon: <Droplet size={18} className="text-gray-400" />, text: "IMPIDE EL PASO DE LA HUMEDAD" },
        { icon: <ShieldCheck size={18} className="text-gray-400" />, text: "BLOQUEA EL OXÍGENO Y EL DIÓXIDO DE CARBONO" },
        { icon: <Sun size={18} className="text-gray-400" />, text: "PROTEGE DE LA LUZ" },
        { icon: <Feather size={18} className="text-gray-400" />, text: "ES LIGERO Y FLEXIBLE" }
      ],
      symbol: "AL"
    },
    {
      name: "PAPEL DE ALUMINIO",
      title: "Papel de Aluminio",
      image: "https://picsum.photos/seed/papelaluminio/300/450",
      description: "Combina la estética natural y táctil del papel con las propiedades de barrera excepcionales del aluminio. Ideal para productos premium que requieren máxima protección sin sacrificar el aspecto artesanal.",
      features: [
        { icon: <ShieldCheck size={18} className="text-gray-400" />, text: "ALTA BARRERA PROTECTORA" },
        { icon: <Sun size={18} className="text-gray-400" />, text: "ASPECTO NATURAL Y PREMIUM" },
        { icon: <Droplet size={18} className="text-gray-400" />, text: "CONSERVA AROMAS Y SABORES" }
      ],
      symbol: "PAP/AL"
    },
    {
      name: "PAPEL RECICLABLE",
      title: "Papel Reciclable",
      image: "https://picsum.photos/seed/papelreciclable/300/450",
      description: "Una opción ecológica y sostenible. Nuestro papel reciclable está diseñado para ofrecer una barrera adecuada para productos secos, manteniendo un compromiso firme con el medio ambiente y la economía circular.",
      features: [
        { icon: <Feather size={18} className="text-gray-400" />, text: "100% RECICLABLE" },
        { icon: <Sun size={18} className="text-gray-400" />, text: "SOSTENIBLE Y ECOLÓGICO" },
        { icon: <ShieldCheck size={18} className="text-gray-400" />, text: "IDEAL PARA PRODUCTOS SECOS" }
      ],
      symbol: "PAP"
    },
    {
      name: "PELÍCULA RECICLABLE METALIZADA",
      title: "Película Reciclable Metalizada",
      image: "https://picsum.photos/seed/metalizada/300/450",
      description: "Ofrece el aspecto brillante y las propiedades de barrera de los materiales metalizados, pero con la ventaja de ser completamente reciclable. Perfecta para snacks y productos que necesitan destacar en el estante.",
      features: [
        { icon: <Sun size={18} className="text-gray-400" />, text: "ALTA BARRERA A LA LUZ" },
        { icon: <ShieldCheck size={18} className="text-gray-400" />, text: "TOTALMENTE RECICLABLE" },
        { icon: <Droplet size={18} className="text-gray-400" />, text: "PROTECCIÓN CONTRA HUMEDAD" }
      ],
      symbol: "PP/MET"
    },
    {
      name: "PELÍCULA RECICLABLE TRANSPARENTE",
      title: "Película Reciclable Transparente",
      image: "https://picsum.photos/seed/transparente/300/450",
      description: "Permite que tu producto sea el protagonista. Esta película transparente ofrece una excelente visibilidad del contenido mientras mantiene propiedades de barrera esenciales y es 100% reciclable.",
      features: [
        { icon: <Sun size={18} className="text-gray-400" />, text: "ALTA TRANSPARENCIA" },
        { icon: <ShieldCheck size={18} className="text-gray-400" />, text: "100% RECICLABLE" },
        { icon: <Feather size={18} className="text-gray-400" />, text: "EXCELENTE SELLADO" }
      ],
      symbol: "PP"
    }
  ];

  const nextMaterial = () => {
    setActiveTab((prev) => (prev + 1) % materialsData.length);
  };

  const prevMaterial = () => {
    setActiveTab((prev) => (prev - 1 + materialsData.length) % materialsData.length);
  };

  const currentMaterial = materialsData[activeTab];

  return (
    <section id="materiales" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-blue-600 rounded-sm transform rotate-45"></div>
            LOS MATERIALES
          </div>
          <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">
            Creados para cada necesidad y certificados para garantizar su calidad. Tan solo tienes que elegir.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {materialsData.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-colors ${
                activeTab === i ? 'bg-packstyle-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 relative min-h-[450px]">
          <button 
            onClick={prevMaterial}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800 hidden md:block z-20 bg-white/80 rounded-full p-2"
          >
            <ArrowLeft size={32} strokeWidth={1} />
          </button>
          <button 
            onClick={nextMaterial}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-800 hidden md:block z-20 bg-white/80 rounded-full p-2"
          >
            <ArrowRight size={32} strokeWidth={1} />
          </button>

          <div className="md:w-1/2 flex justify-center relative animate-in fade-in slide-in-from-left-8 duration-500" key={`img-${activeTab}`}>
            <div className="absolute inset-0 bg-gray-100 rounded-full transform -translate-x-1/4 scale-125 blur-3xl"></div>
            <img src={currentMaterial.image} alt={currentMaterial.title} className="relative z-10 drop-shadow-2xl h-[450px] object-contain" referrerPolicy="no-referrer" />
          </div>
          
          <div className="md:w-1/2 max-w-md animate-in fade-in slide-in-from-right-8 duration-500" key={`content-${activeTab}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{currentMaterial.title}</h3>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              {currentMaterial.description}
            </p>
            <ul className="space-y-4 mb-8 text-sm text-gray-700">
              {currentMaterial.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {feature.icon} {feature.text}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{currentMaterial.symbol}</span>
              </div>
            </div>
            <button className="border border-packstyle-green text-packstyle-green px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-packstyle-green hover:text-white transition-colors">
              MÁS INFORMACIÓN <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center text-[10px]">+</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
