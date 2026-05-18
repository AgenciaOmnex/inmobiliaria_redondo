/* properties.js — datos demo + renderizado de tarjetas (window.Properties) */

window.Properties = (function () {

  /* ── Demo data (inline para funcionar con file://) ─────── */
  const DEMO = [
    {
      id: '001', tipo: 'venta', categoria: 'piso',
      titulo: 'Piso luminoso en el centro de Moguer',
      descripcion: 'Amplio piso reformado con acabados de calidad en pleno centro de Moguer. Cuenta con tres habitaciones, dos baños completos, cocina equipada y salón con balcón orientado al sur. Suelos de mármol, carpintería de aluminio y calefacción central.',
      precio: 145000, localidad: 'Moguer', provincia: 'Huelva',
      habitaciones: 3, banos: 2, superficie: 98,
      garaje: true, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Reformado', 'Balcón sur', 'Suelo mármol', 'Cocina equipada', 'Calefacción central'],
      referencia: 'RED-001', nuevo: true, destacado: true
    },
    {
      id: '002', tipo: 'venta', categoria: 'chalet',
      titulo: 'Chalet independiente con piscina y jardín',
      descripcion: 'Magnífico chalet unifamiliar en zona residencial tranquila con jardín privado de 800 m² y piscina. Cuatro dormitorios, tres baños, amplio salón-comedor, cocina americana y garaje doble. Ideal para familias que buscan espacio y calidad de vida.',
      precio: 320000, localidad: 'Moguer', provincia: 'Huelva',
      habitaciones: 4, banos: 3, superficie: 210,
      garaje: true, terraza: true, ascensor: false, piscina: true,
      caracteristicas: ['Piscina privada', 'Jardín 800m²', 'Garaje doble', 'Cocina americana', 'Trastero'],
      referencia: 'RED-002', nuevo: false, destacado: true
    },
    {
      id: '003', tipo: 'alquiler', categoria: 'piso',
      titulo: 'Piso moderno cerca de la playa de Mazagón',
      descripcion: 'Fantástico piso amueblado a cinco minutos de la playa de Mazagón. Dos habitaciones dobles, un baño, cocina independiente y terraza con vistas al pinar. Edificio con piscina comunitaria y parking.',
      precio: 750, localidad: 'Mazagón', provincia: 'Huelva',
      habitaciones: 2, banos: 1, superficie: 72,
      garaje: true, terraza: true, ascensor: true, piscina: true,
      caracteristicas: ['A 5 min playa', 'Amueblado', 'Piscina comunitaria', 'Parking incluido', 'Terraza'],
      referencia: 'RED-003', nuevo: true, destacado: false
    },
    {
      id: '004', tipo: 'venta', categoria: 'cortijo',
      titulo: 'Cortijo restaurado con finca de 3 hectáreas',
      descripcion: 'Cortijo andaluz completamente restaurado en el entorno natural de Doñana. Finca de 3 hectáreas con olivos centenarios, pozo propio y cuadras rehabilitadas.',
      precio: 480000, localidad: 'Almonte', provincia: 'Huelva',
      habitaciones: 5, banos: 3, superficie: 320,
      garaje: false, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Finca 3 ha', 'Olivos centenarios', 'Pozo propio', 'Chimenea', 'Bodega'],
      referencia: 'RED-004', nuevo: false, destacado: true
    },
    {
      id: '005', tipo: 'alquiler', categoria: 'local',
      titulo: 'Local comercial en Avenida Constitución',
      descripcion: 'Diáfano local comercial en la principal arteria de Moguer. Escaparate de 8 metros lineales, aseo, instalación eléctrica trifásica y techo de 3,2 metros.',
      precio: 620, localidad: 'Moguer', provincia: 'Huelva',
      habitaciones: 0, banos: 1, superficie: 85,
      garaje: false, terraza: false, ascensor: false, piscina: false,
      caracteristicas: ['Diáfano', 'Escaparate 8m', 'Trifásica', 'Altura 3.2m', 'Alto tráfico peatonal'],
      referencia: 'RED-005', nuevo: false, destacado: false
    },
    {
      id: '006', tipo: 'venta', categoria: 'piso',
      titulo: 'Ático con terraza panorámica en Huelva capital',
      descripcion: 'Espectacular ático de obra nueva con terraza de 60 m² y vistas al río Odiel. Dos dormitorios en suite, cocina abierta de diseño y domótica. Edificio con piscina, gimnasio y conserjería.',
      precio: 265000, localidad: 'Huelva', provincia: 'Huelva',
      habitaciones: 2, banos: 2, superficie: 95,
      garaje: true, terraza: true, ascensor: true, piscina: true,
      caracteristicas: ['Obra nueva', 'Terraza 60m²', 'Vistas río', 'Piscina + Gym', 'Conserjería'],
      referencia: 'RED-006', nuevo: true, destacado: true
    }
  ];

  /* ── Icons ─────────────────────────────────────────────── */
  const ICONS = {
    beds:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4v16M22 8H2M22 20V8M22 8a4 4 0 0 0-4-4H6M6 4a4 4 0 0 0-4 4"/><rect x="6" y="8" width="12" height="8" rx="1"/></svg>`,
    bath:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="4" y1="11" x2="20" y2="11"/></svg>`,
    area:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    pin:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    house: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  };

  /* ── Helpers ───────────────────────────────────────────── */
  function formatPrice(precio, tipo) {
    const f = precio.toLocaleString('es-ES');
    return tipo === 'alquiler' ? `${f} €<span>/mes</span>` : `${f} €`;
  }

  function getAll()       { return [...DEMO]; }
  function getById(id)    { return DEMO.find(p => p.id === id) || null; }
  function getVenta()     { return DEMO.filter(p => p.tipo === 'venta'); }
  function getAlquiler()  { return DEMO.filter(p => p.tipo === 'alquiler'); }
  function getDestacados(){ return DEMO.filter(p => p.destacado); }

  /* ── Build card HTML ───────────────────────────────────── */
  function buildCard(prop, basePath) {
    basePath = basePath || './';
    const badgeClass = prop.tipo === 'alquiler' ? 'badge-alquiler' : 'badge-venta';
    const badgeText  = prop.tipo === 'alquiler' ? 'Alquiler' : 'Venta';
    const newBadge   = prop.nuevo ? `<span class="badge badge-new" style="margin-left:6px">Nuevo</span>` : '';
    const bedsHtml   = prop.habitaciones > 0
      ? `<span class="property-card-feature">${ICONS.beds} ${prop.habitaciones} hab.</span>` : '';

    return `
      <article class="property-card"
        onclick="location.href='${basePath}propiedad.html?id=${prop.id}'"
        tabindex="0" role="link" aria-label="${prop.titulo}">
        <div class="property-card-img">
          <div class="property-card-img-placeholder">${ICONS.house}</div>
          <div class="property-card-badge">
            <span class="badge ${badgeClass}">${badgeText}</span>${newBadge}
          </div>
          <button class="property-card-favorite" aria-label="Guardar en favoritos"
            onclick="event.stopPropagation(); this.style.color='#e74c3c'">
            ${ICONS.heart}
          </button>
        </div>
        <div class="property-card-body">
          <p class="property-card-price">${formatPrice(prop.precio, prop.tipo)}</p>
          <h3 class="property-card-title">${prop.titulo}</h3>
          <p class="property-card-location">${ICONS.pin} ${prop.localidad}, ${prop.provincia}</p>
          <div class="property-card-features">
            ${bedsHtml}
            <span class="property-card-feature">${ICONS.bath} ${prop.banos} baño${prop.banos !== 1 ? 's' : ''}</span>
            <span class="property-card-feature">${ICONS.area} ${prop.superficie} m²</span>
          </div>
        </div>
      </article>`;
  }

  function renderGrid(container, props, basePath) {
    if (!container) return;
    if (!props.length) {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--c-text-muted)">No se encontraron propiedades.</div>`;
      return;
    }
    container.innerHTML = props.map(p => buildCard(p, basePath)).join('');
  }

  return { getAll, getById, getVenta, getAlquiler, getDestacados, buildCard, renderGrid };
})();
