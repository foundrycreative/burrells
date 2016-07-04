$(document).scroll(function() {
  if ($(this).scrollTop() > 1) { //Adjust 150
    $('.nav-tall').addClass('nav');
    $('.nav-ul-tall').addClass('nav-ul');
    $('.logo-tall').addClass('logo');
    $('.nav-li-tall').addClass('nav-li');
  } else {
    $('.nav-tall').removeClass('nav');
    $('.nav-ul-tall').removeClass('nav-ul');
    $('.logo-tall').removeClass('logo');
    $('.nav-li-tall').removeClass('nav-li');
  }
});