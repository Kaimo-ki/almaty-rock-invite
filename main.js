(() => {
  const config = window.CONCERT_CONFIG || {};
  const toast = document.querySelector(".toast");
  const languageKey = "tuis-music-language";
  let toastTimer;

  const copy = {
    kk: {
      pageTitle: "ТУЫС — ATU Music Club × TWO’US Алматыда",
      metaDescription: "ТУЫС — Алматыда өтетін ATU Music Club пен TWO’US концерті. 2026 жылғы 20 қараша, сағат 18:00. Кіру тегін.",
      partnerAria: "ATU және Music Club логотиптері",
      atuLogoAlt: "Алматы технологиялық университетінің логотипі",
      clubLogoAlt: "ATU Music Club логотипі",
      atuLinkAria: "ATU сайтына өту",
      clubLinkAria: "ATU Music Club Instagram парақшасына өту",
      navAria: "Негізгі мәзір",
      navConcert: "КОНЦЕРТ",
      navMerey: "MEREY",
      navCollab: "КОЛЛАБ",
      languageAria: "Бет тілі",
      heroEyebrow: "УНИВЕРСИТЕТТІК МУЗЫКАЛЫҚ КОНЦЕРТ",
      heroSubtitle: "Бір сахна. Жанды музыка. Алматы.",
      dateLabel: "КҮНІ",
      timeLabel: "БАСТАЛУЫ",
      mapShort: "КАРТАДАН КӨРУ",
      venueJump: "ӨТЕТІН ОРЫН",
      modelAlt: "ATU университеті кампусының интерактивті 3D-моделі",
      modelCaption: "ATU · 3D КАМПУС",
      eventIndex: "01 — КОНЦЕРТ",
      eventTitle: "КОНЦЕРТ ТУРАЛЫ",
      eventIntro: "Мекенжай, тегін кіру және 2GIS-тегі бағыт.",
      venueLabel: "ӨТЕТІН ОРЫН",
      routeLabel: "2GIS-ТЕ МАРШРУТ ҚҰРУ",
      entryLabel: "КІРУ",
      artistIndex: "02 — БАСТЫ ҚОНАҚ",
      headlinerTag: "БАСТЫ ҚОНАҚ",
      mereyPhotoAlt: "MEREY концерт кешінде",
      artistIntro: "«Туыс» кешінің басты қонағы. MEREY жайлы Instagram-нан біліп, әндерін төмендегі сілтемелер арқылы тыңда.",
      artistInstagram: "MEREY INSTAGRAM-ДА",
      listenLabel: "YOUTUBE-ТАН ТЫҢДАУ ↗",
      collabIndex: "03 — БІР САХНАДА",
      collabEyebrow: "ATU MUSIC CLUB-ПЕН БІРЛЕСКЕН КОНЦЕРТ",
      bandStory: "TWO’US тобы 2023 жылы құрылған. «Туыс» концертінде топ ATU Music Club-пен бірге өнер көрсетеді.",
      bandInstagram: "TWO’US INSTAGRAM-ДА",
      clubInstagram: "ATU MUSIC CLUB INSTAGRAM-ДА",
      bandPhotoAlt: "TWO’US тобының мүшелері",
      bandPhotoAltTwo: "TWO’US қатысушылары бірге",
      bandCaptionOne: "TWO’US · ЖАНДЫ ӘУЕН",
      bandCaptionTwo: "АЛМАТЫ · 2026",
      thanksText: "Осы концертті өткізуге мүмкіндік бергені үшін ATU-ға алғыс айтамыз.",
      footerNote: "Сол жерде кездескенше.",
      toTop: "ЖОҒАРЫ ↑",
      mapFallback: "2GIS картасы ашылмады. Мекенжай: Төле би көшесі, 100, Алматы.",
      routeFallback: "Маршрутты ашу мүмкін болмады. Мекенжай: Төле би көшесі, 100, Алматы."
    },
    ru: {
      pageTitle: "ТУЫС — ATU Music Club × TWO’US в Алматы",
      metaDescription: "ТУЫС — концерт ATU Music Club и TWO’US в Алматы. 20 ноября 2026 года, начало в 18:00. Вход свободный.",
      partnerAria: "Логотипы ATU и Music Club",
      atuLogoAlt: "Логотип Алматинского технологического университета",
      clubLogoAlt: "Логотип ATU Music Club",
      atuLinkAria: "Открыть сайт ATU",
      clubLinkAria: "Открыть Instagram ATU Music Club",
      navAria: "Основная навигация",
      navConcert: "КОНЦЕРТ",
      navMerey: "MEREY",
      navCollab: "КОЛЛАБ",
      languageAria: "Язык страницы",
      heroEyebrow: "УНИВЕРСИТЕТСКИЙ МУЗЫКАЛЬНЫЙ КОНЦЕРТ",
      heroSubtitle: "Одна сцена. Живой звук. Алматы.",
      dateLabel: "ДАТА",
      timeLabel: "НАЧАЛО",
      mapShort: "ОТКРЫТЬ НА КАРТЕ",
      venueJump: "МЕСТО ПРОВЕДЕНИЯ",
      modelAlt: "Интерактивная 3D-модель кампуса ATU",
      modelCaption: "КАМПУС ATU · 3D",
      eventIndex: "01 — КОНЦЕРТ",
      eventTitle: "О КОНЦЕРТЕ",
      eventIntro: "Адрес, свободный вход и маршрут в 2GIS.",
      venueLabel: "МЕСТО ПРОВЕДЕНИЯ",
      routeLabel: "ПОСТРОИТЬ МАРШРУТ В 2GIS",
      entryLabel: "ВХОД",
      artistIndex: "02 — ХЕДЛАЙНЕР",
      headlinerTag: "ХЕДЛАЙНЕР",
      mereyPhotoAlt: "MEREY на музыкальном мероприятии",
      artistIntro: "Хедлайнер концерта «Туыс». Узнай больше о MEREY в Instagram и послушай её песни по ссылкам ниже.",
      artistInstagram: "MEREY В INSTAGRAM",
      listenLabel: "СЛУШАТЬ НА YOUTUBE ↗",
      collabIndex: "03 — НА ОДНОЙ СЦЕНЕ",
      collabEyebrow: "КОЛЛАБ-КОНЦЕРТ С ATU MUSIC CLUB",
      bandStory: "Группа TWO’US появилась в 2023 году. На концерте «Туыс» она выступит вместе с ATU Music Club.",
      bandInstagram: "TWO’US В INSTAGRAM",
      clubInstagram: "ATU MUSIC CLUB В INSTAGRAM",
      bandPhotoAlt: "Участники группы TWO’US",
      bandPhotoAltTwo: "Участники TWO’US вместе",
      bandCaptionOne: "TWO’US · ЖИВОЕ ВЫСТУПЛЕНИЕ",
      bandCaptionTwo: "АЛМАТЫ · 2026",
      thanksText: "Спасибо ATU за возможность провести этот концерт.",
      footerNote: "Увидимся там.",
      toTop: "НАВЕРХ ↑",
      mapFallback: "Не удалось открыть 2GIS. Адрес: Алматы, ул. Толе би, 100.",
      routeFallback: "Не удалось открыть маршрут. Адрес: Алматы, ул. Толе би, 100."
    }
  };

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  function applyLanguage(language, save) {
    const selected = language === "ru" ? "ru" : "kk";
    const strings = copy[selected];
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = strings[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = strings[element.dataset.i18nAria];
      if (value) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = strings[element.dataset.i18nAlt];
      if (value) element.setAttribute("alt", value);
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
        // The language switch still works if browser storage is unavailable.
      }
    }
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  let savedLanguage = "kk";
  try {
    savedLanguage = window.localStorage.getItem(languageKey) || "kk";
  } catch (error) {
    // Default to Kazakh if browser storage is unavailable.
  }
  applyLanguage(savedLanguage, false);

  document.querySelectorAll("[data-map]").forEach((link) => {
    if (config.twoGisUrl) {
      link.href = config.twoGisUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(copy[document.documentElement.lang].mapFallback);
      });
    }
  });

  document.querySelectorAll("[data-map-route]").forEach((link) => {
    if (config.twoGisRouteUrl) {
      link.href = config.twoGisRouteUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(copy[document.documentElement.lang].routeFallback);
      });
    }
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelector("model-viewer")?.removeAttribute("auto-rotate");
  }
})();
