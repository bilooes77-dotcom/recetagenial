import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import { ChevronRight, Clock, Calendar, Share2, Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';
import { motion } from 'framer-motion';

const PinSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = articles.findIndex(a => a.slug === slug);
  const article = articleIndex >= 0 ? articles[articleIndex] : null;

  if (!article) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h1>Artículo no encontrado</h1>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Ver todos</Link>
      </div>
    );
  }

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle = articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;
  const related = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(article.image)}&description=${encodeURIComponent(article.pinterestDescription)}`;

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={article.keywords.join(', ')} />
      </Helmet>

      {/* Article Hero Banner */}
      <section className="article-hero-banner">
        <div className="article-hero-bg" style={{ backgroundImage: `url(${article.image})` }} />
        <div className="article-hero-overlay" />
        <div className="container article-hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="breadcrumb breadcrumb-light">
              <Link to="/">Inicio</Link><ChevronRight size={14} />
              <Link to="/blog">Blog</Link><ChevronRight size={14} />
              <span>{article.category}</span>
            </nav>
            <span className="article-badge-white">{article.category}</span>
            <h1 className="article-hero-title">{article.title}</h1>
            <div className="article-hero-meta">
              <span><Calendar size={15} /> {article.datePublished}</span>
              <span><Clock size={15} /> {article.readTime} lectura</span>
              <span><Bookmark size={15} /> {article.keywords.length} keywords</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 0 6rem' }}>
        <div className="article-layout">
          <article className="article-content">
            {/* Progress-style reading indicator */}
            <div className="article-reading-label">
              <span className="reading-dot" />
              {article.readTime} de lectura
            </div>

            <AdSlot type="horizontal" id="article-top" />

            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

            <AdSlot type="horizontal" id="article-bottom" />

            {/* Share Bar */}
            <div className="share-bar-pro">
              <div className="share-bar-left">
                <Share2 size={18} />
                <span>Comparte:</span>
              </div>
              <div className="share-buttons">
                <a href={pinUrl} target="_blank" rel="noreferrer" className="share-btn pin-share">
                  <PinSvg /> Pinterest
                </a>
                <button className="share-btn copy-share" onClick={() => navigator.clipboard.writeText(currentUrl)}>
                  📋 Copiar link
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="article-tags-section">
              <span className="tags-label">Tags:</span>
              <div className="article-tags">
                {article.hashtags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Prev/Next Navigation */}
            <div className="article-nav-row">
              {prevArticle ? (
                <Link to={`/blog/${prevArticle.slug}`} className="article-nav-card article-nav-prev">
                  <span className="article-nav-label"><ArrowLeft size={14} /> Anterior</span>
                  <span className="article-nav-title">{prevArticle.title}</span>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link to={`/blog/${nextArticle.slug}`} className="article-nav-card article-nav-next">
                  <span className="article-nav-label">Siguiente <ArrowRight size={14} /></span>
                  <span className="article-nav-title">{nextArticle.title}</span>
                </Link>
              ) : <div />}
            </div>
          </article>

          <Sidebar />
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>📖 Artículos Relacionados</h2>
            <div className="articles-grid">
              {related.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ArticleDetail;
