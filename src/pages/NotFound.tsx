import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página No Encontrada</title>
      </Helmet>
      <div className="not-found-page">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="not-found-content">
          <span className="not-found-emoji">🍓</span>
          <h1 className="not-found-title">404</h1>
          <h2>¡Oops! Esta receta no existe</h2>
          <p>Parece que la página que buscas se perdió entre las fresas. Pero no te preocupes, tenemos muchas más recetas esperándote.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-primary btn-lg"><Home size={18} /> Ir al inicio</Link>
            <Link to="/recetas" className="btn btn-glass btn-lg">Ver recetas</Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
