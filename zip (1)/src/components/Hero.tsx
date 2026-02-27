import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bgColor: "bg-[#FF9EDE]",
      title: "Nuevas\ninstrucciones\npara los\narchivos\ngráficos",
      description: "Solo aceptaremos archivos PDF/X-1a para garantizar una impresión más precisa y reducir el margen de error. Consulta las nuevas instrucciones.",
      buttonText: "SABER MÁS",
      image: "https://picsum.photos/seed/packstyle1/600/400",
      badges: [
        { text: "New", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-gray-800 shadow-lg transform rotate-12 z-20" },
        { text: "guidelines for", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-blue-500 shadow-lg transform -rotate-6 z-20 border-2 border-blue-500" },
        { text: "graphic files", className: "-bottom-6 right-10 bg-blue-500 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
      ]
    },
    {
      id: 2,
      bgColor: "bg-[#C4EB00]",
      title: "Envases\nsostenibles\npara un\nfuturo\nverde",
      description: "Descubre nuestra nueva línea de bolsas compostables y reciclables. Protege tus productos y el medio ambiente al mismo tiempo.",
      buttonText: "VER PRODUCTOS",
      image: "https://picsum.photos/seed/packstyle2/600/400",
      badges: [
        { text: "Eco", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-green-600 shadow-lg transform rotate-12 z-20" },
        { text: "Friendly", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-green-500 shadow-lg transform -rotate-6 z-20 border-2 border-green-500" },
        { text: "Packaging", className: "-bottom-6 right-10 bg-green-600 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
      ]
    },
    {
      id: 3,
      bgColor: "bg-[#7F35F1]",
      title: "Personalización\nal máximo\nnivel\npara tu\nmarca",
      description: "Impresión digital de alta calidad sin cantidades mínimas. Haz que tu producto destaque en el estante con diseños únicos.",
      buttonText: "CONFIGURAR AHORA",
      image: "https://picsum.photos/seed/packstyle3/600/400",
      badges: [
        { text: "Custom", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-blue-800 shadow-lg transform rotate-12 z-20" },
        { text: "Design", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-blue-500 shadow-lg transform -rotate-6 z-20 border-2 border-blue-500" },
        { text: "Your Brand", className: "-bottom-6 right-10 bg-blue-800 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative overflow-hidden transition-colors duration-500 ${slides[currentSlide].bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center min-h-[500px]">
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
        >
          <ArrowLeft size={32} strokeWidth={1} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
        >
          <ArrowRight size={32} strokeWidth={1} />
        </button>
        
        <div className="md:w-1/2 z-10 pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line animate-in fade-in slide-in-from-left-8 duration-500" key={`title-${currentSlide}`}>
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-800 mb-8 max-w-md animate-in fade-in slide-in-from-left-8 duration-500 delay-100" key={`desc-${currentSlide}`}>
            {slides[currentSlide].description}
          </p>
          <button className="bg-packstyle-green text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-packstyle-green-dark transition-colors animate-in fade-in slide-in-from-left-8 duration-500 delay-200" key={`btn-${currentSlide}`}>
            {slides[currentSlide].buttonText} <ArrowRight size={16} />
          </button>
        </div>
        <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center animate-in fade-in slide-in-from-right-8 duration-500" key={`img-${currentSlide}`}>
          <img src={slides[currentSlide].image} alt="Bolsas Packstyle" className="relative z-10 rounded-lg shadow-xl transform rotate-3" referrerPolicy="no-referrer" />
          {slides[currentSlide].badges.map((badge, index) => (
            <div key={index} className={`absolute ${badge.className}`}>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gray-900' : 'bg-gray-900/30 hover:bg-gray-900/50'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
