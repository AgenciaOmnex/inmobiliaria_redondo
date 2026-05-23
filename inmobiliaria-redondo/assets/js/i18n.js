/* i18n.js — sistema de idiomas ES / FR / AR */

window.I18n = (function () {

  /* ── Diccionarios ───────────────────────────────────────────── */
  var T = {

    /* ══ ESPAÑOL ══════════════════════════════════════════════ */
    es: {
      /* Navegación */
      'nav.inicio':   'Inicio',
      'nav.comprar':  'Comprar',
      'nav.alquilar': 'Alquiler',
      'nav.vender':   'Vender',
      'nav.nosotros': 'Nosotros',
      'nav.contacto': 'Contacto',
      'nav.sell_btn': 'Quiero vender',
      'nav.call_btn': 'Llamar',

      /* Aviso multiidioma */
      'notice': 'Web disponible en español, árabe y francés para facilitar la consulta de propiedades. La atención comercial se realiza principalmente en español.',

      /* Hero principal (home) */
      'hero.label':    'Asesores Inmobiliarios en Moguer, Huelva',
      'hero.title':    'En Moguer<br>se van a abrir<br><em>muchas puertas</em>',
      'hero.subtitle': 'Compra, vende o encuentra tu próxima vivienda con una inmobiliaria cercana, profesional y transparente en Moguer y alrededores.',
      'hero.cta_buy':  'Ver propiedades',
      'hero.cta_sell': 'Quiero vender mi vivienda',

      /* Buscador */
      'search.op_label':   'Operación',
      'search.op_default': 'Comprar o alquilar',
      'search.op_buy':     'Comprar',
      'search.op_rent':    'Alquilar',
      'search.loc_label':  'Localidad',
      'search.loc_default':'Toda la zona',
      'search.type_label': 'Tipo',
      'search.type_default':'Todos los tipos',
      'search.btn':        'Buscar',

      /* Stats */
      'stats.ops':     'Operaciones cerradas',
      'stats.years':   'De experiencia',
      'stats.clients': 'Clientes satisfechos',

      /* Sección — Propiedades destacadas */
      'section.featured_label': 'Propiedades',
      'section.featured_title': 'Selección destacada',
      'section.featured_all':   'Ver todas',

      /* Sección — Zonas */
      'section.zones_label':    'Zona de actuación',
      'section.zones_title':    'Compra en Moguer y alrededores',
      'section.zones_subtitle': 'Conocemos cada barrio y cada oportunidad en la comarca de Huelva.',

      /* Sección — Vender */
      'section.sell_label':    'Vender con Redondo',
      'section.sell_title':    'Vende tu vivienda con un proceso claro y profesional',
      'section.sell_subtitle': 'Si estás pensando en vender tu vivienda, te ayudamos a hacerlo con un proceso claro, cercano y profesional. Valoramos tu propiedad, preparamos su presentación y te acompañamos en cada paso.',
      'section.sell_cta':      'Solicitar valoración gratuita',

      /* Sección — Proceso */
      'section.process_label':    'Cómo trabajamos',
      'section.process_title':    'Un proceso claro de principio a fin',
      'section.process_subtitle': 'Sin sorpresas. Sin complicaciones. Cada paso explicado y acompañado.',

      /* Sección — Por qué Redondo */
      'section.why_label':    'Por qué elegirnos',
      'section.why_title':    'Lo que nos hace distintos',
      'section.why_subtitle': 'Redondo nace con una convicción clara: las decisiones importantes necesitan claridad, acompañamiento y procesos bien hechos.',
      'section.why_cta':      'Conoce nuestro equipo',

      /* Contacto breve */
      'contact_brief.title':      '¿Listo para abrir una nueva puerta?',
      'contact_brief.subtitle':   'Cuéntanos qué necesitas y te asesoramos sin compromiso.',
      'contact_brief.btn_contact':'Contactar ahora',
      'contact_brief.btn_props':  'Ver propiedades',

      /* Footer */
      'footer.desc':         'En Moguer se van a abrir muchas puertas. Tu inmobiliaria de confianza en Huelva con transparencia y rigor.',
      'footer.col_buy':      'Comprar',
      'footer.col_services': 'Servicios',
      'footer.col_company':  'Empresa',
      'footer.buy_flats':    'Pisos y apartamentos',
      'footer.buy_houses':   'Chalets y unifamiliares',
      'footer.buy_fincas':   'Cortijos y fincas',
      'footer.buy_locals':   'Locales comerciales',
      'footer.svc_rent':     'Alquiler',
      'footer.svc_sell':     'Vender mi casa',
      'footer.svc_valuation':'Tasaciones',
      'footer.svc_advice':   'Asesoramiento',
      'footer.co_about':     'Quiénes somos',
      'footer.co_team':      'Nuestro equipo',
      'footer.co_contact':   'Contacto',
      'footer.copy':         '© 2025 Asesores Inmobiliarios Redondo. Todos los derechos reservados.',

      /* Breadcrumbs */
      'bread.inicio':   'Inicio',
      'bread.comprar':  'Comprar',
      'bread.alquiler': 'Alquiler',
      'bread.vender':   'Vender',
      'bread.nosotros': 'Nosotros',
      'bread.contacto': 'Contacto',

      /* Página — Nosotros */
      'nos.hero_title':    'Una inmobiliaria cercana<br>para decisiones importantes',
      'nos.hero_subtitle': 'Redondo nace con una idea clara: ayudar a las personas a tomar decisiones inmobiliarias importantes con claridad, tranquilidad y acompañamiento.',
      'nos.phil_label':    'Nuestra filosofía',
      'nos.phil_title':    'Ayudamos a tomar decisiones con claridad',
      'nos.values_label':  'Lo que nos define',
      'nos.values_title':  'Nuestros valores',
      'nos.office_label':  'Dónde estamos',
      'nos.office_title':  'Nuestra oficina en Moguer',
      'nos.team_label':    'Equipo',
      'nos.team_title':    'Las personas detrás de Redondo',
      'nos.office_cta':    'Cómo llegar',
      'nos.cta_title':     '¿Hablamos?',
      'nos.cta_contact':   'Contactar',
      'nos.cta_sell':      'Quiero vender',

      /* Página — Contacto */
      'con.hero_title':    'Hablemos',
      'con.hero_subtitle': 'Sin compromiso. Te escuchamos y te orientamos.',
      'con.card_title':    '¿Cómo podemos ayudarte?',
      'con.name_label':    'Nombre *',
      'con.phone_label':   'Teléfono *',
      'con.email_label':   'Email',
      'con.email_opt':     '(opcional)',
      'con.msg_label':     'Mensaje *',
      'con.submit':        'Enviar mensaje',
      'con.call':          'Llamar',
      'con.whatsapp':      'WhatsApp',

      /* Página — Vender */
      'ven.hero_title':    'Vende tu vivienda en Moguer<br>con un proceso claro y acompañado',
      'ven.hero_subtitle': 'Te ayudamos a valorar, preparar y presentar tu vivienda para encontrar compradores reales, con una gestión cercana y transparente.',

      /* Página — Comprar */
      'com.hero_title':    'Comprar vivienda en Moguer y alrededores',
      'com.hero_subtitle': 'Encuentra casas, pisos y propiedades seleccionadas en Moguer, San Juan del Puerto, Palos de la Frontera, Valverde del Camino, Beas y Trigueros.',

      /* Página — Alquiler */
      'alq.hero_title':    'Alquileres disponibles en Moguer y alrededores',
      'alq.hero_subtitle': 'Consulta las propiedades en alquiler disponibles o contacta con Redondo para que te avisemos cuando entre una vivienda que encaje contigo.',

      /* Sell check-items */
      'sell.check1_title': 'Valoración gratuita y sin compromiso',
      'sell.check1_desc':  'Analizamos tu vivienda y el mercado para fijar el precio óptimo de venta.',
      'sell.check2_title': 'Presentación y difusión profesional',
      'sell.check2_desc':  'Fotografía, descripción y publicación en los principales portales inmobiliarios.',
      'sell.check3_title': 'Gestión de visitas y compradores',
      'sell.check3_desc':  'Coordinamos cada visita y filtramos compradores con capacidad real de compra.',
      'sell.check4_title': 'Acompañamiento hasta el cierre',
      'sell.check4_desc':  'Contratos, notaría y entrega de llaves: estamos contigo en cada trámite.',

      /* Proceso — Comprador */
      'process.buy_eyebrow':   'Si quieres comprar',
      'process.buy_col_title': 'Proceso del comprador',
      'process.buy_s1_title':  'Buscas tu vivienda ideal',
      'process.buy_s1_desc':   'Cuéntanos qué necesitas y te presentamos propiedades que encajan con tu perfil y presupuesto.',
      'process.buy_s2_title':  'Visitas las propiedades',
      'process.buy_s2_desc':   'Organizamos las visitas y resolvemos todas tus dudas sobre cada inmueble.',
      'process.buy_s3_title':  'Te asesoramos en la decisión',
      'process.buy_s3_desc':   'Analizamos contigo la operación: precio, financiación, trámites y condiciones.',
      'process.buy_s4_title':  'Cierras la operación',
      'process.buy_s4_desc':   'Gestionamos contrato, notaría y entrega de llaves. Sin burocracia de tu parte.',

      /* Proceso — Vendedor */
      'process.sell_eyebrow':   'Si quieres vender',
      'process.sell_col_title': 'Proceso del vendedor',
      'process.sell_s1_title':  'Nos cuentas tu caso',
      'process.sell_s1_desc':   'Primera reunión sin compromiso para entender tu situación y objetivos.',
      'process.sell_s2_title':  'Valoramos la vivienda',
      'process.sell_s2_desc':   'Estudio de mercado y tasación orientativa para fijar el precio de salida óptimo.',
      'process.sell_s3_title':  'Preparamos la publicación',
      'process.sell_s3_desc':   'Fotografías, descripción y difusión en portales y nuestra red de contactos.',
      'process.sell_s4_title':  'Gestionamos visitas y ofertas',
      'process.sell_s4_desc':   'Filtramos compradores, coordinamos visitas y negociamos en tu nombre.',
      'process.sell_s5_title':  'Te acompañamos hasta el cierre',
      'process.sell_s5_desc':   'Contratos, notaría y todo lo necesario para que la venta sea segura y tranquila.',

      /* Por qué Redondo — puntos */
      'why.pt1_title': 'Conocimiento real de Moguer y alrededores',
      'why.pt1_desc':  'Conocemos el mercado local en profundidad: precios reales, zonas, evolución y oportunidades.',
      'why.pt2_title': 'Trato cercano y profesional',
      'why.pt2_desc':  'Combinamos rigor y humanidad. Escuchamos antes de actuar y explicamos cada paso.',
      'why.pt3_title': 'Procesos claros y transparentes',
      'why.pt3_desc':  'Sin letra pequeña ni sorpresas. Cada decisión tiene sentido y está justificada.',
      'why.pt4_title': 'Oficina física en Moguer',
      'why.pt4_desc':  'Estamos en Avda. de la Constitución 3. Ven a vernos cuando quieras, sin cita previa.',
      'why.pt5_title': 'Acompañamiento durante todo el proceso',
      'why.pt5_desc':  'No desaparecemos una vez firmado el encargo. Estamos contigo del principio al final.',

      /* Zonas — descripciones */
      'zone.main_tag':      'Principal',
      'zone.moguer_desc':   'Nuestra sede. El corazón de nuestra actividad en la provincia.',
      'zone.sanjuan_desc':  'Buena conexión con Huelva capital y zona residencial en expansión.',
      'zone.palos_desc':    'Municipio costero con gran oferta de vivienda unifamiliar.',
      'zone.valverde_desc': 'Interior de Huelva con precios competitivos y buena calidad de vida.',
      'zone.beas_desc':     'Municipio tranquilo con acceso rápido a la capital y la costa.',
      'zone.trigueros_desc':'Zona rural con encanto y viviendas de gran superficie a buen precio.',
    },

    /* ══ FRANÇAIS ═════════════════════════════════════════════ */
    fr: {
      /* Navegación */
      'nav.inicio':   'Accueil',
      'nav.comprar':  'Acheter',
      'nav.alquilar': 'Louer',
      'nav.vender':   'Vendre',
      'nav.nosotros': 'À propos',
      'nav.contacto': 'Contact',
      'nav.sell_btn': 'Je veux vendre',
      'nav.call_btn': 'Appeler',

      /* Aviso multiidioma */
      'notice': 'Site disponible en espagnol, arabe et français pour faciliter la recherche de biens immobiliers. Le service commercial est principalement assuré en espagnol.',

      /* Hero */
      'hero.label':    'Conseillers Immobiliers à Moguer, Huelva',
      'hero.title':    'À Moguer,<br>de nombreuses portes<br><em>vont s\'ouvrir</em>',
      'hero.subtitle': 'Achetez, vendez ou trouvez votre prochain logement avec une agence immobilière proche, professionnelle et transparente à Moguer.',
      'hero.cta_buy':  'Voir les biens',
      'hero.cta_sell': 'Je veux vendre mon bien',

      /* Buscador */
      'search.op_label':    'Opération',
      'search.op_default':  'Acheter ou louer',
      'search.op_buy':      'Acheter',
      'search.op_rent':     'Louer',
      'search.loc_label':   'Localité',
      'search.loc_default': 'Toute la zone',
      'search.type_label':  'Type',
      'search.type_default':'Tous les types',
      'search.btn':         'Rechercher',

      /* Stats */
      'stats.ops':     'Opérations réalisées',
      'stats.years':   'D\'expérience',
      'stats.clients': 'Clients satisfaits',

      /* Secciones */
      'section.featured_label': 'Propriétés',
      'section.featured_title': 'Sélection de biens',
      'section.featured_all':   'Voir tout',
      'section.zones_label':    'Zone d\'activité',
      'section.zones_title':    'Acheter à Moguer et environs',
      'section.zones_subtitle': 'Nous connaissons chaque quartier et chaque opportunité dans la région de Huelva.',
      'section.sell_label':     'Vendre avec Redondo',
      'section.sell_title':     'Vendez votre bien avec un processus clair et professionnel',
      'section.sell_subtitle':  'Si vous souhaitez vendre, nous vous aidons avec un processus clair, humain et professionnel. Nous estimons votre bien, préparons sa présentation et vous accompagnons à chaque étape.',
      'section.sell_cta':       'Demander une estimation gratuite',
      'section.process_label':    'Notre méthode',
      'section.process_title':    'Un processus clair du début à la fin',
      'section.process_subtitle': 'Sans surprises. Sans complications. Chaque étape expliquée et accompagnée.',
      'section.why_label':    'Pourquoi nous choisir',
      'section.why_title':    'Ce qui nous différencie',
      'section.why_subtitle': 'Redondo est née avec une conviction: les décisions importantes nécessitent clarté, accompagnement et processus bien construits.',
      'section.why_cta':      'Découvrir notre équipe',

      /* Contacto breve */
      'contact_brief.title':      'Prêt à ouvrir une nouvelle porte?',
      'contact_brief.subtitle':   'Dites-nous ce dont vous avez besoin et nous vous conseillons sans engagement.',
      'contact_brief.btn_contact':'Nous contacter',
      'contact_brief.btn_props':  'Voir les biens',

      /* Footer */
      'footer.desc':         'À Moguer, de nombreuses portes vont s\'ouvrir. Votre agence immobilière de confiance à Huelva.',
      'footer.col_buy':      'Acheter',
      'footer.col_services': 'Services',
      'footer.col_company':  'Entreprise',
      'footer.buy_flats':    'Appartements',
      'footer.buy_houses':   'Maisons individuelles',
      'footer.buy_fincas':   'Mas et domaines',
      'footer.buy_locals':   'Locaux commerciaux',
      'footer.svc_rent':     'Location',
      'footer.svc_sell':     'Vendre mon bien',
      'footer.svc_valuation':'Estimations',
      'footer.svc_advice':   'Conseil',
      'footer.co_about':     'Qui sommes-nous',
      'footer.co_team':      'Notre équipe',
      'footer.co_contact':   'Contact',
      'footer.copy':         '© 2025 Asesores Inmobiliarios Redondo. Tous droits réservés.',

      /* Breadcrumbs */
      'bread.inicio':   'Accueil',
      'bread.comprar':  'Acheter',
      'bread.alquiler': 'Louer',
      'bread.vender':   'Vendre',
      'bread.nosotros': 'À propos',
      'bread.contacto': 'Contact',

      /* Nosotros */
      'nos.hero_title':    'Une agence immobilière proche<br>pour des décisions importantes',
      'nos.hero_subtitle': 'Redondo est née avec une idée claire: aider les personnes à prendre des décisions immobilières importantes avec clarté et sérénité.',
      'nos.phil_label':    'Notre philosophie',
      'nos.phil_title':    'Nous aidons à décider en toute clarté',
      'nos.values_label':  'Ce qui nous définit',
      'nos.values_title':  'Nos valeurs',
      'nos.office_label':  'Notre bureau',
      'nos.office_title':  'Nous sommes à Moguer',
      'nos.team_label':    'Qui sommes-nous',
      'nos.team_title':    'L\'équipe',
      'nos.office_cta':    'Comment y aller',
      'nos.cta_title':     'Parlez-nous de votre projet',
      'nos.cta_contact':   'Nous contacter',
      'nos.cta_sell':      'Je veux vendre',

      /* Contacto */
      'con.hero_title':    'Contactez-nous',
      'con.hero_subtitle': 'Sans engagement. Nous vous écoutons et vous orientons.',
      'con.card_title':    'Comment pouvons-nous vous aider?',
      'con.name_label':    'Nom *',
      'con.phone_label':   'Téléphone *',
      'con.email_label':   'E-mail',
      'con.email_opt':     '(facultatif)',
      'con.msg_label':     'Message *',
      'con.submit':        'Envoyer le message',
      'con.call':          'Appeler',
      'con.whatsapp':      'WhatsApp',

      /* Vender */
      'ven.hero_title':    'Vendez votre bien à Moguer<br>avec un processus clair et accompagné',
      'ven.hero_subtitle': 'Nous vous aidons à estimer, préparer et présenter votre bien pour trouver de vrais acheteurs.',

      /* Comprar */
      'com.hero_title':    'Acheter un logement à Moguer et environs',
      'com.hero_subtitle': 'Trouvez maisons, appartements et propriétés sélectionnées à Moguer et dans la région de Huelva.',

      /* Alquiler */
      'alq.hero_title':    'Locations disponibles à Moguer et environs',
      'alq.hero_subtitle': 'Consultez les locations disponibles ou contactez Redondo pour être alerté dès qu\'un bien correspondant à votre profil est disponible.',

      /* Sell check-items */
      'sell.check1_title': 'Estimation gratuite et sans engagement',
      'sell.check1_desc':  'Nous analysons votre bien et le marché pour fixer le prix de vente optimal.',
      'sell.check2_title': 'Présentation et diffusion professionnelle',
      'sell.check2_desc':  'Photographie, description et publication sur les principaux portails immobiliers.',
      'sell.check3_title': 'Gestion des visites et des acheteurs',
      'sell.check3_desc':  'Nous coordonnons chaque visite et sélectionnons les acheteurs avec une réelle capacité d\'achat.',
      'sell.check4_title': 'Accompagnement jusqu\'à la clôture',
      'sell.check4_desc':  'Contrats, notaire et remise des clés : nous sommes à vos côtés à chaque étape.',

      /* Proceso — Comprador */
      'process.buy_eyebrow':   'Si vous voulez acheter',
      'process.buy_col_title': 'Processus d\'achat',
      'process.buy_s1_title':  'Trouvez le logement idéal',
      'process.buy_s1_desc':   'Dites-nous ce dont vous avez besoin et nous vous présentons des biens adaptés à votre profil et budget.',
      'process.buy_s2_title':  'Visitez les biens',
      'process.buy_s2_desc':   'Nous organisons les visites et répondons à toutes vos questions sur chaque bien.',
      'process.buy_s3_title':  'Nous vous conseillons',
      'process.buy_s3_desc':   'Nous analysons avec vous l\'opération : prix, financement, démarches et conditions.',
      'process.buy_s4_title':  'Finalisez l\'achat',
      'process.buy_s4_desc':   'Nous gérons le contrat, le notaire et la remise des clés. Sans paperasse de votre côté.',

      /* Proceso — Vendedor */
      'process.sell_eyebrow':   'Si vous voulez vendre',
      'process.sell_col_title': 'Processus de vente',
      'process.sell_s1_title':  'Partagez votre situation',
      'process.sell_s1_desc':   'Premier entretien sans engagement pour comprendre votre situation et vos objectifs.',
      'process.sell_s2_title':  'Nous estimons le bien',
      'process.sell_s2_desc':   'Étude de marché et estimation indicative pour fixer le prix de mise en vente optimal.',
      'process.sell_s3_title':  'Nous préparons la publication',
      'process.sell_s3_desc':   'Photos, description et diffusion sur les portails et notre réseau de contacts.',
      'process.sell_s4_title':  'Gestion des visites et des offres',
      'process.sell_s4_desc':   'Nous filtrons les acheteurs, coordonnons les visites et négocions en votre nom.',
      'process.sell_s5_title':  'Jusqu\'à la signature finale',
      'process.sell_s5_desc':   'Contrats, notaire et tout ce qu\'il faut pour que la vente se passe sereinement.',

      /* Por qué Redondo — puntos */
      'why.pt1_title': 'Vraie connaissance de Moguer et environs',
      'why.pt1_desc':  'Nous connaissons le marché local en profondeur : prix réels, zones, évolution et opportunités.',
      'why.pt2_title': 'Un suivi humain et professionnel',
      'why.pt2_desc':  'Nous combinons rigueur et humanité. Nous écoutons avant d\'agir et expliquons chaque étape.',
      'why.pt3_title': 'Processus clairs et transparents',
      'why.pt3_desc':  'Pas de mauvaises surprises. Chaque décision a du sens et est justifiée.',
      'why.pt4_title': 'Bureau physique à Moguer',
      'why.pt4_desc':  'Nous sommes Avda. de la Constitución 3. Venez nous voir quand vous voulez, sans rendez-vous.',
      'why.pt5_title': 'Accompagnement tout au long du processus',
      'why.pt5_desc':  'Nous ne disparaissons pas après la signature. Nous sommes avec vous du début à la fin.',

      /* Zonas — descripciones */
      'zone.main_tag':      'Principal',
      'zone.moguer_desc':   'Notre siège. Le cœur de notre activité dans la province.',
      'zone.sanjuan_desc':  'Bonne connexion avec Huelva et zone résidentielle en expansion.',
      'zone.palos_desc':    'Commune côtière avec une grande offre de maisons individuelles.',
      'zone.valverde_desc': 'Intérieur de Huelva avec des prix compétitifs et une bonne qualité de vie.',
      'zone.beas_desc':     'Commune tranquille avec un accès rapide à la capitale et à la côte.',
      'zone.trigueros_desc':'Zone rurale pleine de charme avec de grandes propriétés à bon prix.',
    },

    /* ══ العربية ══════════════════════════════════════════════ */
    ar: {
      dir: 'rtl',

      /* Navegación */
      'nav.inicio':   'الرئيسية',
      'nav.comprar':  'شراء',
      'nav.alquilar': 'إيجار',
      'nav.vender':   'بيع',
      'nav.nosotros': 'من نحن',
      'nav.contacto': 'اتصل بنا',
      'nav.sell_btn': 'أريد البيع',
      'nav.call_btn': 'اتصل',

      /* Aviso multiidioma */
      'notice': 'هذا الموقع متاح باللغات الإسبانية والعربية والفرنسية لتسهيل الاطلاع على العقارات. خدمة العملاء تتم بشكل رئيسي باللغة الإسبانية.',

      /* Hero */
      'hero.label':    'مستشارو العقارات في موغير، هويلبا',
      'hero.title':    'في موغير<br>ستُفتح أمامك<br><em>أبواب كثيرة</em>',
      'hero.subtitle': 'اشترِ أو بِع أو اعثر على مسكنك القادم مع وكالة عقارية قريبة ومحترفة وشفافة في موغير وما حولها.',
      'hero.cta_buy':  'استعرض العقارات',
      'hero.cta_sell': 'أريد بيع منزلي',

      /* Buscador */
      'search.op_label':    'النوع',
      'search.op_default':  'شراء أو إيجار',
      'search.op_buy':      'شراء',
      'search.op_rent':     'إيجار',
      'search.loc_label':   'المنطقة',
      'search.loc_default': 'كل المناطق',
      'search.type_label':  'النوع',
      'search.type_default':'جميع الأنواع',
      'search.btn':         'بحث',

      /* Stats */
      'stats.ops':     'صفقة منجزة',
      'stats.years':   'سنة خبرة',
      'stats.clients': 'عملاء راضون',

      /* Secciones */
      'section.featured_label': 'العقارات',
      'section.featured_title': 'عقارات مختارة',
      'section.featured_all':   'عرض الكل',
      'section.zones_label':    'منطقة العمل',
      'section.zones_title':    'اشترِ في موغير وما حولها',
      'section.zones_subtitle': 'نعرف كل حي وكل فرصة في منطقة هويلبا.',
      'section.sell_label':     'البيع مع ريدوندو',
      'section.sell_title':     'بِع عقارك بعملية واضحة ومهنية',
      'section.sell_subtitle':  'إذا كنت تفكر في بيع عقارك، نساعدك بعملية واضحة وقريبة ومهنية. نقيّم عقارك ونجهّز عرضه ونرافقك في كل خطوة.',
      'section.sell_cta':       'طلب تقييم مجاني',
      'section.process_label':    'طريقة عملنا',
      'section.process_title':    'عملية واضحة من البداية إلى النهاية',
      'section.process_subtitle': 'بدون مفاجآت. بدون تعقيدات. كل خطوة موضحة ومرافقة.',
      'section.why_label':    'لماذا تختارنا',
      'section.why_title':    'ما يميزنا',
      'section.why_subtitle': 'ريدوندو نشأت بقناعة واضحة: القرارات المهمة تحتاج وضوحًا ومرافقةً وعملًا احترافيًا.',
      'section.why_cta':      'تعرف على فريقنا',

      /* Contacto breve */
      'contact_brief.title':      'هل أنت مستعد لفتح باب جديد؟',
      'contact_brief.subtitle':   'أخبرنا بما تحتاجه وسنقدم لك المشورة دون التزام.',
      'contact_brief.btn_contact':'تواصل معنا',
      'contact_brief.btn_props':  'استعرض العقارات',

      /* Footer */
      'footer.desc':         'في موغير ستُفتح أمامك أبواب كثيرة. وكالتك العقارية الموثوقة في هويلبا.',
      'footer.col_buy':      'شراء',
      'footer.col_services': 'خدمات',
      'footer.col_company':  'الشركة',
      'footer.buy_flats':    'شقق وأبارتمانات',
      'footer.buy_houses':   'فلل ومنازل',
      'footer.buy_fincas':   'مزارع وأراضٍ',
      'footer.buy_locals':   'محلات تجارية',
      'footer.svc_rent':     'إيجار',
      'footer.svc_sell':     'بيع منزلي',
      'footer.svc_valuation':'التقييم',
      'footer.svc_advice':   'الاستشارة',
      'footer.co_about':     'من نحن',
      'footer.co_team':      'فريقنا',
      'footer.co_contact':   'اتصل بنا',
      'footer.copy':         '© 2025 Asesores Inmobiliarios Redondo. جميع الحقوق محفوظة.',

      /* Breadcrumbs */
      'bread.inicio':   'الرئيسية',
      'bread.comprar':  'شراء',
      'bread.alquiler': 'إيجار',
      'bread.vender':   'بيع',
      'bread.nosotros': 'من نحن',
      'bread.contacto': 'اتصل',

      /* Nosotros */
      'nos.hero_title':    'وكالة عقارية قريبة<br>لقرارات مهمة',
      'nos.hero_subtitle': 'ريدوندو نشأت بفكرة واضحة: مساعدة الناس على اتخاذ قرارات عقارية مهمة بوضوح وطمأنينة ومرافقة.',
      'nos.phil_label':    'فلسفتنا',
      'nos.phil_title':    'نساعدك على اتخاذ قرارات بوضوح',
      'nos.values_label':  'ما يميزنا',
      'nos.values_title':  'قيمنا',
      'nos.office_label':  'مكتبنا',
      'nos.office_title':  'نحن في موغير',
      'nos.team_label':    'من نحن',
      'nos.team_title':    'الفريق',
      'nos.office_cta':    'كيف تصل إلينا',
      'nos.cta_title':     'أخبرنا بما تحتاجه',
      'nos.cta_contact':   'تواصل معنا',
      'nos.cta_sell':      'أريد البيع',

      /* Contacto */
      'con.hero_title':    'تواصل معنا',
      'con.hero_subtitle': 'بدون التزام. نستمع إليك ونوجهك.',
      'con.card_title':    'كيف يمكننا مساعدتك؟',
      'con.name_label':    'الاسم *',
      'con.phone_label':   'الهاتف *',
      'con.email_label':   'البريد الإلكتروني',
      'con.email_opt':     '(اختياري)',
      'con.msg_label':     'الرسالة *',
      'con.submit':        'إرسال الرسالة',
      'con.call':          'اتصل',
      'con.whatsapp':      'واتساب',

      /* Vender */
      'ven.hero_title':    'بِع عقارك في موغير<br>بعملية واضحة ومرافقة',
      'ven.hero_subtitle': 'نساعدك في تقييم عقارك وتجهيزه وتقديمه للعثور على مشترين حقيقيين.',

      /* Comprar */
      'com.hero_title':    'شراء عقار في موغير وما حولها',
      'com.hero_subtitle': 'اعثر على منازل وشقق وعقارات مختارة في موغير ومنطقة هويلبا.',

      /* Alquiler */
      'alq.hero_title':    'إيجارات متاحة في موغير وما حولها',
      'alq.hero_subtitle': 'تصفح العقارات المتاحة للإيجار أو تواصل مع ريدوندو لنُعلمك فور توفر عقار يناسبك.',

      /* Sell check-items */
      'sell.check1_title': 'تقييم مجاني وبدون التزام',
      'sell.check1_desc':  'نحلل عقارك والسوق لتحديد سعر البيع الأمثل.',
      'sell.check2_title': 'تقديم ونشر احترافي',
      'sell.check2_desc':  'تصوير وتوصيف ونشر على أبرز بوابات العقارات.',
      'sell.check3_title': 'إدارة الزيارات والمشترين',
      'sell.check3_desc':  'ننسق كل زيارة ونختار المشترين ذوي القدرة الشرائية الفعلية.',
      'sell.check4_title': 'مرافقة حتى إتمام الصفقة',
      'sell.check4_desc':  'العقود والكاتب العدل وتسليم المفاتيح: نحن بجانبك في كل خطوة.',

      /* Proceso — Comprador */
      'process.buy_eyebrow':   'إذا أردت الشراء',
      'process.buy_col_title': 'مسار المشتري',
      'process.buy_s1_title':  'ابحث عن منزلك المثالي',
      'process.buy_s1_desc':   'أخبرنا بما تحتاجه وسنعرض عليك عقارات تناسب ملفك وميزانيتك.',
      'process.buy_s2_title':  'زر العقارات',
      'process.buy_s2_desc':   'ننظم الزيارات ونجيب على جميع أسئلتك حول كل عقار.',
      'process.buy_s3_title':  'نقدم لك المشورة',
      'process.buy_s3_desc':   'نحلل معك العملية: السعر والتمويل والإجراءات والشروط.',
      'process.buy_s4_title':  'أتمّ الصفقة',
      'process.buy_s4_desc':   'نتولى العقد والكاتب العدل وتسليم المفاتيح. بدون إجراءات من جانبك.',

      /* Proceso — Vendedor */
      'process.sell_eyebrow':   'إذا أردت البيع',
      'process.sell_col_title': 'مسار البائع',
      'process.sell_s1_title':  'أخبرنا بحالتك',
      'process.sell_s1_desc':   'لقاء أول بدون التزام لفهم وضعك وأهدافك.',
      'process.sell_s2_title':  'نقيّم العقار',
      'process.sell_s2_desc':   'دراسة السوق وتقييم استرشادي لتحديد سعر البيع الأمثل.',
      'process.sell_s3_title':  'نجهّز النشر',
      'process.sell_s3_desc':   'تصوير وتوصيف ونشر على البوابات وشبكة اتصالاتنا.',
      'process.sell_s4_title':  'ندير الزيارات والعروض',
      'process.sell_s4_desc':   'نختار المشترين وننسق الزيارات ونتفاوض نيابةً عنك.',
      'process.sell_s5_title':  'نرافقك حتى إتمام الصفقة',
      'process.sell_s5_desc':   'العقود وكل ما يلزم لجعل البيع آمناً وهادئاً.',

      /* Por qué Redondo — puntos */
      'why.pt1_title': 'معرفة حقيقية بموغير وما حولها',
      'why.pt1_desc':  'نعرف السوق المحلي بعمق: الأسعار الحقيقية والمناطق والتطور والفرص.',
      'why.pt2_title': 'تعامل قريب ومهني',
      'why.pt2_desc':  'نجمع بين الدقة والإنسانية. نستمع قبل أن نتصرف ونشرح كل خطوة.',
      'why.pt3_title': 'عمليات واضحة وشفافة',
      'why.pt3_desc':  'بدون شروط مخفية أو مفاجآت. كل قرار له معنى وتبرير.',
      'why.pt4_title': 'مكتب فعلي في موغير',
      'why.pt4_desc':  'نحن في شارع الدستور 3. تفضل بزيارتنا متى شئت بدون موعد مسبق.',
      'why.pt5_title': 'مرافقة طوال العملية',
      'why.pt5_desc':  'لا نختفي بعد توقيع العقد. نحن معك من البداية حتى النهاية.',

      /* Zonas — descripciones */
      'zone.main_tag':      'رئيسية',
      'zone.moguer_desc':   'مقرنا الرئيسي. قلب نشاطنا في المقاطعة.',
      'zone.sanjuan_desc':  'اتصال جيد بعاصمة هويلبا ومنطقة سكنية في توسع.',
      'zone.palos_desc':    'بلدية ساحلية تتوفر على عروض واسعة من المنازل المستقلة.',
      'zone.valverde_desc': 'داخل هويلبا بأسعار تنافسية وجودة حياة مرتفعة.',
      'zone.beas_desc':     'بلدية هادئة ذات وصول سريع إلى العاصمة والساحل.',
      'zone.trigueros_desc':'منطقة ريفية ذات سحر خاص وعقارات واسعة بأسعار معقولة.',
    }
  };

  /* ── Estado ─────────────────────────────────────────────────── */
  var current = 'es';

  /* ── Aplicar traducciones al DOM ────────────────────────────── */
  function applyTranslations() {
    var dict = T[current];

    /* Texto plano */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* HTML (elementos con <br>, <em>…) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* Placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    /* Select options especiales (buscador) */
    applySearchOptions(dict);
  }

  /* ── Opciones del buscador ──────────────────────────────────── */
  function applySearchOptions(dict) {
    var opSel = document.getElementById('s-operacion');
    if (opSel && opSel.options.length >= 3) {
      opSel.options[0].textContent = dict['search.op_default'] || opSel.options[0].textContent;
      opSel.options[1].textContent = dict['search.op_buy']     || opSel.options[1].textContent;
      opSel.options[2].textContent = dict['search.op_rent']    || opSel.options[2].textContent;
    }
    var locSel = document.getElementById('s-localidad');
    if (locSel && locSel.options.length >= 1) {
      locSel.options[0].textContent = dict['search.loc_default'] || locSel.options[0].textContent;
    }
    var typeSel = document.getElementById('s-tipo');
    if (typeSel && typeSel.options.length >= 1) {
      typeSel.options[0].textContent = dict['search.type_default'] || typeSel.options[0].textContent;
    }
  }

  /* ── Cambiar idioma ─────────────────────────────────────────── */
  function setLang(lang) {
    if (!T[lang]) return;
    current = lang;
    var dir = T[lang].dir || 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir  = dir;
    try { localStorage.setItem('redondo_lang', lang); } catch (e) {}

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyTranslations();
  }

  /* ── Función pública t() ─────────────────────────────────────── */
  function t(key) {
    return T[current][key] !== undefined ? T[current][key] : key;
  }

  /* ── Init: restaurar idioma de localStorage ─────────────────── */
  function initLang() {
    var saved = 'es';
    try { saved = localStorage.getItem('redondo_lang') || 'es'; } catch (e) {}
    setLang(T[saved] ? saved : 'es');
  }

  document.addEventListener('DOMContentLoaded', initLang);

  return { setLang: setLang, t: t, get lang() { return current; } };

})();
