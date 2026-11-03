(() => {
  const config = window.CONCERT_CONFIG || {};
  const toast = document.querySelector(".toast");
  const contactNote = document.querySelector("[data-contact-note]");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  document.querySelectorAll("[data-config]").forEach((element) => {
    const value = config[element.dataset.config];
    if (typeof value === "string" && value.length) element.textContent = value;
  });

  const whatsapp = document.querySelector("[data-whatsapp]");
  const phone = String(config.whatsappNumber || "").replace(/\D/g, "");
  if (whatsapp && phone) {
    const message = encodeURIComponent(config.whatsappMessage || "Привет! Хочу узнать о концерте.");
    whatsapp.href = `https://wa.me/${phone}?text=${message}`;
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.removeAttribute("aria-disabled");
  } else if (whatsapp) {
    whatsapp.setAttribute("aria-disabled", "true");
    whatsapp.classList.add("is-disabled");
    whatsapp.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Добавим номер организатора перед открытием записи.");
    });
  }

  const map = document.querySelector("[data-map]");
  if (map && config.twoGisUrl) {
    map.href = config.twoGisUrl;
    map.target = "_blank";
    map.rel = "noopener noreferrer";
    map.removeAttribute("aria-disabled");
    map.classList.remove("is-disabled");
  } else if (map) {
    map.setAttribute("aria-disabled", "true");
    map.classList.add("is-disabled");
    map.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Добавим точку 2GIS, когда выберем площадку.");
    });
  }

  const hero = document.querySelector(".hero");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (hero && !reduceMotion && finePointer) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--far-x", `${x * -10}px`);
      hero.style.setProperty("--near-x", `${x * 17}px`);
      hero.style.setProperty("--photo-x", `${x * 5}px`);
      hero.style.setProperty("--photo-y", `${y * -4}px`);
      hero.style.setProperty("--parallax-x", `${x * 9}px`);
      hero.style.setProperty("--parallax-y", `${y * 7}px`);
    });
    hero.addEventListener("pointerleave", () => {
      ["--far-x", "--near-x", "--photo-x", "--photo-y", "--parallax-x", "--parallax-y"].forEach((name) => hero.style.removeProperty(name));
    });
  }

  if (contactNote && phone && config.twoGisUrl) {
    contactNote.textContent = "Напиши организатору, чтобы уточнить детали и договориться об оплате.";
  } else if (contactNote && phone) {
    contactNote.textContent = "Напиши организатору, чтобы уточнить детали и договориться об оплате. Точку 2GIS добавим после выбора места.";
  } else if (contactNote && config.twoGisUrl) {
    contactNote.textContent = "Открой точку на карте. Номер WhatsApp добавим перед открытием записи.";
  }
})();
