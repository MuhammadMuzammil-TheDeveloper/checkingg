const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const expandAll = document.getElementById("expandAll");
const termFilter = document.getElementById("termFilter");
const termCards = [...document.querySelectorAll(".term-card")];

sidebarToggle.addEventListener("click", () => {
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle("open");
  } else {
    sidebar.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-hidden");
  }
});

document.querySelectorAll(".term-heading").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".term-card").classList.toggle("is-collapsed");
  });
});

expandAll.addEventListener("click", () => {
  const shouldCollapse = termCards.some(card => !card.classList.contains("is-collapsed"));
  termCards.forEach(card => card.classList.toggle("is-collapsed", shouldCollapse));
});

termFilter.addEventListener("change", () => {
  termCards.forEach(card => {
    card.hidden = termFilter.value !== "all" && card.dataset.term !== termFilter.value;
  });
});

document.getElementById("backBtn").addEventListener("click", () => {
  alert("Student Portal navigation is a demo in this replica.");
});
