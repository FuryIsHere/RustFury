let prevScrollpos = 0;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navBarWrapper").style.top = "0";
  } else {
    document.querySelector(".navBarWrapper").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}