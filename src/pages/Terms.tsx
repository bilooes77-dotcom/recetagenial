import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - Fresas con Crema Recetas</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Términos y Condiciones</h1>
        <div className="article-body legal-content">
          <p>Al acceder a este sitio web, usted acepta cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables.</p>
          
          <h2>1. Licencia de Uso</h2>
          <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web Fresas con Crema Recetas para visualización transitoria personal y no comercial solamente.</p>
          
          <h2>2. Descargo de Responsabilidad</h2>
          <p>Los materiales en el sitio web de Fresas con Crema Recetas se proporcionan "tal cual". No ofrecemos garantías, expresas o implícitas, y por la presente renunciamos y negamos todas las demás garantías.</p>
          
          <h2>3. Limitaciones</h2>
          <p>En ningún caso Fresas con Crema Recetas o sus proveedores serán responsables de cualquier daño surgido del uso o la imposibilidad de usar los materiales en nuestro sitio.</p>
          
          <h2>4. Enlaces</h2>
          <p>Fresas con Crema Recetas no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado.</p>
        </div>
      </div>
    </>
  );
};

export default Terms;
