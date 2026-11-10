(() => {
  const config = window.CONCERT_CONFIG || {};
  const toast = document.querySelector(".toast");
  const languageKey = "almaty-rock-invite-language";
  let toastTimer;

  const copy = {
    ru: {
      pageTitle: "TWO’US × ATU MUSIC CLUB — концерт в Алматы",
      metaDescription: "TWO’US × ATU Music Club — университетский музыкальный концерт в Алматы. 20 ноября 2026, 18:00. Вход свободный.",
      brandAria: "TWO’US — наверх",
      brandSub: "LIVE MUSIC",
      navAria: "Основная навигация",
      navDetails: "ДЕТАЛИ",
      navLineup: "АРТИСТЫ",
      navMusic: "МУЗЫКА",
      languageAria: "Язык страницы",
      heroTopline: "АЛМАТЫ",
      heroEyebrow: "УНИВЕРСИТЕТСКИЙ КОНЦЕРТ",
      heroTitleLine: "LIVE NIGHT",
      heroDescription: "Музыка, которая собирает нас вместе.",
      mapShort: "ОТКРЫТЬ МЕСТО В 2GIS",
      mapRouteLabel: "ПОСТРОИТЬ МАРШРУТ В 2GIS",
      roomPhotoAlt: "TWO’US в большом зале университета",
      scrollLabel: "ЛИСТАЙ",
      detailsIndex: "01",
      detailsTitleTop: "Детали концерта.",
      entryLabel: "ВХОД",
      whereLabel: "ГДЕ",
      lineupIndex: "02",
      lineupTitleTop: "На сцене.",
      bandPhotoAlt: "Участники группы TWO’US",
      bandDescription: "История TWO’US началась в 2023 году — тогда музыканты объединились в группу. На концерте «Туыс» они выступят вместе с ATU Music Club, а хедлайнером вечера будет MEREY.",
      bandInstagram: "INSTAGRAM TWO’US",
      clubInstagram: "ATU MUSIC CLUB",
      bandPhotoAltTwo: "Участники группы TWO’US на совместной фотографии",
      artistIndex: "03 — ХЕДЛАЙНЕР",
      artistIntro: "Казахстанская певица и автор песен. Послушай её треки перед концертом.",
      artistInstagram: "INSTAGRAM",
      trackLabel: "ТРЕК 01",
      trackLabelTwo: "ТРЕК 02",
      listenLabel: "СЛУШАТЬ НА YOUTUBE ↗",
      thanksText: "Спасибо ATU за возможность провести этот концерт.",
      footerNote: "Увидимся там.",
      toTop: "НАВЕРХ ↑",
      posterAria: "Афиша концерта",
      posterAlt: "Афиша концерта TWO’US, Music Club ATU и MEREY",
    },
    kk: {
      pageTitle: "TWO’US × ATU MUSIC CLUB — Алматыдағы концерт",
      metaDescription: "TWO’US × ATU Music Club — Алматыдағы университеттік музыкалық концерт. 2026 жылғы 20 қараша, 18:00. Кіру тегін.",
      brandAria: "TWO’US — жоғарыға",
      brandSub: "LIVE MUSIC",
      navAria: "Негізгі мәзір",
      navDetails: "ТОЛЫҒЫРАҚ",
      navLineup: "ОРЫНДАУШЫЛАР",
      navMusic: "ӘНДЕР",
      languageAria: "Бет тілі",
      heroTopline: "АЛМАТЫ",
      heroEyebrow: "УНИВЕРСИТЕТТІК КОНЦЕРТ",
      heroTitleLine: "LIVE NIGHT",
      heroDescription: "Бізді біріктіретін музыка.",
      mapShort: "ОРНЫН 2GIS-ТЕ АШУ",
      mapRouteLabel: "2GIS-ТЕ МАРШРУТ ҚҰРУ",
      roomPhotoAlt: "TWO’US университеттің үлкен залында",
      scrollLabel: "ТӨМЕН",
      detailsIndex: "01",
      detailsTitleTop: "Концерт туралы.",
      entryLabel: "КІРУ",
      whereLabel: "ҚАЙДА",
      lineupIndex: "02",
      lineupTitleTop: "Сахнада.",
      bandPhotoAlt: "TWO’US тобының мүшелері",
      bandDescription: "TWO’US тобының тарихы 2023 жылы басталды: сол жылы музыканттар бір ұжымға бірікті. «Туыс» концертінде топ ATU Music Club-пен бірге өнер көрсетеді, ал кештің хедлайнері — MEREY.",
      bandInstagram: "TWO’US INSTAGRAM-ДА",
      clubInstagram: "ATU MUSIC CLUB",
      bandPhotoAltTwo: "TWO’US тобы мүшелерінің ортақ суреті",
      artistIndex: "03 — ХЕДЛАЙНЕР",
      artistIntro: "Қазақстандық әнші әрі ән авторы. Концерт алдында оның әндерін тыңдап көр.",
      artistInstagram: "INSTAGRAM",
      trackLabel: "ӘН 01",
      trackLabelTwo: "ӘН 02",
      listenLabel: "YOUTUBE-ТАН ТЫҢДАУ ↗",
      thanksText: "Осы концертті өткізуге мүмкіндік бергені үшін ATU-ға рақмет.",
      footerNote: "Сол жерде кездескенше",
      toTop: "ЖОҒАРЫ ↑",
      posterAria: "Концерт афишасы",
      posterAlt: "TWO’US, ATU Music Club және MEREY концертіне арналған афиша",
    }
  };

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  function applyLanguage(language, save) {
    const selected = language === "kk" ? "kk" : "ru";
    const strings = copy[selected];
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (strings[key]) element.textContent = strings[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (strings[key]) element.setAttribute("aria-label", strings[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (strings[key]) element.setAttribute("alt", strings[key]);
    });
    document.querySelectorAll("[data-config]").forEach((element) => {
      const value = config[element.dataset.config];
      const localizedValue = value && typeof value === "object" ? value[selected] : value;
      if (typeof localizedValue === "string") element.textContent = localizedValue;
    });

    document.title = strings.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (description) description.content = strings.metaDescription;
    if (ogTitle) ogTitle.content = strings.pageTitle;
    if (ogDescription) ogDescription.content = strings.metaDescription;
    if (ogLocale) ogLocale.content = selected === "kk" ? "kk_KZ" : "ru_KZ";

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });
    if (save) {
      try {
        window.localStorage.setItem(languageKey, selected);
      } catch (error) {
        // The language switch still works when storage is unavailable.
      }
    }
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  let savedLanguage = "ru";
  try {
    savedLanguage = window.localStorage.getItem(languageKey) || "ru";
  } catch (error) {
    // Default to Russian if storage is unavailable.
  }
  applyLanguage(savedLanguage, false);

  document.querySelectorAll("[data-map]").forEach((map) => {
    if (config.twoGisUrl) {
      map.href = config.twoGisUrl;
      map.target = "_blank";
      map.rel = "noopener noreferrer";
    } else {
      map.setAttribute("aria-disabled", "true");
      map.classList.add("is-disabled");
      map.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("Ссылка на карту скоро появится.");
      });
    }
  });

  document.querySelectorAll("[data-map-route]").forEach((map) => {
    if (config.twoGisRouteUrl) {
      map.href = config.twoGisRouteUrl;
      map.target = "_blank";
      map.rel = "noopener noreferrer";
    } else {
      map.setAttribute("aria-disabled", "true");
      map.classList.add("is-disabled");
      map.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("Ссылка на маршрут скоро появится.");
      });
    }
  });

  const hero = document.querySelector(".hero");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (hero && !reduceMotion && finePointer) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--far-x", (x * -10) + "px");
      hero.style.setProperty("--near-x", (x * 17) + "px");
      hero.style.setProperty("--photo-x", (x * 5) + "px");
      hero.style.setProperty("--photo-y", (y * -4) + "px");
      hero.style.setProperty("--parallax-x", (x * 9) + "px");
      hero.style.setProperty("--parallax-y", (y * 7) + "px");
    });
    hero.addEventListener("pointerleave", () => {
      ["--far-x", "--near-x", "--photo-x", "--photo-y", "--parallax-x", "--parallax-y"].forEach((name) => hero.style.removeProperty(name));
    });
  }
})();
