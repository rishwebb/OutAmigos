(function ($) {
  "use strict";

  function getCurrentPage() {
    var path = window.location.pathname || "";
    var file = path.substring(path.lastIndexOf("/") + 1);
    if (!file) {
      return "index.html";
    }
    return file;
  }

  function setActiveNavigation() {
    var currentPage = getCurrentPage();

    $(".main-menu .navbar-nav .nav-link").removeClass("active");

    var selector = '.main-menu .navbar-nav .nav-link[href="' + currentPage + '"]';
    var $activeLink = $(selector);

    if (!$activeLink.length && currentPage === "volunteer-details.html") {
      $activeLink = $('.main-menu .navbar-nav .nav-link[href="volunteers.html"]');
    }

    if (!$activeLink.length && currentPage === "event-details.html") {
      $activeLink = $('.main-menu .navbar-nav .nav-link[href="events.html"]');
    }

    if ($activeLink.length) {
      $activeLink.addClass("active");
    }
  }

  function initializeBackTop() {
    if ($.fn.backTop) {
      $("#backTop").backTop({
        position: 300,
        speed: 500,
        color: "red"
      });
    }
  }

  function initDemoForms() {
    $(".js-demo-form").on("submit", function (event) {
      event.preventDefault();
      var $form = $(this);
      var $feedback = $form.find(".form-feedback");

      if (!$feedback.length) {
        $feedback = $('<p class="form-feedback" aria-live="polite"></p>');
        $form.append($feedback);
      }

      $feedback.text("Thanks! Your request has been captured on this demo page.").addClass("is-visible");
      this.reset();
    });
  }

  function setYear() {
    $(".js-year").text(new Date().getFullYear());
  }

  $(function () {
    setActiveNavigation();
    initializeBackTop();
    initDemoForms();
    setYear();

    if (typeof AOS !== "undefined") {
      AOS.init({ once: true, duration: 700 });
    }
  });
})(jQuery);
