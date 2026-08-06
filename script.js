document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("frase").textContent = CONFIG.frase;

  const insta = document.getElementById("btn-instagram");
  insta.href = `https://instagram.com/${CONFIG.instagram}`;

  const portfolio = document.getElementById("btn-portfolio");
  portfolio.href = CONFIG.portfolio;
});
