$(function(){
  // navbar smooth scroll
  $('.navbar a').on("click", function(event){
    event.preventDefault();
    var hash = this.hash;
    $('body,html').animate({scrollTop: $(hash).offset().top} , 750 , function(){window.location.hash = hash;});
  });
  // navbar fade & resize
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 70) {
        $('.navbar').addClass('opaque');
      } else {
        $('.navbar').removeClass('opaque');
      }
    });
  }
  else {
  }
  // on scroll timeline fade in
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 400) {
        $('.timeline-panel').addClass('animated fadeInUpBig');
      } else {
        $('.timeline-panel').removeClass('animated fadeInUpBig');
      }
    });
  } else {
  }
  // on scroll progress bar fade id
  if ($(window).width() > 635) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1400) {
        $('#comptech').addClass('animated fadeInLeftBig');
        $('#complang').addClass('animated fadeInRightBig');
      } else {
        $('#comptech').removeClass('animated fadeInLeftBig');
        $('#complang').removeClass('animated fadeInRightBig');
      }
    });
  } else {
  }
  // rejoindre site au clique de la card
  $('#angularProjectCard').click(function() {
    window.location = "https://clementsemangularproject.github.io/";
    $(this).css({"cursor": "pointer"});
  });
  $('#angularProjectCard').mouseenter(function(){
    $(this).css({"cursor": "pointer"});
  });
  $('#projetDdfCard').click(function() {
    window.location = "http://formation.novei.fr/p5jidf/";
  });
  $('#projetDdfCard').mouseenter(function(){
    $(this).css({"cursor": "pointer"});
  });
});
