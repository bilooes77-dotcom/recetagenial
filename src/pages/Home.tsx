import { Helmet } from 'react-helmet-async';
import { recipes } from '../data/recipes';
import { articles } from '../data/articles';
import RecipeCard from '../components/RecipeCard';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles, TrendingUp, BookOpen, Star, Clock, Users, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } })
};

const Home = () => {
  const featured = recipes.filter(r => r.featured).slice(0, 4);
  const trending = recipes.filter(r => r.trending).slice(0, 4);
  const latestArticles = [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).slice(0, 3);
  const categories = [...new Set(recipes.map(r => r.category))];

  return (
    <>
      <Helmet>
        <title>Fresas con Crema Recetas - Postres Fáciles y Virales | El Blog #1</title>
        <meta name="description" content="Descubre las mejores recetas de fresas con crema: clásicas, saludables, estilo mexicano y más. El blog viral de postres #1 para Pinterest." />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text"
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles size={16} /> Lo más viral de Pinterest 2026
            </motion.span>

            <h1>
              <span className="hero-title-accent">Fresas con Crema</span>
              <br />Recetas
            </h1>

            <p className="hero-subtitle">
              Postres fáciles, dulces y virales. <strong>10+ recetas</strong> paso a paso para enamorar a todos — desde la clásica hasta la versión Nutella.
            </p>

            <div className="hero-cta-row">
              <Link to="/recetas" className="btn btn-primary btn-lg">
                Descubre recetas <ChevronRight size={20} />
              </Link>
              <Link to="/blog" className="btn btn-glass btn-lg">
                <BookOpen size={18} /> Leer blog
              </Link>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="hero-avatars">
                <div className="hero-avatar" style={{ background: '#FFB7C5' }}>🍓</div>
                <div className="hero-avatar" style={{ background: '#E63946', color: 'white' }}>❤️</div>
                <div className="hero-avatar" style={{ background: '#457B9D', color: 'white' }}>⭐</div>
              </div>
              <p>Amado por <strong>10,000+</strong> amantes de los postres</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero-image-col"
          >
            <div className="hero-image-container">
              <img src={heroImg} alt="Fresas con Crema - El mejor postre viral" />
            </div>
            {/* Floating Cards */}
            <motion.div
              className="hero-float-card hero-float-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <Star size={16} fill="#FFD700" color="#FFD700" /> 4.9 Rating
            </motion.div>
            <motion.div
              className="hero-float-card hero-float-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Clock size={16} /> 15 min prep
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <span className="stat-icon">🍓</span>
              <span className="stat-number">10+</span>
              <span className="stat-label">Recetas Únicas</span>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <span className="stat-icon">📝</span>
              <span className="stat-number">10+</span>
              <span className="stat-label">Artículos SEO</span>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <span className="stat-icon">📌</span>
              <span className="stat-number">50K+</span>
              <span className="stat-label">Pins Guardados</span>
            </motion.div>
            <motion.div className="stat-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <span className="stat-icon">⏱️</span>
              <span className="stat-number">15 min</span>
              <span className="stat-label">Tiempo Promedio</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED RECIPES ===== */}
      <section className="section-featured">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div>
              <span className="section-label"><Star size={14} /> Selección Premium</span>
              <h2>Recetas Destacadas</h2>
            </div>
            <Link to="/recetas" className="section-link">Ver todas <ArrowRight size={18} /></Link>
          </motion.div>
          <div className="recipe-grid">
            {featured.map((r, i) => (
              <motion.div key={r.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <RecipeCard recipe={r} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="section-categories">
        <div className="container">
          <motion.div className="section-header-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <span className="section-label"><ChefHat size={14} /> Explora por categoría</span>
            <h2>Encuentra tu Receta Ideal</h2>
          </motion.div>
          <motion.div className="categories-row" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            {categories.map((cat, i) => (
              <Link to="/recetas" key={i} className="category-pill">
                {cat}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TRENDING ===== */}
      <section className="section-trending">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div>
              <span className="section-label"><TrendingUp size={14} /> En tendencia ahora</span>
              <h2>Lo Más Viral</h2>
            </div>
            <Link to="/recetas" className="section-link">Ver todas <ArrowRight size={18} /></Link>
          </motion.div>
          <div className="recipe-grid">
            {trending.map((r, i) => (
              <motion.div key={r.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <RecipeCard recipe={r} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-how">
        <div className="container">
          <motion.div className="section-header-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <span className="section-label">✨ Así de fácil</span>
            <h2>3 Pasos para el Postre Perfecto</h2>
          </motion.div>
          <div className="how-grid">
            <motion.div className="how-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <div className="how-number">1</div>
              <h3>Elige tu Receta</h3>
              <p>Escoge entre 10+ variaciones: clásica, saludable, gourmet o viral.</p>
            </motion.div>
            <motion.div className="how-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div className="how-number">2</div>
              <h3>Sigue los Pasos</h3>
              <p>Instrucciones detalladas con tips profesionales incluidos.</p>
            </motion.div>
            <motion.div className="how-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <div className="how-number">3</div>
              <h3>Comparte & Disfruta</h3>
              <p>Toma la foto perfecta, guárdala en Pinterest y saborea.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES ===== */}
      <section className="section-articles">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div>
              <span className="section-label"><BookOpen size={14} /> Del blog</span>
              <h2>Últimos Artículos</h2>
            </div>
            <Link to="/blog" className="section-link">Ver blog <ArrowRight size={18} /></Link>
          </motion.div>
          <div className="articles-grid">
            {latestArticles.map((a, i) => (
              <motion.div key={a.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <ArticleCard article={a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-testimonials">
        <div className="container">
          <motion.div className="section-header-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <span className="section-label"><Star size={14} /> Lo que dicen nuestros lectores</span>
            <h2>Testimonios Reales</h2>
          </motion.div>
          <div className="testimonials-grid">
            <motion.div className="testimonial-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <div className="testimonial-stars">{'⭐'.repeat(5)}</div>
              <p>"Las mejores recetas de fresas con crema que he encontrado en internet. ¡Mi familia las ama!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#FFB7C5' }}>MG</div>
                <div>
                  <strong>María García</strong>
                  <span>Ciudad de México</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div className="testimonial-stars">{'⭐'.repeat(5)}</div>
              <p>"Probé la versión con Nutella y fue un éxito total en la fiesta de cumpleaños. ¡Todos pidieron la receta!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#E63946', color: 'white' }}>AL</div>
                <div>
                  <strong>Ana López</strong>
                  <span>Guadalajara</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <div className="testimonial-stars">{'⭐'.repeat(5)}</div>
              <p>"La versión saludable sin azúcar es perfecta para mi dieta. ¡No sacrifico sabor!"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#457B9D', color: 'white' }}>CR</div>
                <div>
                  <strong>Carlos Rodríguez</strong>
                  <span>Monterrey</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PINTEREST CTA ===== */}
      <section className="section-pinterest-cta">
        <div className="container">
          <motion.div className="pinterest-cta-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="pinterest-cta-content">
              <h2>📌 Síguenos en Pinterest</h2>
              <p>Guarda todas nuestras recetas y obtén inspiración diaria para tus postres.</p>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn btn-white btn-lg">
                <Users size={18} /> Seguir en Pinterest
              </a>
            </div>
            <div className="pinterest-cta-pins">
              {recipes.slice(0, 3).map(r => (
                <div key={r.id} className="mini-pin">
                  <img src={r.image} alt={r.title} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section id="newsletter" className="section-newsletter">
        <div className="container">
          <motion.div className="newsletter-card-pro" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <div className="newsletter-icon">📧</div>
            <h2>¡No te pierdas ninguna receta!</h2>
            <p>Suscríbete y recibe las recetas más virales cada semana directamente en tu correo.</p>
            <form onSubmit={e => e.preventDefault()} className="newsletter-form-pro">
              <input type="email" placeholder="Tu correo electrónico" className="newsletter-input-pro" />
              <button type="submit" className="btn btn-primary btn-lg">Suscribirme</button>
            </form>
            <span className="newsletter-disclaimer">Sin spam. Cancela cuando quieras.</span>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
