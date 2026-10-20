# CinnaRolls · Bakery & Coffee — La Paz, B.C.S.

Landing page del restaurante y cafetería **CinnaRolls** en La Paz, Baja California Sur: roles de canela horneados cada mañana, café de especialidad, desayunos y comida balanceada frente al malecón.

**🌐 Sitio en línea:** <https://devivan-frontend.github.io/cinnarolls-landing/>

## Secciones

1. **Presentación** — hero con el nombre, introducción y accesos rápidos.
2. **Qué nos caracteriza** — horneado diario, café con vista al mar, opciones sanas y el ambiente del local.
3. **Menú interactivo** — pestañas por categoría (Roles & Postres, Desayunos, Comidas, Bebidas) con precios.
4. **Galería** — mosaico de fotos con visor ampliado (lightbox) y navegación con teclado.
5. **Reservaciones** — formulario que abre WhatsApp (612 291 4014) con el mensaje ya redactado.
6. **Visítanos** — mapa interactivo con las dos sucursales y el horario (todos los días, 7:00 am – 10:30 pm).
7. **Footer** — resumen de información y enlace a [Facebook](https://www.facebook.com/cinnarolls).

## Características

- **Bilingüe (español / inglés):** detecta el idioma del dispositivo y recuerda la elección del usuario.
- **Responsive:** diseñado para móvil, tableta y escritorio.
- **Sin build ni dependencias locales:** HTML, CSS y JavaScript puros.
- **Mapa sin clave de API:** [MapLibre GL](https://maplibre.org/) con mosaicos de [OpenFreeMap](https://openfreemap.org/).

## Estructura

```
index.html        Página principal
css/styles.css    Estilos y diseño responsive
js/i18n.js        Traducciones ES/EN y detección de idioma
js/main.js        Interacciones: menú, galería, reservas, mapa
assets/img/       Fotografías optimizadas para web
```

## Ver en local

Abre `index.html` en el navegador, o sírvelo con un servidor estático:

```bash
npx http-server -p 4173 .
```

y visita <http://localhost:4173>.
