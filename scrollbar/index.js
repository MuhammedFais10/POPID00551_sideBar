window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px";
  }
}
