import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Fresas con Crema Recetas</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '2rem' }}>Política de Privacidad</h1>
        <div className="article-body legal-content">
          <p>Última actualización: 30 de abril de 2026</p>
          
          <h2>1. Información que recopilamos</h2>
          <p>Recopilamos información que usted nos proporciona directamente, como cuando se suscribe a nuestro boletín o nos envía un mensaje de contacto. Esto puede incluir su nombre y dirección de correo electrónico.</p>
          
          <h2>2. Uso de Cookies</h2>
          <p>Utilizamos cookies para mejorar su experiencia en nuestro sitio, analizar el tráfico y personalizar el contenido. También permitimos que terceros, como Google AdSense, utilicen cookies para mostrar anuncios basados en sus visitas anteriores.</p>
          
          <h2>3. Google AdSense</h2>
          <p>Utilizamos Google AdSense para mostrar anuncios. Google utiliza cookies de DART para mostrar anuncios a los usuarios basados en su visita a nuestro sitio y otros sitios en Internet. Usted puede optar por no participar en el uso de la cookie de DART visitando la política de privacidad de la red de anuncios y contenido de Google.</p>
          
          <h2>4. Sus Derechos</h2>
          <p>Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para hacerlo, póngase en contacto con nosotros a través de nuestro formulario de contacto.</p>
          
          <h2>5. Cambios en esta política</h2>
          <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le recomendamos que revise esta página periódicamente.</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
