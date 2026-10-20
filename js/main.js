/* CinnaRolls Bakery & Coffee — interacciones */
(function () {
  "use strict";

  /* ---------- Navbar: fondo al hacer scroll ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Enlace activo según sección visible ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const linkFor = (id) => document.querySelector('.nav__link[href="#' + id + '"]');
  const sectionSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("is-active"));
          const link = linkFor(entry.target.id);
          if (link) link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => sectionSpy.observe(s));

  /* ---------- Aparición al hacer scroll ---------- */
  const revealer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

  /* ---------- Tabs del menú ---------- */
  const tabs = document.querySelectorAll(".menu__tab");
  const panels = document.querySelectorAll(".menu__panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      panels.forEach((p) => {
        const show = p.id === "panel-" + tab.dataset.tab;
        p.hidden = !show;
        p.classList.toggle("is-active", show);
      });
    });
  });

  /* ---------- Galería + lightbox ---------- */
  const items = Array.from(document.querySelectorAll(".gallery__item"));
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  let current = 0;

  function openLightbox(i) {
    current = (i + items.length) % items.length;
    const fig = items[current];
    const img = fig.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = fig.dataset.caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  items.forEach((fig, i) => fig.addEventListener("click", () => openLightbox(i)));
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => openLightbox(current - 1));
  document.getElementById("lbNext").addEventListener("click", () => openLightbox(current + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(current - 1);
    if (e.key === "ArrowRight") openLightbox(current + 1);
  });

  /* ---------- Reservación por WhatsApp (bilingüe) ---------- */
  const WHATSAPP = "526122914014";
  const t = (key) => (window.CinnaI18n ? window.CinnaI18n.t(key) : null);
  const form = document.getElementById("reserveForm");
  const dateInput = document.getElementById("rDate");

  // Fecha mínima: hoy
  const today = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  dateInput.min = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
  dateInput.value = dateInput.min;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang === "en" ? "en" : "es";
    const name = document.getElementById("rName").value.trim();
    const people = document.getElementById("rPeople").value;
    const date = dateInput.value;
    const time = document.getElementById("rTime").value;
    const branch = document.getElementById("rBranch").value;

    const fecha = new Date(date + "T00:00:00").toLocaleDateString(
      lang === "en" ? "en-US" : "es-MX",
      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    );

    const msg =
      t("wa.greeting") + "\n\n" +
      "👤 " + t("wa.name") + ": " + name + "\n" +
      "👥 " + t("wa.people") + ": " + people + "\n" +
      "📅 " + t("wa.date") + ": " + fecha + "\n" +
      "🕘 " + t("wa.time") + ": " + time + "\n" +
      "📍 " + t("wa.branch") + ": " + branch + "\n\n" +
      t("wa.closing");

    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  // Enlace directo del hero con mensaje prellenado en el idioma activo
  const heroWhats = document.getElementById("heroWhats");
  const updateHeroWhats = () => {
    if (heroWhats && t("wa.hero")) {
      heroWhats.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t("wa.hero"));
    }
  };
  updateHeroWhats();
  document.addEventListener("cinna:lang", updateHeroWhats);

  /* ---------- Mapa interactivo (MapLibre GL + OpenFreeMap, sin clave de API) ---------- */
  const branches = {
    malecon: {
      n: "1",
      addr: "Paseo Álvaro Obregón 550, Centro",
      coords: [-110.3190411, 24.1593835], // [lng, lat]
    },
    cultural: {
      n: "2",
      addr: "16 de Septiembre esq. Belisario Domínguez, Centro",
      coords: [-110.3154512, 24.1620477],
    },
  };
  const branchName = (key) => t("visit.loc" + branches[key].n + ".name");
  const directionsUrl = (key) =>
    "https://www.google.com/maps/dir/?api=1&destination=" + branches[key].coords[1] + "," + branches[key].coords[0];

  const mapEl = document.getElementById("map");
  const cards = document.querySelectorAll(".location");
  const setActiveCard = (key) =>
    cards.forEach((c) => c.classList.toggle("is-active", c.dataset.branch === key));

  const hasWebGL = (() => {
    try {
      const c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
    } catch (e) {
      return false;
    }
  })();

  // Sin WebGL o sin la librería no hay mapa: se ofrecen accesos directos a Google Maps
  const renderFallback = () => {
    mapEl.classList.add("visit__map--fallback");
    mapEl.innerHTML =
      '<div class="map-fallback"><svg class="ic"><use href="#ic-pin"/></svg><p>' + t("map.fallback") + "</p>" +
      Object.keys(branches)
        .map((key) => '<a class="btn btn--ghost" href="' + directionsUrl(key) + '" target="_blank" rel="noopener">' + branchName(key) + "</a>")
        .join("") +
      "</div>";
  };

  if (typeof maplibregl === "undefined" || !hasWebGL) {
    renderFallback();
    document.addEventListener("cinna:lang", renderFallback);
  } else {
    const map = new maplibregl.Map({
      container: mapEl,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-110.3172, 24.1607],
      zoom: 15,
      scrollZoom: false, // la rueda del ratón sigue desplazando la página
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      attributionControl: { compact: true },
    });
    map.touchZoomRotate.disableRotation();
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-left");

    const popupHtml = (key) =>
      "<b>" + branchName(key) + "</b><br>" + branches[key].addr + "<br><small>" + t("map.hours") + "</small>";

    const markers = {};
    Object.keys(branches).forEach((key) => {
      const el = document.createElement("div");
      el.className = "map-pin";
      el.setAttribute("aria-label", branchName(key));
      el.innerHTML =
        '<div class="map-marker"><svg viewBox="0 0 64 64"><path d="M32 32 a3 3 0 0 1 6 0 a6 6 0 0 1 -12 0 a9 9 0 0 1 18 0 a12 12 0 0 1 -24 0 a15 15 0 0 1 30 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg></div>';
      el.addEventListener("click", () => setActiveCard(key));

      markers[key] = new maplibregl.Marker({ element: el, anchor: "bottom" })
        .setLngLat(branches[key].coords)
        .setPopup(new maplibregl.Popup({ offset: 52, maxWidth: "260px" }).setHTML(popupHtml(key)))
        .addTo(map);
    });

    const openOnly = (key) => {
      Object.keys(markers).forEach((k) => {
        const popup = markers[k].getPopup();
        if (k !== key && popup.isOpen()) popup.remove();
      });
      if (!markers[key].getPopup().isOpen()) markers[key].togglePopup();
    };
    map.once("load", () => openOnly("malecon"));

    document.addEventListener("cinna:lang", () => {
      Object.keys(markers).forEach((key) => {
        markers[key].getPopup().setHTML(popupHtml(key));
        markers[key].getElement().setAttribute("aria-label", branchName(key));
      });
    });

    // Al hacer clic en una tarjeta, volar al marcador
    cards.forEach((card) => {
      const key = card.dataset.branch;
      const activate = () => {
        setActiveCard(key);
        map.flyTo({ center: branches[key].coords, zoom: 17, duration: 1100, essential: true });
        openOnly(key);
      };
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // no interceptar "Cómo llegar" ni teléfonos
        activate();
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });
  }

  /* ---------- Volver arriba + año ---------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener(
    "scroll",
    () => toTop.classList.toggle("is-visible", window.scrollY > 700),
    { passive: true }
  );
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
