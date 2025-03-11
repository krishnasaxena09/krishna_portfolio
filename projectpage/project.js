document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector(".stars");
  
    for (let i = 0; i < 150; i++) {  // Increase to 150 stars
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s"; // Random blink speed
        starContainer.appendChild(star);
    }
  });

  function toggleDropdown(id) {
    // Sabhi dropdowns ko band karne ka logic
    let dropdowns = document.querySelectorAll(".project-links");
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== id) {
            dropdown.classList.remove("active");
        }
    });

    // Sirf clicked dropdown ko toggle karna
    let selectedDropdown = document.getElementById(id);
    selectedDropdown.classList.toggle("active");
}