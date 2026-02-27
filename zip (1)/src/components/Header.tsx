import { ShoppingCart, User, Search, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header({ onOpenConfigurator }: { onOpenConfigurator?: () => void }) {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="bg-gray-100 text-xs py-1 px-4 flex justify-end items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1"><Mail size={12} /> sales.es@packstyle.com</div>
        <div className="flex items-center gap-1"><Phone size={12} /> +39 04241660227</div>
        <div className="flex items-center gap-1 cursor-pointer">Español <ChevronDown size={12} /></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <svg viewBox="0 0 280 60" className="h-8 w-auto">
              <text 
                x="0" 
                y="45" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                fontSize="52" 
                fontWeight="900" 
                fill="#4b5563" 
                letterSpacing="-1.5" 
                style={{ paintOrder: 'stroke', stroke: '#4b5563', strokeWidth: '2px', strokeLinejoin: 'round' }}
              >
                FORPRINI
              </text>
            </svg>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="flex items-center gap-1 hover:text-packstyle-green">PRODUCTOS <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-packstyle-green">SERVICIOS <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-packstyle-green">MERCADOS <ChevronDown size={14} /></a>
          <a href="#materiales" className="flex items-center gap-1 hover:text-packstyle-green">MATERIALES <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-packstyle-green">ACERCA DE <ChevronDown size={14} /></a>
          <button onClick={onOpenConfigurator} className="bg-packstyle-green text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-packstyle-green-dark transition-colors">
             CONFIGURAR <ShoppingCart size={16} />
          </button>
        </nav>
        <div className="flex items-center gap-4 text-gray-600">
          <button className="hover:text-packstyle-green"><Search size={20} /></button>
          <button className="hover:text-packstyle-green"><User size={20} /></button>
        </div>
      </div>
    </header>
  );
}
