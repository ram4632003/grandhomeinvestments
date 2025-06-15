document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tab;
      const current = document.querySelector(".screen.active");
      const next = document.getElementById(targetId);

      if (current !== next) {
        tabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        current.classList.remove("active");
        setTimeout(() => {
          next.classList.add("active");
        }, 300);
      }
    });
  });
});

