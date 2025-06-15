document.addEventListener("DOMContentLoaded", () => {
  const siteInvest = document.getElementById("site-invest");
  const siteBuild = document.getElementById("site-build");

  document.getElementById("switch-to-invest").addEventListener("click", () => {
    siteInvest.classList.add("active");
    siteBuild.classList.remove("active");
  });

  document.getElementById("switch-to-build").addEventListener("click", () => {
    siteBuild.classList.add("active");
    siteInvest.classList.remove("active");
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
});
