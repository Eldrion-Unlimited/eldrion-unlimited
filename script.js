// Smooth scroll on internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Handle "Enter Now" buttons and redirect
document.querySelectorAll(".enter-now").forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    switch (section) {
      case "about":
        window.location.href = "/gallery.html"; // or full URL
        break;
      case "naughty":
        window.location.href = "https://naughtyfamiliar.store";
        break;
      case "eldridge":
        window.location.href = "https://jeldridge.art";
        break;
      case "eldronix":
        window.location.href = "/eldronix.html"; // adjust if using domain split
        break;
      default:
        alert("Coming soon!");
    }
  });
});

// Crest hover animation (optional visual flair)
const crest = document.getElementById("crest");
if (crest) {
  crest.addEventListener("mouseenter", () => crest.classList.add("glow"));
  crest.addEventListener("mouseleave", () => crest.classList.remove("glow"));
}

// Console Easter egg
console.log("%c Eldrion Unlimited Activated ", "background: gold; color: black; font-size: 16px; padding: 4px 8px;");

// Optional keyboard shortcut Easter egg
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "e") {
    alert("✨ Eldrion Protocol Initialized.");
  }
});
