# jrs407.github.io-portfolio

Portfolio personal construido con HTML, CSS y JavaScript puro (sin frameworks ni build step), listo para GitHub Pages. Todas las páginas están completas y con contenido real.

## Estado

| Página | Estado |
| --- | --- |
| `index.html` (Sobre mí) | Completo |
| `proyectos.html` | Completo |
| `portfolio.html` (detalle del proyecto Portfolio, este mismo sitio) | Completo |
| `tokimori.html` (detalle del proyecto Tokimori) | Completo |
| `experiencia.html` (Experiencia laboral) | Completo |
| `ual-trace.html` (detalle del puesto en el ACG) | Completo |
| `habilidades.html` | Completo |
| `formacion.html` (Formación Académica) | Completo |
| `contacto.html` | Completo |

## Estructura

```
index.html          Sobre mí (portada)
proyectos.html      Proyectos
portfolio.html      Detalle del proyecto Portfolio (este mismo sitio)
tokimori.html       Detalle del proyecto Tokimori
experiencia.html    Experiencia laboral
ual-trace.html      Detalle del puesto de desarrollador full-stack en el ACG (UAL)
habilidades.html    Habilidades
formacion.html      Formación Académica
contacto.html       Contacto
assets/
  css/
    style.css         Estilos globales (incluye el header)
    proyectos.css     Estilos propios de proyectos.html
    experiencia.css   Estilos de experiencia.html, ual-trace.html, portfolio.html y tokimori.html
    habilidades.css   Estilos propios de habilidades.html
    formacion.css     Estilos propios de formacion.html
    contacto.css      Estilos propios de contacto.html
  js/
    script.js         Lógica global (header: menú, tema, idioma) y diccionario i18n
    proyectos.js      Lógica propia de proyectos.html
    experiencia.js    Lógica de experiencia.html, ual-trace.html, portfolio.html y tokimori.html
    habilidades.js    Lógica propia de habilidades.html
    formacion.js      Lógica propia de formacion.html
    contacto.js       Lógica propia de contacto.html
  cv/                 PDF del currículum (enlazado desde el botón de la portada)
  img/
    Foto.jpg
    placeholder.svg
    Experiencia/       Imágenes de la pestaña de experiencia (ual-trace.png)
    Proyecto/          Imágenes de las tarjetas de proyecto (portfolio.png, tokimori.png)
    Habilidades/       Iconos de tecnologías (Portada/)
```

Cada página carga `assets/css/style.css` + su CSS propio, y `assets/js/script.js` + su JS propio.
`ual-trace.html`, `portfolio.html` y `tokimori.html` son páginas de detalle enlazadas desde
`experiencia.html`/la portada y desde `proyectos.html` respectivamente; reutilizan el CSS y el JS
de `experiencia`.

El header es común a todas las páginas y sus enlaces redirigen a los HTML correspondientes.

## Internacionalización (ES/EN)

El sitio es bilingüe. Los textos traducibles se marcan en el HTML con atributos
`data-i18n`, `data-i18n-title`, `data-i18n-alt`, etc., y `assets/js/script.js`
contiene el diccionario y aplica el idioma seleccionado desde el header (la
preferencia se recuerda entre visitas).

## Desarrollo local

Servidor estático con recarga automática del navegador vía Docker:

```
docker compose up
```

Sirve el proyecto en `http://localhost:3000` con `browser-sync`, recargando al
guardar cualquier archivo. En Windows la recarga usa sondeo de ficheros
(`CHOKIDAR_USEPOLLING`) porque los bind mounts no emiten eventos al contenedor.

Alternativamente, cualquier servidor estático sobre la raíz del repo funciona
(no hay paso de build).
