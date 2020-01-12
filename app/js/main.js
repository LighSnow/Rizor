$(document).ready(function () {


  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);

  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };


  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    console.log(elementOffset);

    $("html, body").animate({
      scrollTop: elementOffset - 65
    }, 1000);
  });






  $(".color").click(function (e) {
    e.preventDefault();
    $(".color").not(this).removeClass('active');
    $(this).toggleClass('active');
  });





  $('.burger-menu').on('click', function () {

    $('.header__nav').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });


  $(document).ready(function () {
    $('.burger-menu').click(function () {
      $(".burger-menu").toggleClass('active');
    });
  });

});