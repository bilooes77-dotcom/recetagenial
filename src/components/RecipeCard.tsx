import { Link } from 'react-router-dom';
import { Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Recipe } from '../data/recipes';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="recipe-card"
    >
      <div className="recipe-card-img-wrap">
        <img src={recipe.image} alt={recipe.title} loading="lazy" />
        <span className="card-badge">{recipe.category}</span>
        {recipe.trending && <span className="card-trending">🔥</span>}
      </div>
      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p className="recipe-card-desc">{recipe.description}</p>
        <div className="recipe-card-footer">
          <span className="recipe-card-time"><Clock size={14} /> {recipe.prepTime}</span>
          <Link to={`/receta/${recipe.slug}`} className="btn-primary recipe-card-btn">
            Ver receta <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
