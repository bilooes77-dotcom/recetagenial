import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { articles } from '../data/articles';
import { TrendingUp, BookOpen, Clock } from 'lucide-react';
import AdSlot from './AdSlot';

const Sidebar = () => {
  const popular = recipes.filter(r => r.trending).slice(0, 4);
  const latestArticles = [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).slice(0, 3);

  return (
    <aside className="sidebar">
      {/* Popular Recipes */}
      <div className="sidebar-widget">
        <h3><TrendingUp size={20} /> Recetas Populares</h3>
        <div className="sidebar-list">
          {popular.map(r => (
            <Link to={`/receta/${r.slug}`} key={r.id} className="sidebar-item">
              <img src={r.image} alt={r.title} />
              <div>
                <span className="sidebar-item-title">{r.title}</span>
                <span className="sidebar-item-meta"><Clock size={12} /> {r.prepTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AdSlot type="vertical" id="sidebar" />

      {/* Latest Articles */}
      <div className="sidebar-widget">
        <h3><BookOpen size={20} /> Últimos Artículos</h3>
        <div className="sidebar-list">
          {latestArticles.map(a => (
            <Link to={`/blog/${a.slug}`} key={a.id} className="sidebar-item">
              <img src={a.image} alt={a.title} />
              <div>
                <span className="sidebar-item-title">{a.title}</span>
                <span className="sidebar-item-meta">{a.readTime} lectura</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pinterest CTA */}
      <div className="sidebar-widget sidebar-cta">
        <h3>📌 Síguenos en Pinterest</h3>
        <p>Guarda todas nuestras recetas virales y nunca te pierdas un nuevo postre.</p>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
          Seguir en Pinterest
        </a>
      </div>

      {/* Newsletter Widget */}
      <div className="sidebar-widget sidebar-newsletter">
        <h3>📧 Newsletter Semanal</h3>
        <p>Recibe las recetas más virales cada semana.</p>
        <form onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Tu email" className="sidebar-input" />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Suscribirme</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
