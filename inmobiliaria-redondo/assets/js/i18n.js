/* i18n.js — skeleton ES / FR / AR (namespace global window.I18n) */

window.I18n = (function () {
  const TRANSLATIONS = {
    es: {
      nav: {
        inicio: 'Inicio', comprar: 'Comprar', alquilar: 'Alquilar',
        vender: 'Vender', nosotros: 'Nosotros', contacto: 'Contacto'
      },
      hero: {
        label: 'Asesores inmobiliarios en Moguer',
        title: 'En Moguer se van a abrir muchas puertas',
        subtitle: 'Te acompañamos en cada paso de la compra, venta o alquiler con transparencia, rigor y cercanía.',
        cta_buy: 'Ver propiedades', cta_sell: 'Vender mi casa'
      }
    },
    fr: {
      nav: {
        inicio: 'Accueil', comprar: 'Acheter', alquilar: 'Louer',
        vender: 'Vendre', nosotros: 'À propos', contacto: 'Contact'
      },
      hero: {
        label: 'Conseillers immobiliers à Moguer',
        title: 'À Moguer, de nombreuses portes vont s\'ouvrir',
        subtitle: 'Nous vous accompagnons à chaque étape de l\'achat, la vente ou la location.',
        cta_buy: 'Voir les biens', cta_sell: 'Vendre mon bien'
      }
    },
    ar: {
      dir: 'rtl',
      nav: {
        inicio: 'الرئيسية', comprar: 'شراء', alquilar: 'إيجار',
        vender: 'بيع', nosotros: 'عنا', contacto: 'اتصل بنا'
      },
      hero: {
        label: 'مستشارو العقارات في موغير',
        title: 'في موغير ستُفتح أمامك أبواب كثيرة',
        subtitle: 'نرافقك في كل خطوة من خطوات الشراء أو البيع أو الإيجار.',
        cta_buy: 'استعرض العقارات', cta_sell: 'بيع منزلي'
      }
    }
  };

  let current = 'es';

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    current = lang;
    const dir = TRANSLATIONS[lang].dir || 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    /* TODO: aplicar traducciones al DOM (fases siguientes) */
  }

  function t(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[current];
    for (const k of keys) value = value?.[k];
    return value ?? key;
  }

  return { setLang, t, get lang() { return current; } };
})();
