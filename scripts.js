(function () {
  "use strict";

  // Add verified destinations here when RackStat channels go live.
  // Empty values are intentionally not rendered as dead social links.
  const socialLinks = {
    youtube: "",
    instagram: "",
    tiktok: ""
  };

  const navToggle = document.querySelector("[data-nav-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");
  const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a[href^="#"]')) : [];

  const closeNavigation = () => {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".sr-only").textContent = "Open navigation";
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navToggle.querySelector(".sr-only").textContent = willOpen ? "Close navigation" : "Open navigation";
      siteNav.classList.toggle("is-open", willOpen);
      document.body.classList.toggle("nav-open", willOpen);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
        closeNavigation();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeNavigation();
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
          if (isCurrent) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-22% 0px -68%", threshold: [0, 0.15, 0.4] }
    );

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  // Expose a frozen copy for straightforward future integration without adding UI now.
  window.RackStatConfig = Object.freeze({ socialLinks: Object.freeze({ ...socialLinks }) });
})();
