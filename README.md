# Fresas con Crema Recetas 🍓

Blog profesional optimizado para Pinterest y monetizado con Google AdSense.

## 🚀 Tecnologías
- **Core**: React 19 + Vite
- **Styling**: Vanilla CSS (Modern Design System)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: React Helmet Async + JSON-LD

## 📂 Sistema de Contenido Dinámico
El blog utiliza un sistema de archivos JSON para los artículos y recetas.
- Artículos: `src/content/articles/*.json`
- Recetas: `src/content/recipes/*.json`

### Cómo añadir contenido nuevo
Puedes usar el script de automatización:
```bash
node scripts/addNewPost.cjs
```
O simplemente añadir un nuevo archivo `.json` en las carpetas correspondientes. Vercel detectará el cambio y publicará automáticamente.

## 🛠️ Desarrollo
1. Instalar dependencias: `npm install`
2. Correr en local: `npm run dev`
3. Build de producción: `npm run build`

## ☁️ Despliegue en Vercel
1. Sube este código a GitHub.
2. Conecta tu repositorio en [Vercel](https://vercel.com).
3. Configura el Framework como `Vite`.
4. ¡Listo! Cada `git push` hará un deploy automático.

---
Creado con ❤️ para el nicho de postres virales.
