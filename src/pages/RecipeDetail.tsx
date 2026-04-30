import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { recipes } from '../data/recipes';
import { Clock, Users, ChevronRight, CircleCheck, ChefHat, Printer } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import Sidebar from '../components/Sidebar';
import AdSlot from '../components/AdSlot';

const PinSvg = ({ color = 'white', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h1>Receta no encontrada</h1>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Volver</Link>
      </div>
    );
  }

  const related = recipes.filter(r => r.id !== recipe.id && r.category !== recipe.category).slice(0, 3);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(recipe.image)}&description=${encodeURIComponent(recipe.pinterestDescription)}`;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipe.image,
    prepTime: `PT${recipe.prepTime.replace(' min', 'M')}`,
    totalTime: `PT${recipe.totalTime.replace(' min', 'M')}`,
    recipeYield: recipe.servings,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step
    })),
    recipeCategory: "Postre",
    recipeCuisine: "Mexicana",
    keywords: recipe.keywords.join(', '),
    datePublished: recipe.datePublished
  };

  return (
    <>
      <Helmet>
        <title>{recipe.metaTitle}</title>
        <meta name="description" content={recipe.metaDescription} />
        <meta property="og:title" content={recipe.metaTitle} />
        <meta property="og:image" content={recipe.image} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={recipe.keywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container" style={{ padding: '3rem 0 6rem' }}>
        <nav className="breadcrumb" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
          <Link to="/">Inicio</Link><ChevronRight size={14} />
          <Link to="/recetas">Recetas</Link><ChevronRight size={14} />
          <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{recipe.title}</span>
        </nav>

        <div className="article-layout">
          <article className="article-content">
            {/* Image */}
            <div style={{ aspectRatio: '2/3', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow)', position: 'relative', maxHeight: '500px' }}>
              <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <a href={pinUrl} target="_blank" rel="noreferrer" className="pin-button"><PinSvg /> Pin it</a>
            </div>

            <h1 className="recipe-title" style={{ marginTop: '2rem' }}>{recipe.title}</h1>

            <AdSlot type="horizontal" id="recipe-top" />

            <div className="recipe-meta">
              <div style={{ textAlign: 'center' }}>
                <Clock size={20} style={{ color: 'var(--primary)' }} />
                <div className="meta-label">Tiempo</div>
                <div style={{ fontWeight: '700' }}>{recipe.totalTime}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Users size={20} style={{ color: 'var(--primary)' }} />
                <div className="meta-label">Porciones</div>
                <div style={{ fontWeight: '700' }}>{recipe.servings}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <ChefHat size={20} style={{ color: 'var(--primary)' }} />
                <div className="meta-label">Dificultad</div>
                <div style={{ fontWeight: '700' }}>{recipe.difficulty}</div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="recipe-actions-bar">
              <button onClick={() => window.print()} className="btn btn-outline btn-sm">
                <Printer size={18} /> Imprimir Receta
              </button>
              <div className="share-group">
                <a href={pinUrl} target="_blank" rel="noreferrer" className="share-icon pin" title="Pin it">
                  <PinSvg color="white" size={18} />
                </a>
                <a href={`https://wa.me/?text=${encodeURIComponent(recipe.title + " " + currentUrl)}`} target="_blank" rel="noreferrer" className="share-icon wa" title="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            <AdSlot type="horizontal" id="recipe-middle" />

            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>{recipe.description}</p>

            {/* Ingredients */}
            <div className="glass-card" style={{ marginBottom: '2.5rem', backgroundColor: 'var(--accent-soft)' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>🍓 Ingredientes</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <CircleCheck size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>📝 Instrucciones</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {recipe.instructions.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.2rem' }}>
                    <div className="step-number">{i + 1}</div>
                    <p style={{ paddingTop: '0.4rem', fontSize: '1.05rem', lineHeight: '1.6' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="tips-box" style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>💡 Consejos Pro</h3>
              <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                {recipe.tips.map((tip, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{tip}</li>)}
              </ul>
            </div>

            {/* Pinterest CTA */}
            <div className="pinterest-cta-banner">
              <p>¿Te gustó esta receta?</p>
              <a href={pinUrl} target="_blank" rel="noreferrer" className="btn btn-white">
                <PinSvg color="#E60023" size={18} /> Guarda en Pinterest
              </a>
            </div>

            {/* Tags */}
            <div className="article-tags" style={{ marginTop: '2rem' }}>
              {recipe.hashtags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
          </article>

          <Sidebar />
        </div>

        {/* Related */}
        <section style={{ marginTop: '5rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>También te puede interesar</h2>
          <div className="recipe-grid">{related.map(r => <RecipeCard key={r.id} recipe={r} />)}</div>
        </section>
      </div>
    </>
  );
};

export default RecipeDetail;
