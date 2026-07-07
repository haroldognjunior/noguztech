# noguztech.com

Landing sencilla en React + React Router para NoguzTech.

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura

```
src/
  components/   Nav y Footer
  pages/        Home, Services, Contact
  App.jsx       rutas
  index.css     todos los estilos (tokens de diseño arriba del archivo)
public/
  logo.png      logo de NoguzTech
  CNAME         necesario para que GitHub Pages recuerde el dominio custom
```

Usa `HashRouter` (URLs con `#/servicios`) a propósito: evita configurar reglas
de servidor en GitHub Pages para que las rutas no den 404 al recargar o
compartir un link directo.

## Deploy a GitHub Pages

1. Instalá la dependencia de deploy (ya está en package.json):
   ```bash
   npm install
   ```
2. Generá el build y publicalo en la rama `gh-pages`:
   ```bash
   npm run deploy
   ```
3. En GitHub → tu repo → **Settings → Pages**:
   - **Source**: rama `gh-pages`, carpeta `/ (root)`.
   - **Custom domain**: `noguztech.com` (ya viene seteado por el archivo `public/CNAME`,
     pero confirmalo en la UI la primera vez).
4. En Cloudflare (DNS del dominio) agregá, en modo **DNS only** (nube gris):
   - `A` `@` → `185.199.108.153`
   - `A` `@` → `185.199.109.153`
   - `A` `@` → `185.199.110.153`
   - `A` `@` → `185.199.111.153`
   - `CNAME` `www` → `<tu-usuario>.github.io`
5. Esperá la propagación y activá **"Enforce HTTPS"** en Settings → Pages.

Para actualizar el sitio más adelante, repetí solo el paso 2 (`npm run deploy`).
