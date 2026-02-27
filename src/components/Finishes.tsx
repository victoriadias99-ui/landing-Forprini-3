import { PlusCircle } from 'lucide-react';

export default function Finishes() {
  const items = [
    {
      title: "Acabado satinado",
      desc: "Para que tu producto destaque en los estantes, elige el acabado satinado. El efecto brillo hace que los colores se vean relucientes y saturados, para una excelente reproducción gráfica.",
      img: "https://picsum.photos/seed/satinado/200/250"
    },
    {
      title: "Acabado soft touch",
      desc: "El refinamiento se puede ver y sentir. El acabado soft touch hace que tu envase quede elegante y aterciopelado: te parecerá estar tocando piel de ante.",
      img: "https://picsum.photos/seed/soft/200/250"
    },
    {
      title: "Acabado mate",
      desc: "Puedes hacer que tus bolsas destaquen con estilo utilizando la elegante modernidad del acabado mate. Para un efecto premium y sofisticado.",
      img: "https://picsum.photos/seed/mate/200/250"
    },
    {
      title: "Cierre resellable",
      desc: "El cierre permite abrir y volver a cerrar las bolsas después de usarlas, lo que ayuda a proteger y a conservar las propiedades del producto que contienen.",
      img: "https://picsum.photos/seed/cierre/200/150"
    },
    {
      title: "Orificio",
      desc: "El orificio facilita la gestión y aumenta la visibilidad de los productos destinados a los distribuidores: gracias a este accesorio, las bolsas también se pueden colgar.",
      img: "https://picsum.photos/seed/orificio/200/150"
    },
    {
      title: "Válvula de desgasificación",
      desc: "Algunos alimentos, una vez producidos, pueden generar gases dentro del envase. Para evitar que la bolsa se hinche, debe tener una válvula de desgasificación unidireccional que conserve el aroma y la frescura del producto.",
      img: "https://picsum.photos/seed/valvula/200/150"
    },
    {
      title: "Boquilla",
      desc: "La boquilla, indicada para productos líquidos y semilíquidos, facilita las operaciones de llenado y el consumo. El tapón se autosella después de llenar el envase, lo que impide la contaminación y preserva la integridad del contenido.",
      img: "https://picsum.photos/seed/boquilla/200/150"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-blue-600 rounded-sm transform rotate-45"></div>
            LOS ACABADOS Y LOS<br/>COMPLEMENTOS
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Un pequeño detalle, una gran<br/>diferencia: elige tu acabado
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={item.img} alt={item.title} className="max-h-full object-contain drop-shadow-md" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
              <a href="#" className="text-packstyle-green text-xs flex items-center gap-1 hover:underline mt-auto">
                MÁS INFORMACIÓN <PlusCircle size={12} />
              </a>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.slice(4).map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="h-40 flex items-center justify-center mb-6 w-full bg-gray-200 rounded-lg overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
              <a href="#" className="text-packstyle-green text-xs flex items-center gap-1 hover:underline mt-auto">
                MÁS INFORMACIÓN <PlusCircle size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
