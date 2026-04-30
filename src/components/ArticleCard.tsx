import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Article } from '../data/articles';

const ArticleCard = ({ article, variant = 'default' }: { article: Article; variant?: 'default' | 'featured' | 'horizontal' }) => {
  if (!article) return null;

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="article-card-featured"
      >
        <div className="article-card-featured-img">
          <img src={article.image} alt={article.title} loading="lazy" />
          <div className="article-card-featured-overlay" />
          <div className="article-card-featured-content">
            <span className="article-badge-white">{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <div className="article-card-featured-footer">
              <span className="article-meta-light"><Clock size={14} /> {article.readTime}</span>
              <Link to={`/blog/${article.slug}`} className="btn btn-white">
                Leer artículo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="article-card-h"
      >
        <div className="article-card-h-img">
          <img src={article.image} alt={article.title} loading="lazy" />
          <span className="article-category-badge">{article.category}</span>
        </div>
        <div className="article-card-h-body">
          <div className="article-card-meta">
            <span><Clock size={13} /> {article.readTime}</span>
            <span>{article.datePublished}</span>
          </div>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <Link to={`/blog/${article.slug}`} className="article-read-more">
            Leer más <ArrowRight size={16} />
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="article-card"
    >
      <div className="article-card-image">
        <img src={article.image} alt={article.title} loading="lazy" />
        <span className="article-category-badge">{article.category}</span>
        <button className="article-save-btn" aria-label="Guardar">
          <Bookmark size={16} />
        </button>
      </div>
      <div className="article-card-body">
        <div className="article-card-meta">
          <span><Clock size={13} /> {article.readTime} lectura</span>
          <span>{article.datePublished}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link to={`/blog/${article.slug}`} className="article-read-more">
          Leer artículo <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
