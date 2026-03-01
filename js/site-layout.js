(function () {
  "use strict";

  function renderHeader() {
    return (
      '<div class="header-top-area">' +
      '  <div class="container">' +
      '    <div class="row">' +
      '      <div class="col-lg-5 col-md-12 col-sm-12">' +
      '        <div class="site-info">' +
      '          <ul>' +
      '            <li><a href="mailto:support@OutAmigosfoundation.org.in" class="email-def"><i class="fa fa-envelope"></i> support@OutAmigosfoundation.org.in</a></li>' +
      '          </ul>' +
      '        </div>' +
      '      </div>' +
      '      <div class="col-lg-2 col-md-6 col-sm-12"><p class="welcome-message"></p></div>' +
      '      <div class="col-lg-5 col-md-6 col-sm-12 text-right">' +
      '        <div class="social-icon">' +
      '          <a href="https://www.facebook.com/OutAmigos.OutAmigos" target="_blank" rel="noopener noreferrer"><i class="lab la-facebook-f"></i></a>' +
      '          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="lab la-twitter"></i></a>' +
      '          <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i class="lab la-google"></i></a>' +
      '          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i class="lab la-pinterest"></i></a>' +
      '          <a href="https://www.instagram.com/OutAmigos/" target="_blank" rel="noopener noreferrer"><i class="lab la-instagram"></i></a>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="header-area">' +
      '  <div class="sticky-area">' +
      '    <div class="navigation">' +
      '      <div class="row">' +
      '        <div class="col-lg-2">' +
      '          <div class="logo">' +
      '            <a href="index.html" class="navbar-brand"><img src="images/174421468011.jpg" alt="OutAmigos Foundation"></a>' +
      '          </div>' +
      '        </div>' +
      '        <div class="col-lg-8">' +
      '          <div class="main-menu">' +
      '            <nav class="navbar navbar-expand-lg">' +
      '              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
      '                <span class="navbar-toggler-icon"></span>' +
      '                <span class="navbar-toggler-icon"></span>' +
      '                <span class="navbar-toggler-icon"></span>' +
      '              </button>' +
      '              <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">' +
      '                <ul class="navbar-nav m-auto">' +
      '                  <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="causes.html">Causes</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="volunteers.html">Volunteers</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="events.html">Events</a></li>' +
      '                  <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
      '                  <li class="nav-item">' +
      '                    <a class="nav-link" href="#">Pages <i class="fa fa-angle-down arrows"></i></a>' +
      '                    <ul class="sub-menu">' +
      '                      <li><a href="categories.html">Categories</a></li>' +
      '                      <li><a href="login.html">Login</a></li>' +
      '                      <li><a href="become-volunteer.html">Become Volunteer</a></li>' +
      '                      <li><a href="volunteer-details.html">Volunteer Details</a></li>' +
      '                      <li><a href="event-details.html">Event Details</a></li>' +
      '                    </ul>' +
      '                  </li>' +
      '                </ul>' +
      '              </div>' +
      '            </nav>' +
      '          </div>' +
      '        </div>' +
      '        <div class="col-lg-2 text-right">' +
      '          <div class="header-right-content">' +
      '            <a href="https://rzp.io/l/kWQ87HP" class="main-btn" target="_blank" rel="noopener noreferrer">Donate</a>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function renderFooter() {
    return (
      '<footer class="footer-area">' +
      '  <div class="container">' +
      '    <div class="footer-up">' +
      '      <div class="row">' +
      '        <div class="col-lg-3 col-md-6 col-sm-12">' +
      '          <div class="logo">' +
      '            <a href="index.html" class="navbar-brand">' +
      '              <img src="images/1744214680113.jpg" alt="OutAmigos Foundation">' +
      '            </a>' +
      '          </div>' +
      '          <div class="contact-info">' +
      '            <h5>Follow us</h5>' +
      '            <ul>' +
      '              <li><a href="https://www.facebook.com/OutAmigos.OutAmigos" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a></li>' +
      '              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>' +
      '              <li><a href="https://google.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-google-plus"></i></a></li>' +
      '              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-pinterest"></i></a></li>' +
      '              <li><a href="https://www.instagram.com/OutAmigos/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>' +
      '            </ul>' +
      '          </div>' +
      '        </div>' +
      '        <div class="col-lg-3 col-md-6 com-sm-12">' +
      '          <h5>Useful Links</h5>' +
      '          <ul>' +
      '            <li>' +
      '              <a href="events.html">Events</a>' +
      '              <a href="volunteers.html">Volunteers</a>' +
      '              <a href="gallery.html">Gallery</a>' +
      '              <a href="blog.html">Blog</a>' +
      '              <a href="categories.html">Categories</a>' +
      '            </li>' +
      '          </ul>' +
      '        </div>' +
      '        <div class="col-lg-3 col-md-6 col-sm-12">' +
      '          <h5>Pages</h5>' +
      '          <ul>' +
      '            <li>' +
      '              <a href="about.html">About Us</a>' +
      '              <a href="contact.html">Contact</a>' +
      '              <a href="login.html">Login</a>' +
      '              <a href="become-volunteer.html">Become Volunteer</a>' +
      '              <a href="volunteer-details.html">Volunteer Details</a>' +
      '              <a href="event-details.html">Event Details</a>' +
      '            </li>' +
      '          </ul>' +
      '        </div>' +
      '        <div class="col-lg-3 col-md-6">' +
      '          <div class="subscribe-form">' +
      '            <h5>Contact Us</h5>' +
      '            <p>' +
      '              Ward No. 5, Gram Post,<br>' +
      '              Sipat Ujwal Nagar,<br>' +
      '              Bilaspur. Chhattisgarh<br>' +
      '              Pin-Code: 495555<br>' +
      '              OutAmigosfoundation@gmail.com<br>' +
      '              +91 626 730 9902' +
      '            </p>' +
      '            <form action="https://OutAmigosfoundation.org.in/newsletter" id="footer_form" method="post" enctype="multipart/form-data">' +
      '              <input type="hidden" name="_token" value="nFqaQLOWchDXb73CydaLy5GTwwPMDDlWoFwdPL3U">' +
      '              <input type="email" name="news_email" placeholder="Email Address" data-bvalidator="required">' +
      '              <button><i class="fa fa-paper-plane"></i></button>' +
      '            </form>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</footer>' +
      '<div class="copyright-area">' +
      '  <div class="container">' +
      '    <div class="footer-bottom">' +
      '      <div class="row justify-content-center align-items-center">' +
      '        <div class="col-lg-6 col-md-6 col-sm-12">' +
      '          <p class="copyright-line">' +
      '            &copy; <span class="js-year"></span> OutAmigos Foundation. All Rights Reserved.' +
      '            Developed by <a href="https://www.instagram.com/erro_rcodee/" target="_blank" rel="noopener noreferrer" style="color: #007bff;">Error Code</a>' +
      '          </p>' +
      '        </div>' +
      '        <div class="col-lg-6 col-md-6 col-sm-12 text-right"></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<a id="backTop">Back To Top</a>'
    );
  }

  var headerMount = document.getElementById("site-layout-header");
  if (headerMount) {
    headerMount.innerHTML = renderHeader();
  }

  var footerMount = document.getElementById("site-layout-footer");
  if (footerMount) {
    footerMount.innerHTML = renderFooter();
  }
})();
