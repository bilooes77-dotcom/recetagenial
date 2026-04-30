import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Heart fill="#E63946" size={28} />
          <span>Fresas con Crema</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/recetas">Recetas</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/sobre-nosotros">Nosotros</Link>
        </nav>
        <div className="nav-actions" style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-icon" aria-label="Buscar"><Search size={20} /></button>
          <button className="btn-icon mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setMobileOpen(false)}>Inicio</Link>
          <Link to="/recetas" onClick={() => setMobileOpen(false)}>Recetas</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/sobre-nosotros" onClick={() => setMobileOpen(false)}>Nosotros</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
