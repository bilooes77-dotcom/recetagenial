const fs = require('fs');
const path = require('path');

/**
 * Función para añadir nuevo contenido automáticamente.
 * @param {'article' | 'recipe'} type - Tipo de contenido
 * @param {Object} data - Datos del post/receta
 */
function addNewPost(type, data) {
  if (!data.slug) {
    console.error('❌ Error: El slug es obligatorio.');
    return;
  }

  const folder = type === 'recipe' ? 'recipes' : 'articles';
  const targetDir = path.join(__dirname, '../src/content', folder);

  // Asegurar que el directorio existe
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, `${data.slug}.json`);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ ${type} creado con éxito: ${data.slug}.json`);
  console.log(`🚀 El sitio se actualizará automáticamente al hacer push a GitHub.`);
}

// --- EJEMPLO DE USO ---
/*
addNewPost('article', {
  id: Date.now().toString(),
  title: 'Nueva Receta Viral',
  slug: 'nueva-receta-viral',
  excerpt: 'Esta receta está rompiendo Pinterest...',
  metaTitle: 'Nueva Receta Viral - Fresas con Crema',
  metaDescription: 'Descubre el secreto...',
  image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
  content: '<h2>Paso 1</h2><p>Lavar las fresas...</p>',
  keywords: ['fresa', 'crema', 'viral'],
  category: 'Tendencias',
  readTime: '3 min',
  datePublished: new Date().toISOString().split('T')[0],
  pinterestDescription: '📌 Pin it!',
  hashtags: ['#viral', '#fresas'],
  featured: true
});
*/

module.exports = { addNewPost };
