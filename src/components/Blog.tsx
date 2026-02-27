import { ArrowRight, Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Unboxing: utiliza el packaging como teatro de tu producto en las redes sociales",
      date: "LUN, 13 MAY 2024",
      desc: "El unboxing, es decir, compartir el desempaquetado en las redes sociales, es un fenómeno que se ha desarrollado a partir de la amplia difusión de contenidos en vídeo hace unos 10 años. Youtube en primer lugar, Instagram y hoy en día los directos en Twitch y TikTok se han convertido en los espacios más seguidos para este tipo de vídeos. En el período pandémico, esta variedad de contenidos ha registrado un seguimiento muy amplio para las pequeñas y medianas empresas, tanto que podemos decir que en las redes sociales el unboxing es ahora el primer paso de lanzamiento de cualquier producto, una práctica muy apreciada porque puede jugar con el factor de la novedad y la sorpresa, la emoción del descubrimiento.",
      img: "https://picsum.photos/seed/blog1/400/300"
    },
    {
      title: "Un packaging escalofriante: los mejores envases temáticos paquetes Halloween",
      date: "LUN, 13 MAY 2024",
      desc: "Halloween está a la vuelta de la esquina y ¿te gustaría aprovechar esta ocasión para crear un packaging verdaderamente «monstruoso»? Aquí encontrarás algunos consejos para diseñar tus envases de edición limitada y algunos ejemplos exitosos para inspirarte.",
      img: "https://picsum.photos/seed/blog2/400/300"
    },
    {
      title: "Capsule collection: una idea creativa que coger al vuelo",
      date: "LUN, 13 MAY 2024",
      desc: "Las capsule collections se han convertido en una tendencia muy importante para el mundo del marketing en los últimos años. A diferencia de los lanzamientos al mercado tradicionales, son pequeñas colecciones independientes, muy útiles para dar visibilidad a la marca y comunicar. Veamos a continuación en qué consisten y cómo brinda Packstyle su apoyo.",
      img: "https://picsum.photos/seed/blog3/400/300"
    },
    {
      title: "Film multimaterial: muchas ventajas para muchas aplicaciones",
      date: "LUN, 13 MAY 2024",
      desc: "El film es uno de los materiales de packaging más utilizados, especialmente el flexible, pero ¿cuáles son las características que lo hacen tan cómodo y fiable?",
      img: "https://picsum.photos/seed/blog4/400/300"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            EL BLOG
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Descubre lo que Packstyle tiene<br/>que decir
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-6">
            <h3 className="text-gray-500 tracking-wider text-sm">PRESENTADO</h3>
            <a href="#" className="text-packstyle-green text-sm flex items-center gap-1 hover:underline">
              Ver todo <ArrowRight size={14} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img src="https://picsum.photos/seed/blogmain/600/400" alt="Blog main" className="w-full h-64 object-cover rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Multigráficos: una valiosa ayuda para avanzar con fluidez</h4>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <Calendar size={12} /> JUE, 24 MAR 2022
              </div>
              <p className="font-bold text-gray-800 mb-2">Tiradas cortas, plazos rápidos, personalización: las ventajas de la impresión digital</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                La impresión digital es una metodología de impresión relativamente reciente que implica procesos electrónicos y tecnológicos basados en el envío de archivos en formato digital a la imprenta.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-6">
            <h3 className="text-gray-500 tracking-wider text-sm">MÁS RECIENTE</h3>
            <a href="#" className="text-packstyle-green text-sm flex items-center gap-1 hover:underline">
              Ver todo <ArrowRight size={14} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {posts.map((post, i) => (
              <div key={i} className="flex flex-col">
                <img src={post.img} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" referrerPolicy="no-referrer" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm leading-tight">{post.title}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar size={12} /> {post.date}
                </div>
                <p className="text-xs text-gray-600 line-clamp-6 leading-relaxed">{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
