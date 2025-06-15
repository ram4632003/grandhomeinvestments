document.addEventListener("DOMContentLoaded", () => {
  const siteInvest = document.getElementById("site-invest");
  const siteBuild = document.getElementById("site-build");
  const toggle = document.getElementById("mode-toggle");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      siteInvest.classList.remove("active");
      siteBuild.classList.add("active");
    } else {
      siteBuild.classList.remove("active");
      siteInvest.classList.add("active");
    }
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

