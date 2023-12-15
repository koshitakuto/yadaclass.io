window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
      loop: true,
      loopedSlides: 4,
      slidesPerView: "auto",
      speed: 300,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "slide",
      breakpoints: {
        768: {
          slidesPerView: 1, // スマートフォンの場合に1つのスライドを表示
        },
      },
    });
  });
  


/*********************************************************************
 *
 *  For HOME
 *
 *********************************************************************/

//slick
$(document).ready(function () {
  $('.sec_news_wrap .archive').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1000,
      fade: false,
      arrows: true,
      dots: false,
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
          }
      }]
  });
});

//fancybox
// $(document).ready(function () {
//     setTimeout(function () {
//         $.fancybox.open({
//             src  : '#modal_2',
//             type : 'inline',
//             // src: './assets/common/img/modal/2.svg',
//             // type: 'image',
//             // 'width': 900,
//             // 'autoSize': false
//         });
//     }, 1500);
// });

/*********************************************************************
 *
 *  For ALL
 *
 *********************************************************************/

 //繝壹�繧ｸ隱ｭ縺ｿ霎ｼ縺ｿ譎ゅヵ繧ｧ繝ｼ繝峨う繝ｳ
 $(document).ready(function () {
  $(".body_wrap").animate({
      opacity: 1,
  }, 1000);
  //console.log("FadeIn Contents");
});

//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ髢句ｧ区凾class霑ｽ蜉�
$(function () {
  $(window).on('load scroll', function () {
      if ($(this).scrollTop() > 150) {
          $("body").addClass("is_page_scroll");
      } else {
          $("body").removeClass("is_page_scroll");
      }
  });
});

//繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ繧ｪ繝ｼ繝励Φ
$(function () {
  $(".btn_toggle_menu , .btn_close_menu").on("click", function () {
      $(".btn_toggle_menu").toggleClass("is_show");
      $("body").toggleClass("is_menu_show");
      // $(".toggle_wrap").fadeToggle(300);
      return false;
  });
});

//繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ繧ｯ繝ｭ繝ｼ繧ｺ
$(function () {
  $(".toggle_wrap .btn_pa").on("click", function () {
      $(".btn_toggle_menu").toggleClass("is_show");
      $("body").toggleClass("is_menu_show");
      // $(".toggle_wrap").fadeToggle(300);
  });
});

//繧ｹ繝�繝ｼ繧ｹ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
$(function () {
  $(window).on('load resize', function () {
      winWidth = $(window).width();
  });
  $('.btn_pa').click(function () {
      if (winWidth >= 768) {
          var marginTop = 80;
      } else {
          var marginTop = 40;
      }
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - marginTop;
      $("html, body").animate({
          scrollTop: position
      }, speed, "swing");
      return false;
  });
});

//莉悶�繝ｼ繧ｸ縺九ｉ縺ｮ繧｢繝ｳ繧ｫ繝ｼ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
$(function () {
  var headerHeight = $('header').outerHeight();
  var headerHeight = headerHeight + 0;
  var urlHash = location.hash;
  var animeSpeed = 500;
  if (urlHash) {
      $('html,body').animate({
          scrollTop: 0
      }, '1');
      setTimeout(function () {
          var target = $(urlHash);
          var position = target.offset().top - headerHeight;
          $('body,html').stop().animate({
              scrollTop: position
          }, animeSpeed);
          //console.log("other page anchor");
      }, 1000);
  }
});


