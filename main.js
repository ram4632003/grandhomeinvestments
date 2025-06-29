document.addEventListener("DOMContentLoaded", () => {
  const siteInvest = document.getElementById("site-invest");
  const siteBuild = document.getElementById("site-build");

  const investBtn = document.getElementById("invest-toggle");
  const buildBtn = document.getElementById("build-toggle");

  investBtn.addEventListener("click", () => {
    siteInvest.classList.add("active");
    siteBuild.classList.remove("active");
    investBtn.classList.add("active");
    buildBtn.classList.remove("active");
  });

  buildBtn.addEventListener("click", () => {
    siteBuild.classList.add("active");
    siteInvest.classList.remove("active");
    buildBtn.classList.add("active");
    investBtn.classList.remove("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.dataset.target;
      const parentSite = link.closest(".site");
      parentSite.querySelectorAll(".page").forEach(p => {
        p.classList.toggle("active", p.id === targetId);
      });
    });
  });

  // Scroll-based zoom effect
  window.addEventListener("scroll", () => {
    const heroImage = document.querySelector('.hero-bg');
    if (heroImage) {
      const scrollY = window.scrollY;
      const scaleFactor = 1 + scrollY * 0.0008;
      heroImage.style.transform = `scale(${scaleFactor})`;
    }
  });
});


