import { ArrowRight } from 'lucide-react';

export default function Combine() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-packstyle-green/20 rounded-full transform -translate-x-1/4 scale-150 blur-3xl"></div>
          <img src="https://picsum.photos/seed/combine/600/500" alt="Packaging samples" className="relative z-10 rounded-xl shadow-2xl transform -rotate-6" referrerPolicy="no-referrer" />
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-blue-600 rounded-sm transform rotate-45"></div>
            LOS PRODUCTOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué combinamos en Packstyle?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Materiales, formas, acabados, accesorios y gráficos son las propiedades que combinamos de infinitas formas según tus necesidades para que tu packaging sea único. Puedes configurar tu bolsa haciendo que hable de tu producto y nosotros, gracias a nuestras tecnologías digitales, lo producimos y te lo entregamos en poco tiempo.
          </p>
          <button className="bg-packstyle-green text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-packstyle-green-dark transition-colors">
            DESCUBRE CÓMO FUNCIONA <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
