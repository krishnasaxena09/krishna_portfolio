// gsap.to(".mountain", { y: -20, duration: 2, repeat: -1, yoyo: true });


// window.addEventListener("scroll", () => {
//     document.documentElement.style.setProperty("--scroll", window.scrollY);
//   });
  

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



