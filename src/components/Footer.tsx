import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-packstyle-green text-white pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <h3 className="text-xl font-bold mb-6">Suscríbete al boletín</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Correo*</label>
              <input type="email" className="w-full p-2 rounded text-gray-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Nombre *</label>
                <input type="text" className="w-full p-2 rounded text-gray-900" />
              </div>
              <div>
                <label className="block text-sm mb-1">Apellido</label>
                <input type="text" className="w-full p-2 rounded text-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Nombre de la empresa</label>
                <input type="text" className="w-full p-2 rounded text-gray-900" />
              </div>
              <div>
                <label className="block text-sm mb-1">ámbito de actividad</label>
                <select className="w-full p-2 rounded text-gray-900">
                  <option>Selecciona</option>
                </select>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm">
                He leído la <a href="#" className="underline">Política de Privacidad</a> y consiento el tratamiento de mis datos.*
              </label>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-white text-blue-600 p-2 rounded text-xs flex items-center gap-2 w-48 h-12">
                <span className="font-bold">protección de reCAPTCHA</span>
                <span className="text-[10px]">Privacidad - Términos</span>
                <div className="ml-auto w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">↻</div>
              </div>
              <button type="submit" className="bg-[#1b8044] px-8 py-3 rounded font-bold hover:bg-[#156636] transition-colors">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-end items-center gap-4 mb-8">
          <span className="text-sm font-bold">SÍGANOS</span>
          <a href="#" className="w-8 h-8 bg-[#1b8044] rounded flex items-center justify-center hover:bg-white hover:text-packstyle-green transition-colors"><Facebook size={18} /></a>
          <a href="#" className="w-8 h-8 bg-[#1b8044] rounded flex items-center justify-center hover:bg-white hover:text-packstyle-green transition-colors"><Instagram size={18} /></a>
          <a href="#" className="w-8 h-8 bg-[#1b8044] rounded flex items-center justify-center hover:bg-white hover:text-packstyle-green transition-colors"><Linkedin size={18} /></a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mb-12">
          <div>
            <h4 className="font-bold mb-4">PRODUCTOS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">BOLSAS DOYPACK</a></li>
              <li><a href="#" className="hover:underline">BOLSAS PLANAS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">SERVICIOS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">CREACIÓN GRÁFICA: STYLE MY PACK</a></li>
              <li><a href="#" className="hover:underline">EDICIÓN GRÁFICA: STYLE MY PACK</a></li>
              <li><a href="#" className="hover:underline">MUESTRARIO: PETFOOD</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">MERCADOS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">ALIMENTACIÓN</a></li>
              <li><a href="#" className="hover:underline">CAFÉ</a></li>
              <li><a href="#" className="hover:underline">CÁÑAMO</a></li>
              <li><a href="#" className="hover:underline">COSMESI</a></li>
              <li><a href="#" className="hover:underline">SUPLEMENTOS</a></li>
              <li><a href="#" className="hover:underline">LÍQUIDOS</a></li>
              <li><a href="#" className="hover:underline">ALIMENTOS PARA MASCOTAS</a></li>
              <li><a href="#" className="hover:underline">INFUSIONES Y ESPECIAS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">MATERIALES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">ALUMINIO</a></li>
              <li><a href="#" className="hover:underline">PAPEL DE ALUMINIO</a></li>
              <li><a href="#" className="hover:underline">PAPEL RECICLABLE</a></li>
              <li><a href="#" className="hover:underline">PELÍCULA RECICLABLE METALIZADA</a></li>
              <li><a href="#" className="hover:underline">PELÍCULA RECICLABLE TRANSPARENTE</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">ACERCA DE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">PACKSTYLE</a></li>
              <li><a href="#" className="hover:underline">PREPARACIÓN DE ARCHIVOS GRÁFICOS</a></li>
              <li><a href="#" className="hover:underline">CÓMO FUNCIONA</a></li>
              <li><a href="#" className="hover:underline">SUSTENTABILIDAD</a></li>
              <li><a href="#" className="hover:underline">BLOG</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">CONTACTA CON NOSOTRAS</a></li>
              <li><a href="#" className="hover:underline">PRESUPUESTO DE BOBINAS</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1b8044] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">POLÍTICA DE PRIVACIDAD</a>
            <a href="#" className="hover:underline">COOKIE POLICY</a>
            <a href="#" className="hover:underline">INFORMACIÓN LEGAL</a>
            <a href="#" className="hover:underline">CONDICIONES DE USO</a>
            <a href="#" className="hover:underline">CONDICIONES GENERALES DE VENTA</a>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded">
            <div className="w-8 h-5 bg-blue-800 rounded text-[8px] text-white flex items-center justify-center font-bold">PayPal</div>
            <div className="w-8 h-5 bg-blue-600 rounded text-[8px] text-white flex items-center justify-center font-bold">VISA</div>
            <div className="w-8 h-5 bg-orange-500 rounded text-[8px] text-white flex items-center justify-center font-bold">MC</div>
            <div className="w-8 h-5 bg-blue-400 rounded text-[8px] text-white flex items-center justify-center font-bold">Maestro</div>
            <div className="w-8 h-5 bg-gray-300 rounded text-[8px] text-gray-800 flex items-center justify-center font-bold">Bank</div>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-packstyle-green rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-packstyle-green-dark transition-colors z-50 border-4 border-white">
        <MessageCircle size={24} />
      </button>
    </footer>
  );
}
