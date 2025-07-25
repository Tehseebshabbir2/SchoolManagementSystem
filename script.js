function toggleUserDropdown(e) {
    e.preventDefault();
    const dropdown = document.getElementById("userDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  document.addEventListener("click", function (e) {
    const dropdown = document.getElementById("userDropdown");
    const userLink = e.target.closest("a");
    const insideDropdown = e.target.closest("#userDropdown");
    if (!userLink && !insideDropdown) {
      dropdown.style.display = "none";
    }
  });