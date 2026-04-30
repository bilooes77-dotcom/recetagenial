import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Search } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } })
};

const Blog = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(articles.map(a => a.category))];
  const featuredArticle = articles.find(a => a.featured && a.trending) || articles[0];
  const trendingArticles = articles.filter(a => a && a.trending && a.id !== featuredArticle?.id).slice(0, 2);

  const filtered = articles.filter(a => {
    if (!a || !featuredArticle || a.id === featuredArticle.id) return false;
    const matchCategory = activeCategory === 'Todos' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog de Fresas con Crema - Artículos, Tips y Guías</title>
        <meta name="description" content="Artículos expertos sobre fresas con crema: guías, tips, tendencias de Pinterest y más. Todo para convertirte en experto de postres." />
      </Helmet>

      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <motion.div className="blog-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="hero-badge"><BookOpen size={16} /> Blog & Artículos</span>
            <h1>Aprende Todo Sobre<br /><span className="hero-title-accent">Fresas con Crema</span></h1>
            <p className="blog-hero-subtitle">Tips, guías, tendencias y todo el conocimiento para dominar el arte de los postres con fresas.</p>

            {/* Search */}
            <div className="blog-search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container blog-layout">
        {/* Featured Article */}
        {!search && activeCategory === 'Todos' && (
          <motion.section className="blog-featured-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="blog-section-title"><TrendingUp size={22} /> Artículo Destacado</h2>
            {featuredArticle && <ArticleCard article={featuredArticle} variant="featured" />}
          </motion.section>
        )}

        {/* Trending Row */}
        {!search && activeCategory === 'Todos' && trendingArticles.length > 0 && (
          <motion.section className="blog-trending-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h2 className="blog-section-title">🔥 En Tendencia</h2>
            <div className="blog-trending-row">
              {trendingArticles.map(a => (
                <ArticleCard key={a.id} article={a} variant="horizontal" />
              ))}
            </div>
          </motion.section>
        )}

        {/* Category Pills */}
        <motion.div className="blog-categories" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-pill ${activeCategory === cat ? 'category-pill-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <section className="blog-articles-section">
          <h2 className="blog-section-title">
            {activeCategory === 'Todos' ? '📝 Todos los Artículos' : `📂 ${activeCategory}`}
            <span className="blog-count">{filtered.length} artículos</span>
          </h2>

          {filtered.length > 0 ? (
            <div className="articles-grid">
              {filtered.map((a, i) => (
                <motion.div key={a.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                  <ArticleCard article={a} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No se encontraron artículos. Intenta con otra búsqueda.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Blog;
