import { useState } from 'react';
import { X, User, Building2, Mail, Phone, Minus, Plus } from 'lucide-react';

export default function ConfiguratorModal({ onClose }: { onClose: () => void }) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formato, setFormato] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);
  const [acabado, setAcabado] = useState<string | null>(null);
  const [zipResellable, setZipResellable] = useState<string | null>(null);
  const [orificio, setOrificio] = useState<string | null>(null);
  const [blancoFondo, setBlancoFondo] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState(500);
  const [userData, setUserData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: ''
  });

  const products = [
    { name: "Bolsas doypack", image: "https://picsum.photos/seed/doypack/300/300" },
    { name: "Bolsas planas", image: "https://picsum.photos/seed/flatbag/300/300" },
    { name: "Tubos cosméticos", image: "https://picsum.photos/seed/tube/300/300" },
    { name: "Frascos", image: "https://picsum.photos/seed/jar/300/300" },
    { name: "Goteros", image: "https://picsum.photos/seed/dropper/300/300" },
    { name: "Pack completo", image: "https://picsum.photos/seed/fullpack/300/300" },
    { name: "Bolsas compostables", image: "https://picsum.photos/seed/eco/300/300" },
    { name: "Bolsas metalizadas", image: "https://picsum.photos/seed/metal/300/300" },
    { name: "Bolsas transparentes", image: "https://picsum.photos/seed/clear/300/300" }
  ];

  const formatos = ["4.5x13 (cm)", "8x11 (cm)", "15x17 (cm)", "19x27 (cm)", "30x35 (cm)"];
  const materiales = ["Aluminio", "Papel de aluminio", "Papel reciclable", "Película Reciclable Metalizada", "Película Reciclable Transparente"];
  const acabados = ["Acabado soft touch", "Acabado mate", "Acabado satinado"];
  
  const zips = [
    { name: "Sin zip resellable", image: "https://picsum.photos/seed/nozip/150" },
    { name: "Zip in PP", image: "https://picsum.photos/seed/zippp/150" }
  ];
  const orificios = [
    { name: "Sin orificio", image: "https://picsum.photos/seed/nohole/150" },
    { name: "Orificio redondo", image: "https://picsum.photos/seed/roundhole/150" }
  ];
  const blancos = [
    { name: "Blanco cubriente", desc: "Los colores recubren el material", image: "https://picsum.photos/seed/whitefull/150" },
    { name: "Blanco selectivo", desc: "Cobertura de material en áreas seleccionadas", image: "https://picsum.photos/seed/whitesel/150" },
    { name: "Ningún blanco", desc: "Material sin cobertura", image: "https://picsum.photos/seed/nowhite/150" }
  ];

  const isStep4Complete = zipResellable && orificio && blancoFondo;
  const isFormValid = userData.nombre && userData.email && userData.telefono;

  const handleSubmit = () => {
    console.log({
      producto: selectedProduct,
      formato,
      material,
      acabado,
      complementos: {
        zip: zipResellable,
        orificio,
        blanco: blancoFondo
      },
      cantidad,
      cliente: userData
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50">
          <X size={24} />
        </button>
        
        <div className="p-8">
          {!selectedProduct ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Empiece por elegir el producto</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(p => (
                  <button 
                    key={p.name} 
                    onClick={() => setSelectedProduct(p.name)}
                    className="p-6 border-2 border-gray-100 rounded-xl hover:border-packstyle-green hover:bg-green-50 transition-all text-center font-bold text-gray-800 shadow-sm hover:shadow-md"
                  >
                    <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                    </div>
                    {p.name}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-12">
              <div className="flex justify-between items-center border-b pb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProduct}</h2>
                  <p className="text-gray-500 mt-1">Configurador paso a paso</p>
                </div>
                <button onClick={() => {
                  setSelectedProduct(null);
                  setFormato(null);
                  setMaterial(null);
                  setAcabado(null);
                  setZipResellable(null);
                  setOrificio(null);
                  setBlancoFondo(null);
                }} className="text-sm font-bold text-packstyle-green hover:underline bg-green-50 px-4 py-2 rounded-full">
                  Cambiar producto
                </button>
              </div>
              
              {/* Paso 1: Formato */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-2">1. Elige el formato</h3>
                <p className="text-sm text-gray-500 mb-6">Las dimensiones indicadas se refieren a las medidas exteriores de los lados del embalaje.</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {formatos.map(f => (
                    <button 
                      key={f}
                      onClick={() => {
                        setFormato(f);
                        setMaterial(null);
                        setAcabado(null);
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${formato === f ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                    >
                      <div className="w-full aspect-[3/4] bg-white border border-gray-200 rounded-lg mb-3 flex items-center justify-center p-2">
                         <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-[10px] text-gray-400 font-mono">
                           {f}
                         </div>
                      </div>
                      <span className="text-xs font-bold block">{f}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Material */}
              {formato && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold mb-6">2. Elige el material</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {materiales.map(m => (
                      <button 
                        key={m}
                        onClick={() => {
                          setMaterial(m);
                          setAcabado(null);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${material === m ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                      >
                        <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${m.replace(/\s+/g, '-')}/150`} alt={m} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-xs font-bold block">{m}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 3: Acabado */}
              {material && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold mb-6">3. Elige el acabado</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {acabados.map(a => (
                      <button 
                        key={a}
                        onClick={() => {
                          setAcabado(a);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${acabado === a ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                      >
                        <div className="w-full aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${a.replace(/\s+/g, '-')}/200`} alt={a} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-xs font-bold block">{a}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 4: Complementos */}
              {acabado && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                  <h3 className="text-xl font-bold mb-6">4. Elige los complementos</h3>
                  
                  {/* 4.1 ZIP */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">1. ZIP RESELLABLE</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {zips.map(z => (
                        <button 
                          key={z.name}
                          onClick={() => setZipResellable(z.name)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${zipResellable === z.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                        >
                          <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                            <img src={z.image} alt={z.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            {z.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                          </div>
                          <span className="text-xs font-bold block">{z.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4.2 ORIFICIO */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">2. ORIFICIO</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {orificios.map(o => (
                        <button 
                          key={o.name}
                          onClick={() => setOrificio(o.name)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${orificio === o.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                        >
                          <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                            <img src={o.image} alt={o.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            {o.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                          </div>
                          <span className="text-xs font-bold block">{o.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4.3 BLANCO */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">3. BLANCO DE FONDO</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {blancos.map(b => (
                        <button 
                          key={b.name}
                          onClick={() => setBlancoFondo(b.name)}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${blancoFondo === b.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                        >
                          <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                            <img src={b.image} alt={b.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <span className="text-xs font-bold block">{b.name}</span>
                          <span className="text-[10px] text-gray-400 block mt-1 leading-tight">{b.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 5: Cantidad */}
              {isStep4Complete && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                  <h3 className="text-xl font-bold mb-6">5. Elige la cantidad</h3>
                  
                  {/* Cantidad Selector */}
                  <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl w-fit">
                    <button 
                      onClick={() => setCantidad(Math.max(50, cantidad - 50))}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="text-center min-w-[80px]">
                      <span className="text-2xl font-bold block">{cantidad}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unidades</span>
                    </div>
                    <button 
                      onClick={() => setCantidad(cantidad + 50)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Paso 6: Datos de contacto */}
              {isStep4Complete && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-6">6. Datos de contacto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                          <User size={16} /> Nombre completo *
                        </label>
                        <input 
                          type="text" 
                          value={userData.nombre}
                          onChange={e => setUserData({...userData, nombre: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                          <Building2 size={16} /> Nombre de la empresa
                        </label>
                        <input 
                          type="text" 
                          value={userData.empresa}
                          onChange={e => setUserData({...userData, empresa: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all"
                          placeholder="Empresa S.A."
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                          <Mail size={16} /> Email *
                        </label>
                        <input 
                          type="email" 
                          value={userData.email}
                          onChange={e => setUserData({...userData, email: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all"
                          placeholder="email@ejemplo.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                          <Phone size={16} /> Teléfono *
                        </label>
                        <input 
                          type="tel" 
                          value={userData.telefono}
                          onChange={e => setUserData({...userData, telefono: e.target.value})}
                          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all"
                          placeholder="+34 000 000 000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit */}
              {isStep4Complete && (
                <div className="pt-8 animate-in fade-in duration-500">
                  <button 
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`w-full py-4 rounded-xl font-bold text-xl transition-all shadow-lg ${isFormValid ? 'bg-[#C4EB00] text-black hover:bg-[#A5C600] hover:shadow-xl' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Enviar cotización
                  </button>
                  {!isFormValid && <p className="text-center text-xs text-red-500 mt-2">Por favor, rellene los campos obligatorios (*)</p>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
