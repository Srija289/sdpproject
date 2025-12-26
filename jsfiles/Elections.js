function openTab(tabName) {
  // Remove active from all tabs
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

  // Activate selected tab and content
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}