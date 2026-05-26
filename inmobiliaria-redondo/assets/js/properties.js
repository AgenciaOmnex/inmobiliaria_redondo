/* properties.js — datos demo + renderizado de tarjetas (window.Properties) */

window.Properties = (function () {

  /* ── Demo data ─────────────────────────────────────────────
     Campos: shortDescription, status, createdAt (v2)
     lat/lng: coordenadas aproximadas de la localidad para el mapa
  ──────────────────────────────────────────────────────────── */
  const DEMO = [
    {
      id: '001', tipo: 'venta', categoria: 'piso',
      titulo: 'Piso luminoso en el centro de Moguer',
      shortDescription: 'Piso reformado con acabados de calidad en el corazón de Moguer. Tres habitaciones, balcón orientado al sur y cocina totalmente equipada.',
      descripcion: 'Amplio piso reformado con acabados de calidad en pleno centro de Moguer. Cuenta con tres habitaciones, dos baños completos, cocina equipada y salón con balcón orientado al sur. Suelos de mármol, carpintería de aluminio y calefacción central.',
      precio: 145000, localidad: 'Moguer', provincia: 'Huelva',
      lat: 37.2705, lng: -6.8393,
      habitaciones: 3, banos: 2, superficie: 98,
      garaje: true, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Reformado', 'Balcón sur', 'Suelo mármol', 'Cocina equipada', 'Calefacción central'],
      referencia: 'RED-001', status: 'Disponible', nuevo: true, destacado: true, createdAt: '2025-01-10'
    },
    {
      id: '002', tipo: 'venta', categoria: 'chalet',
      titulo: 'Chalet independiente con piscina y jardín',
      shortDescription: 'Amplio chalet con jardín privado de 800 m² y piscina en zona residencial tranquila. Cuatro dormitorios, garaje doble y terraza cubierta.',
      descripcion: 'Magnífico chalet unifamiliar en zona residencial tranquila con jardín privado de 800 m² y piscina. Cuatro dormitorios, tres baños, amplio salón-comedor, cocina americana y garaje doble. Ideal para familias que buscan espacio y calidad de vida.',
      precio: 320000, localidad: 'Moguer', provincia: 'Huelva',
      lat: 37.2690, lng: -6.8420,
      habitaciones: 4, banos: 3, superficie: 210,
      garaje: true, terraza: true, ascensor: false, piscina: true,
      caracteristicas: ['Piscina privada', 'Jardín 800m²', 'Garaje doble', 'Cocina americana', 'Trastero'],
      referencia: 'RED-002', status: 'Disponible', nuevo: false, destacado: true, createdAt: '2025-01-18'
    },
    {
      id: '003', tipo: 'alquiler', categoria: 'piso',
      titulo: 'Piso moderno cerca de la playa de Mazagón',
      shortDescription: 'Piso amueblado a cinco minutos de la playa de Mazagón con terraza, piscina comunitaria y parking incluido.',
      descripcion: 'Fantástico piso amueblado a cinco minutos de la playa de Mazagón. Dos habitaciones dobles, un baño, cocina independiente y terraza con vistas al pinar. Edificio con piscina comunitaria y parking.',
      precio: 750, localidad: 'Mazagón', provincia: 'Huelva',
      lat: 37.1294, lng: -6.8197,
      habitaciones: 2, banos: 1, superficie: 72,
      garaje: true, terraza: true, ascensor: true, piscina: true,
      caracteristicas: ['A 5 min playa', 'Amueblado', 'Piscina comunitaria', 'Parking incluido', 'Terraza'],
      referencia: 'RED-003', status: 'Disponible', nuevo: true, destacado: false, createdAt: '2025-02-05'
    },
    {
      id: '004', tipo: 'venta', categoria: 'cortijo',
      titulo: 'Cortijo restaurado con finca de 3 hectáreas',
      shortDescription: 'Cortijo andaluz completamente restaurado con 3 hectáreas de finca y olivos centenarios en el entorno natural de Doñana.',
      descripcion: 'Cortijo andaluz completamente restaurado en el entorno natural de Doñana. Finca de 3 hectáreas con olivos centenarios, pozo propio y cuadras rehabilitadas. La vivienda principal dispone de cinco dormitorios, salón con chimenea y bodega.',
      precio: 480000, localidad: 'Almonte', provincia: 'Huelva',
      lat: 37.2625, lng: -6.5158,
      habitaciones: 5, banos: 3, superficie: 320,
      garaje: false, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Finca 3 ha', 'Olivos centenarios', 'Pozo propio', 'Chimenea', 'Bodega'],
      referencia: 'RED-004', status: 'Disponible', nuevo: false, destacado: true, createdAt: '2025-01-22'
    },
    {
      id: '005', tipo: 'alquiler', categoria: 'local',
      titulo: 'Local comercial en Avenida Constitución',
      shortDescription: 'Local diáfano en la principal arteria comercial de Moguer. Escaparate de 8 metros lineales, instalación trifásica y óptima visibilidad.',
      descripcion: 'Diáfano local comercial en la principal arteria de Moguer. Escaparate de 8 metros lineales, aseo, instalación eléctrica trifásica y techo de 3,2 metros.',
      precio: 620, localidad: 'Moguer', provincia: 'Huelva',
      lat: 37.2710, lng: -6.8385,
      habitaciones: 0, banos: 1, superficie: 85,
      garaje: false, terraza: false, ascensor: false, piscina: false,
      caracteristicas: ['Diáfano', 'Escaparate 8m', 'Trifásica', 'Altura 3.2m', 'Alto tráfico peatonal'],
      referencia: 'RED-005', status: 'Disponible', nuevo: false, destacado: false, createdAt: '2025-02-14'
    },
    {
      id: '006', tipo: 'venta', categoria: 'piso',
      titulo: 'Ático con terraza panorámica en Huelva capital',
      shortDescription: 'Espectacular ático de obra nueva con terraza de 60 m² y vistas al río Odiel. Edificio con piscina, gimnasio y conserjería.',
      descripcion: 'Espectacular ático de obra nueva con terraza de 60 m² y vistas al río Odiel. Dos dormitorios en suite, cocina abierta de diseño, suelos de porcelánico y domótica. Edificio con piscina, gimnasio y conserjería.',
      precio: 265000, localidad: 'Huelva', provincia: 'Huelva',
      lat: 37.2614, lng: -6.9447,
      habitaciones: 2, banos: 2, superficie: 95,
      garaje: true, terraza: true, ascensor: true, piscina: true,
      caracteristicas: ['Obra nueva', 'Terraza 60m²', 'Vistas río', 'Piscina + Gym', 'Conserjería'],
      referencia: 'RED-006', status: 'Reservado', nuevo: true, destacado: true, createdAt: '2025-02-01'
    },
    {
      id: '007', tipo: 'venta', categoria: 'chalet',
      titulo: 'Casa adosada con jardín en San Juan del Puerto',
      shortDescription: 'Casa adosada de esquina con jardín trasero privado en urbanización tranquila. Garaje individual y trastero incluidos.',
      descripcion: 'Espaciosa casa adosada en urbanización tranquila de San Juan del Puerto. Tres dormitorios, dos baños completos, amplio salón-comedor y cocina independiente equipada. Jardín privado de 80 m², garaje cerrado y trastero.',
      precio: 195000, localidad: 'San Juan del Puerto', provincia: 'Huelva',
      lat: 37.3256, lng: -6.8447,
      habitaciones: 3, banos: 2, superficie: 130,
      garaje: true, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Jardín privado 80m²', 'Garaje cerrado', 'Trastero', 'Cocina equipada', 'Zona tranquila'],
      referencia: 'RED-007', status: 'Disponible', nuevo: true, destacado: false, createdAt: '2025-03-05'
    },
    {
      id: '008', tipo: 'venta', categoria: 'piso',
      titulo: 'Piso reformado con mucha luz en Palos de la Frontera',
      shortDescription: 'Piso en planta alta totalmente reformado con cocina nueva, tarima flotante y doble acristalamiento. Mucha luz natural y orientación sur.',
      descripcion: 'Piso completamente reformado en planta alta con orientación sur y mucha luz natural. Dos dormitorios dobles, un baño completo, cocina nueva con electrodomésticos, suelos de tarima flotante y carpintería exterior de PVC con doble acristalamiento.',
      precio: 118000, localidad: 'Palos de la Frontera', provincia: 'Huelva',
      lat: 37.2297, lng: -6.8869,
      habitaciones: 2, banos: 1, superficie: 78,
      garaje: false, terraza: false, ascensor: false, piscina: false,
      caracteristicas: ['Totalmente reformado', 'Orientación sur', 'Cocina nueva', 'Tarima flotante', 'Doble acristalamiento'],
      referencia: 'RED-008', status: 'Disponible', nuevo: false, destacado: false, createdAt: '2025-03-12'
    },
    {
      id: '009', tipo: 'venta', categoria: 'cortijo',
      titulo: 'Finca rústica con cortijo rehabilitado en Valverde',
      shortDescription: 'Gran finca con cortijo rehabilitado y amplio terreno en Valverde del Camino. Cuatro dormitorios, huerto propio y nave auxiliar.',
      descripcion: 'Gran finca rústica con cortijo completamente rehabilitado en el término de Valverde del Camino. Cuatro dormitorios, dos baños, salón con chimenea y cocina de campo. Terreno de 2 hectáreas con huerto, pozos y nave auxiliar.',
      precio: 380000, localidad: 'Valverde del Camino', provincia: 'Huelva',
      lat: 37.5742, lng: -6.7522,
      habitaciones: 4, banos: 2, superficie: 280,
      garaje: false, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Finca 2 ha', 'Huerto propio', 'Pozo y cisterna', 'Nave auxiliar', 'Chimenea'],
      referencia: 'RED-009', status: 'Disponible', nuevo: false, destacado: false, createdAt: '2025-02-28'
    },
    {
      id: '010', tipo: 'venta', categoria: 'piso',
      titulo: 'Piso moderno en Beas, eficiencia energética A',
      shortDescription: 'Piso de reciente construcción en zona tranquila de Beas con certificación energética A, aerotermia y terraza privada.',
      descripcion: 'Piso moderno de reciente construcción en zona tranquila de Beas, a 20 minutos de Huelva capital. Dos dormitorios, un baño completo, cocina abierta al salón, terraza y sistema de aerotermia. Certificación energética A.',
      precio: 95000, localidad: 'Beas', provincia: 'Huelva',
      lat: 37.3978, lng: -6.9192,
      habitaciones: 2, banos: 1, superficie: 67,
      garaje: false, terraza: true, ascensor: false, piscina: false,
      caracteristicas: ['Obra reciente', 'Eficiencia A', 'Aerotermia', 'Terraza', 'Bien comunicado'],
      referencia: 'RED-010', status: 'Disponible', nuevo: true, destacado: false, createdAt: '2025-04-01'
    }
  ];

  /* ── Icons ─────────────────────────────────────────────────────────── */
  const ICONS = {
    beds:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4v16M22 8H2M22 20V8M22 8a4 4 0 0 0-4-4H6M6 4a4 4 0 0 0-4 4"/><rect x="6" y="8" width="12" height="8" rx="1"/></svg>`,
    bath:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="4" y1="11" x2="20" y2="11"/></svg>`,
    area:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    pin:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    heart: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    house: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    wa:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
  };

  /* ── Type labels ────────────────────────────────────────────────────── */
  const TYPE_LABELS = {
    piso:    'Piso / Apartamento',
    chalet:  'Chalet',
    cortijo: 'Cortijo / Finca',
    local:   'Local comercial',
    duplex:  'Dúplex'
  };

  /* ── Helpers ────────────────────────────────────────────────────────── */
  function formatPrice(precio, tipo) {
    const f = precio.toLocaleString('es-ES');
    return tipo === 'alquiler' ? `${f} €<span>/mes</span>` : `${f} €`;
  }

  function getAll()        { return [...DEMO]; }
  function getById(id)     { return DEMO.find(p => p.id === id) || null; }
  function getByRef(ref)   { return DEMO.find(p => p.referencia === ref) || null; }
  function getVenta()      { return DEMO.filter(p => p.tipo === 'venta'); }
  function getAlquiler()   { return DEMO.filter(p => p.tipo === 'alquiler'); }
  function getDestacados() { return DEMO.filter(p => p.destacado); }

  /* ── Build card HTML ────────────────────────────────────────────────── */
  function buildCard(prop, basePath) {
    basePath = basePath || './';

    const badgeClass  = prop.tipo === 'alquiler' ? 'badge-alquiler' : 'badge-venta';
    const badgeText   = prop.tipo === 'alquiler' ? 'Alquiler' : 'Venta';
    const newBadge    = prop.nuevo ? `<span class="badge badge-new" style="margin-left:6px">Nuevo</span>` : '';
    const typeLabel   = TYPE_LABELS[prop.categoria] || prop.categoria;
    const bedsHtml    = prop.habitaciones > 0
      ? `<span class="property-card-feature">${ICONS.beds} ${prop.habitaciones} hab.</span>` : '';
    const status      = prop.status || 'Disponible';
    const statusCls   = status === 'Disponible' ? 'disponible' : status === 'Reservado' ? 'reservado' : 'vendido';
    const shortDesc   = prop.shortDescription || prop.descripcion.substring(0, 140) + '…';
    const waMsg       = encodeURIComponent(`Hola, me interesa la propiedad ${prop.referencia}. ¿Podéis informarme?`);
    const fichaUrl    = `${basePath}propiedad.html?id=${prop.id}`;

    return `
      <article class="property-card"
        onclick="window.cardDetail(this)"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.cardDetail(this)}"
        tabindex="0"
        aria-label="${prop.titulo}">

        <div class="property-card-img">
          <div class="property-card-img-placeholder">${ICONS.house}</div>
          <div class="property-card-badge">
            <span class="badge ${badgeClass}">${badgeText}</span>${newBadge}
          </div>
          <button class="property-card-favorite" aria-label="Guardar en favoritos"
            onclick="event.stopPropagation();this.classList.toggle('saved')">
            ${ICONS.heart}
          </button>
        </div>

        <div class="property-card-body">
          <div class="property-card-type-row">
            <span class="property-card-type-chip">${typeLabel}</span>
          </div>
          <p class="property-card-price">${formatPrice(prop.precio, prop.tipo)}</p>
          <h3 class="property-card-title">${prop.titulo}</h3>
          <p class="property-card-location">${ICONS.pin} ${prop.localidad}</p>
          <div class="property-card-features">
            ${bedsHtml}
            <span class="property-card-feature">${ICONS.bath} ${prop.banos} baño${prop.banos !== 1 ? 's' : ''}</span>
            <span class="property-card-feature">${ICONS.area} ${prop.superficie} m²</span>
          </div>
          <div class="property-card-actions">
            <a href="${fichaUrl}" class="property-card-btn-ver" onclick="event.stopPropagation()">
              Ver propiedad
            </a>
            <button class="property-card-btn-info property-card-mas-info"
              onclick="event.stopPropagation();window.cardDetail(this.closest('.property-card'))">
              Más información
            </button>
          </div>
        </div>

        <div class="property-card-detail" aria-hidden="true">
          <div class="property-card-detail-inner">
            <p class="property-card-detail-desc">${shortDesc}</p>
            <div class="property-card-detail-meta">
              <span class="property-card-detail-ref">Ref. ${prop.referencia}</span>
              <span class="property-card-detail-status status-${statusCls}">${status}</span>
            </div>
            <div class="property-card-detail-actions">
              <a href="${fichaUrl}" class="property-card-detail-ficha">
                Ver ficha completa
              </a>
              <a href="https://wa.me/34959281100?text=${waMsg}"
                class="property-card-detail-wa"
                target="_blank" rel="noopener noreferrer">
                ${ICONS.wa} WhatsApp
              </a>
            </div>
          </div>
        </div>

      </article>`;
  }

  /* ── Render grid ────────────────────────────────────────────────────── */
  function renderGrid(container, props, basePath) {
    if (!container) return;
    if (!props.length) {
      container.innerHTML = `<div class="property-grid-empty">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <p>No se encontraron propiedades con los filtros seleccionados.</p>
        <p style="font-size:var(--text-sm)">Prueba a ampliar los criterios de búsqueda.</p>
      </div>`;
      return;
    }
    container.innerHTML = props.map(p => buildCard(p, basePath)).join('');
  }

  /* ── Card detail toggle (global) ────────────────────────────────────── */
  window.cardDetail = function (card) {
    const detail = card.querySelector('.property-card-detail');
    const isOpen = detail.classList.contains('open');

    /* Close all open cards */
    document.querySelectorAll('.property-card.detail-open').forEach(c => {
      c.querySelector('.property-card-detail').classList.remove('open');
      c.querySelector('.property-card-detail').setAttribute('aria-hidden', 'true');
      c.classList.remove('detail-open');
      const btn = c.querySelector('.property-card-mas-info');
      if (btn) btn.textContent = 'Más información';
    });

    if (!isOpen) {
      detail.classList.add('open');
      detail.setAttribute('aria-hidden', 'false');
      card.classList.add('detail-open');
      const btn = card.querySelector('.property-card-mas-info');
      if (btn) btn.textContent = 'Cerrar ↑';
    }
  };

  return { getAll, getById, getByRef, getVenta, getAlquiler, getDestacados, buildCard, renderGrid };
})();
