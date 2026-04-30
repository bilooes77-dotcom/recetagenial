import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Award, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Fresas con Crema Recetas</title>
        <meta name="description" content="Conoce la historia detrás del blog #1 de fresas con crema. Nuestra misión es compartir recetas fáciles, virales y deliciosas." />
      </Helmet>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>Sobre <span className="hero-title-accent">Nosotros</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Somos un equipo apasionado por los postres, dedicado a crear las mejores recetas de fresas con crema para que todos puedan disfrutar en casa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="how-grid">
            <motion.div className="how-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
              <div className="how-number"><Heart size={24} /></div>
              <h3>Pasión por los Postres</h3>
              <p>Cada receta es probada y perfeccionada con amor para garantizar resultados deliciosos en tu cocina.</p>
            </motion.div>
            <motion.div className="how-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="how-number"><Award size={24} /></div>
              <h3>Calidad Garantizada</h3>
              <p>Solo publicamos recetas que pasan nuestra prueba de sabor, textura y presentación visual.</p>
            </motion.div>
            <motion.div className="how-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="how-number"><Users size={24} /></div>
              <h3>Comunidad Activa</h3>
              <p>Más de 10,000 amantes de los postres nos siguen en Pinterest y prueban nuestras recetas cada semana.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2rem' }}>📖 Nuestra Historia</h2>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Todo comenzó con una simple pregunta: <strong>¿por qué no hay un sitio dedicado exclusivamente a las fresas con crema?</strong> Siendo uno de los postres más queridos en Latinoamérica, nos pareció increíble que no existiera un recurso completo.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Así nació <strong>Fresas con Crema Recetas</strong> — un blog donde cada variación, desde la clásica hasta las innovaciones más virales, tiene su lugar. Probamos cada receta en nuestra cocina, tomamos fotos con amor y escribimos instrucciones que cualquiera puede seguir.
              </p>
              <p>
                Hoy somos el blog #1 de fresas con crema en Pinterest, y cada día trabajamos para traerte nuevas recetas, artículos y consejos que harán tus postres inolvidables.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¿Listo para empezar a cocinar?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Explora nuestra colección de recetas y encuentra tu próximo postre favorito.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/recetas" className="btn btn-primary btn-lg">Ver Recetas</Link>
              <Link to="/blog" className="btn btn-glass btn-lg"><BookOpen size={18} /> Leer Blog</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
