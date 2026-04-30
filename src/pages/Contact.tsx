import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Fresas con Crema Recetas</title>
        <meta name="description" content="¿Tienes alguna duda o sugerencia? Contáctanos. Estamos aquí para ayudarte con tus recetas de fresas con crema." />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
            <h1>Contacto</h1>
            <p className="blog-hero-subtitle">¿Dudas, sugerencias o colaboraciones? ¡Escríbenos!</p>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 0 6rem' }}>
        <div className="article-layout">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass-card">
            <h2 style={{ marginBottom: '1.5rem' }}>Envíanos un mensaje</h2>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nombre</label>
                  <input type="text" className="sidebar-input" placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
                  <input type="email" className="sidebar-input" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Asunto</label>
                <input type="text" className="sidebar-input" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Mensaje</label>
                <textarea className="sidebar-input" rows={5} placeholder="Escribe tu mensaje aquí..." style={{ resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                <Send size={18} /> Enviar Mensaje
              </button>
            </form>
          </motion.div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ backgroundColor: 'var(--accent-soft)' }}>
              <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} color="var(--primary)" /> Info de Contacto
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Mail size={18} color="var(--primary)" />
                  <div>
                    <strong style={{ display: 'block' }}>Email</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>hola@fresasconcrema.com</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <MapPin size={18} color="var(--primary)" />
                  <div>
                    <strong style={{ display: 'block' }}>Ubicación</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ciudad de México, México</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-widget sidebar-cta">
              <h3>📌 Pinterest</h3>
              <p>¿Eres creador? Colaboremos en tableros grupales.</p>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn btn-white btn-sm">Ver Perfil</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Contact;
