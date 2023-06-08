function toggleMobileMenu(menu){
    menu.classList.toggle('open');
var contentWrapper = document.querySelector('.content-wrapper');
  contentWrapper.classList.toggle('move-down');
  var footer = document.querySelector('.footer');
  footer.classList.toggle('move-down');
}


