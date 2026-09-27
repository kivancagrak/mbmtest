/* ============================================================
   HASALMBM'27 — Ortak Script
   - Mobil menü aç/kapat
   - Ana sayfa geri sayım (6 Şubat 2027, 09:00 - İstanbul)
   - SSS akordiyonu
   - Footer yılı
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Mobil Menü ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navOverlay = document.querySelector(".nav-overlay");

  function closeMenu() {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menüyü aç");
    }
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------------- Geri Sayım ---------------- */
  var countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    // 6 Şubat 2027, 09:00 (GMT+3 - İstanbul)
    var target = new Date("2027-02-06T09:00:00+03:00").getTime();

    var elGun = document.getElementById("cd-gun");
    var elSaat = document.getElementById("cd-saat");
    var elDakika = document.getElementById("cd-dakika");
    var elSaniye = document.getElementById("cd-saniye");
    var elBitti = document.getElementById("cd-bitti");
    var elBoxes = document.getElementById("cd-boxes");

    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = target - now;

      if (diff <= 0) {
        if (elBoxes) elBoxes.style.display = "none";
        if (elBitti) elBitti.style.display = "block";
        return;
      }

      var gun = Math.floor(diff / (1000 * 60 * 60 * 24));
      var saat = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var dakika = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var saniye = Math.floor((diff % (1000 * 60)) / 1000);

      if (elGun) elGun.textContent = pad(gun);
      if (elSaat) elSaat.textContent = pad(saat);
      if (elDakika) elDakika.textContent = pad(dakika);
      if (elSaniye) elSaniye.textContent = pad(saniye);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------------- SSS Akordiyonu ---------------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-q");
    if (!question) return;

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      // Diğer tüm açık soruları kapat
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var q = other.querySelector(".faq-q");
          if (q) q.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("open", !isOpen);
      question.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
  });

  /* ---------------- Footer Yılı ---------------- */
  var yearEl = document.querySelectorAll(".year");
  yearEl.forEach(function (el) {
    el.textContent = "2027";
  });
});
