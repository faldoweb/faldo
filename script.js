// FALDO yazısı animasyonu bittikten sonra banner ve butonlar görünür
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".intro").style.display = "none";
    const main = document.querySelector(".main-content");
    main.classList.remove("hidden");
    setTimeout(() => {
      main.style.opacity = "1";
    }, 100);
  }, 3000); // 3 saniye sonra geçiş
});
