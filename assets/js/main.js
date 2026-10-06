/* AVES Strategic Advisors — site interactions */
(function () {
  "use strict";

  /* Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Contact form → Web3Forms (no backend needed) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var btn = form.querySelector("button[type=submit]");

      var data = new FormData(form);
      if (data.get("botcheck")) return; /* honeypot */

      btn.disabled = true;
      btn.textContent = "Sending…";
      status.className = "form-status";
      status.textContent = "";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      })
        .then(function (res) {
          if (!res.ok) throw new Error("bad response");
          return res.json();
        })
        .then(function () {
          form.reset();
          status.className = "form-status ok";
          status.textContent = "Thank you. Your message has been sent. You will hear back within two business days.";
          status.focus();
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = "Something went wrong sending your message. Please email us directly instead.";
          status.focus();
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = "Send Message";
        });
    });
  }
})();
