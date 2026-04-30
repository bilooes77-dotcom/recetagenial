import { Helmet } from 'react-helmet-async';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } })
};

const Recipes = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(recipes.map(r => r.category))];

  const filtered = recipes.filter(r => {
    const matchCat = activeCategory === 'Todas' || r.category === activeCategory;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Recetas de Fresas con Crema - Catálogo Completo</title>
        <meta name="description" content="Explora nuestra colección de las mejores recetas de fresas con crema. Fáciles, rápidas y deliciosas." />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <motion.div className="blog-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>🍓 Todas las Recetas</h1>
            <p className="blog-hero-subtitle">Desde la clásica hasta innovaciones gourmet. Encuentra tu receta ideal.</p>
            <div className="blog-search-bar">
              <Search size={20} />
              <input type="text" placeholder="Buscar recetas..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ padding: '2rem 0 5rem' }}>
        <motion.div className="blog-categories" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {categories.map(cat => (
            <button key={cat} className={`category-pill ${activeCategory === cat ? 'category-pill-active' : ''}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </motion.div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{filtered.length} recetas encontradas</p>

        {filtered.length > 0 ? (
          <div className="recipe-grid">
            {filtered.map((r, i) => (
              <motion.div key={r.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <RecipeCard recipe={r} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="blog-empty"><p>No se encontraron recetas. Intenta con otra búsqueda.</p></div>
        )}
      </div>
    </>
  );
};

export default Recipes;
