document.addEventListener("DOMContentLoaded", () => {
  const insta = document.getElementById("btn-instagram");
  insta.href = `https://instagram.com/${CONFIG.instagram}`;

  const portfolio = document.getElementById("btn-portfolio");
  portfolio.href = CONFIG.portfolio;
});
