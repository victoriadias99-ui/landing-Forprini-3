import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      type: 'brand',
      bgColor: "bg-[#FDF5E6]",
    },
    {
      id: 1,
      type: 'product',
      bgColor: "bg-[#FF9EDE]",
      title: "Soluciones de\nembalaje\npersonalizadas\npara tu\nmarca",
      description: "Descubre nuestra amplia gama de envases premium diseñados para destacar en el estante y proteger tus productos.",
      buttonText: "VER CATÁLOGO",
      image: "https://picsum.photos/seed/packaging-premium/800/600",
      badges: [
        { text: "Premium", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-gray-800 shadow-lg transform rotate-12 z-20" },
        { text: "Quality", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-pink-500 shadow-lg transform -rotate-6 z-20 border-2 border-pink-500" },
        { text: "Packaging", className: "-bottom-6 right-10 bg-pink-500 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
      ]
    },
    {
      id: 2,
      type: 'product',
      bgColor: "bg-[#C4EB00]",
      title: "Bolsas\nstand-up pouch\nflexibles y\nresistentes",
      description: "La solución perfecta para alimentos, cosméticos y más. Totalmente personalizables y con barreras de alta protección.",
      buttonText: "CONFIGURAR AHORA",
      image: "https://picsum.photos/seed/packaging-pouch/800/600",
      badges: [
        { text: "Eco", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-green-600 shadow-lg transform rotate-12 z-20" },
        { text: "Flexible", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-green-500 shadow-lg transform -rotate-6 z-20 border-2 border-green-500" },
        { text: "Pouch", className: "-bottom-6 right-10 bg-green-600 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
      ]
    },
    {
      id: 3,
      type: 'product',
      bgColor: "bg-[#7F35F1]",
      title: "Envases de\nvidrio y\nfrascos\nelegantes",
      description: "Dale a tu producto un toque de distinción con nuestros frascos de vidrio. Ideales para cosmética y productos gourmet.",
      buttonText: "SABER MÁS",
      image: "https://picsum.photos/seed/packaging-glass/800/600",
      badges: [
        { text: "Glass", className: "top-0 right-10 bg-white px-4 py-2 rounded-full font-bold text-xl text-purple-800 shadow-lg transform rotate-12 z-20" },
        { text: "Premium", className: "-top-6 right-0 bg-white px-6 py-3 rounded-full font-bold text-2xl text-purple-500 shadow-lg transform -rotate-6 z-20 border-2 border-purple-500" },
        { text: "Design", className: "-bottom-6 right-10 bg-purple-800 px-6 py-3 rounded-full font-bold text-2xl text-white shadow-lg transform rotate-3 z-20" }
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
    }, 8000); // Increased time for brand slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative overflow-hidden transition-colors duration-500 ${slides[currentSlide].bgColor} h-screen min-h-[600px]`}>
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowLeft size={32} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowRight size={32} strokeWidth={1} />
      </button>

      {slides[currentSlide].type === 'brand' ? (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Blobs */}
          <div className="absolute top-0 left-0 w-[50%] h-[60%] -translate-x-1/4 -translate-y-1/4 z-0">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#0047FF] fill-current">
              <path d="M40,-60C50,-50,60,-40,65,-25C70,-10,70,10,65,25C60,40,50,50,40,60C30,70,10,80,-10,80C-30,80,-50,70,-60,60C-70,50,-80,30,-80,10C-80,-10,-70,-30,-60,-45C-50,-60,-30,-70,-10,-70C10,-70,30,-70,40,-60Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-[40%] h-[70%] translate-x-1/4 -translate-y-1/4 z-0">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#C4EB00] fill-current">
              <path d="M30,-50C40,-40,50,-30,55,-15C60,0,60,15,55,30C50,45,40,60,25,65C10,70,-10,70,-25,65C-40,60,-50,45,-55,30C-60,15,-60,0,-55,-15C-50,-30,-40,-40,-30,-50C-20,-60,10,-60,30,-50Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] -translate-x-1/4 translate-y-1/4 z-0">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#FF9EDE] fill-current">
              <path d="M40,-60C55,-50,70,-40,75,-25C80,-10,80,10,75,25C70,40,55,55,40,65C25,75,5,80,-15,75C-35,70,-55,55,-65,40C-75,25,-75,5,-70,-15C-65,-35,-55,-55,-40,-65C-25,-75,-5,-75,15,-70C35,-65,25,-70,40,-60Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] translate-x-1/4 translate-y-1/4 z-0">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#FF0000] fill-current">
              <path d="M50,-70C65,-60,80,-50,85,-35C90,-20,90,0,85,20C80,40,65,60,50,70C35,80,10,85,-15,80C-40,75,-65,60,-75,40C-85,20,-85,0,-80,-20C-75,-40,-65,-60,-50,-70C-35,-80,-10,-80,15,-75C40,-70,35,-80,50,-70Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative">
              <h1 className="text-[14vw] font-black tracking-tighter text-black leading-none select-none uppercase">
                FORPRINI
              </h1>
              {/* Red bag on F */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute -top-[10vw] -left-[2vw] w-[12vw]">
                <img src="/Copia de Personaje4.png" alt="Mascota Roja" className="w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Green tube on O */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute top-[3vw] left-[12vw] w-[9vw]">
                <img src="/Copia de Personaje8.png" alt="Mascota Verde" className="w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Blue jar on R */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="absolute -top-[11vw] left-[25vw] w-[11vw]">
                <img src="/Copia de Personaje3.png" alt="Mascota Azul" className="w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Purple pump on P */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="absolute -top-[12vw] left-[41vw] w-[11vw]">
                <img src="/Copia de Personaje7.png" alt="Mascota Morada" className="w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Pink dropper on last I */}
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="absolute top-[1vw] -right-[9vw] w-[9vw]">
                <img src="/Copia de Personaje5.png" alt="Mascota Rosa" className="w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 pl-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line animate-in fade-in slide-in-from-left-8 duration-500" key={`title-${currentSlide}`}>
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-800 mb-8 max-w-md animate-in fade-in slide-in-from-left-8 duration-500 delay-100" key={`desc-${currentSlide}`}>
              {slides[currentSlide].description}
            </p>
            <button className="bg-[#C4EB00] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#A5C600] transition-colors animate-in fade-in slide-in-from-left-8 duration-500 delay-200" key={`btn-${currentSlide}`}>
              {slides[currentSlide].buttonText} <ArrowRight size={16} />
            </button>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center animate-in fade-in slide-in-from-right-8 duration-500" key={`img-${currentSlide}`}>
            <img src={slides[currentSlide].image} alt="Bolsas Packstyle" className="relative z-10 rounded-lg shadow-xl max-h-[400px] object-contain" referrerPolicy="no-referrer" />
            {slides[currentSlide].badges?.map((badge, index) => (
              <div key={index} className={`absolute ${badge.className}`}>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      )}
      
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
