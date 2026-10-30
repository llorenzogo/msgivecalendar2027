# 🐾 Protectoras de animales – Landing page

Landing page estática que lista tres protectoras de animales. Cada una tiene un desplegable con enlaces a su web y redes sociales.

## Uso

Abre `index.html` en el navegador. No necesita instalación ni servidor.

## Editar las protectoras

Los datos están al principio de `script.js`, en el array `shelters`. Cada protectora tiene nombre, emoji y enlaces. El `type` de cada enlace (`web`, `instagram` o `facebook`) decide qué logo se muestra:

```js
{
  name: "Gata Lilit",
  emoji: "🐱",
  links: [
    { type: "web", url: "https://gatalilit.es/" },
    { type: "instagram", url: "https://www.instagram.com/gata_lilit/" },
    { type: "facebook", url: "https://www.facebook.com/…" },
  ],
}
```

Para añadir otra plataforma, agrega su icono SVG al objeto `PLATFORMS` en `script.js` y un color en `styles.css` (`.shelter__link--<tipo>`).

## Publicar con GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En *Source* elige la rama `main` y la carpeta `/ (root)`.
4. Tu web estará en `https://<tu-usuario>.github.io/<nombre-repo>/`.
