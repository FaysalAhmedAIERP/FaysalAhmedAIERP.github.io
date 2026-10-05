
document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const cfg = window.FAYSAL_SITE_CONFIG || {};
const holder = document.getElementById("videoHolder");
const frame = document.getElementById("introVideo");
const videoLink = document.getElementById("youtubeLink");

if (cfg.youtubeVideoId && !cfg.youtubeVideoId.includes("PASTE_")) {
  frame.src = `https://www.youtube.com/embed/${cfg.youtubeVideoId}`;
  frame.hidden = false;
  holder.hidden = true;
}
if (cfg.youtubeUrl && !cfg.youtubeUrl.includes("PASTE_")) {
  videoLink.href = cfg.youtubeUrl;
  videoLink.hidden = false;
}
