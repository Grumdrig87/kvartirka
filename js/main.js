jQuery(document).ready(function($) {

  $('[data-cardlike]').click(function(){
    $(this).toggleClass('active');
  })
  $('[data-hide]').click(function(){
    $(this).addClass('none');
  })
  $('[data-flatnav] li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
  $('[data-flatmore]').click(function() {
    $(this).parent().find('p').removeClass('small');
    $(this).css({'display':'none'})
  })
  $("[data-udobwrap] .flat__udob-itemwrap:lt(8)").show();
  $('[data-flatall]').click(function(){
    $("[data-udobwrap] .flat__udob-itemwrap").show();
    $(this).hide();
  });
  $("[data-revwrap] .flat__review-itemwrap:lt(4)").show();
  $('[data-revall]').click(function(){
    $("[data-revwrap] .flat__review-itemwrap").show();
    $(this).hide();
  });
// slide to id
  $('[data-flatnav]').on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
//adaptive

  
//slider
  if (jQuery('[data-reviews]').length > 0) {
      $('[data-reviews]').slick({
          dots: false,
          speed: 300,
          slidesToShow: 3,
          infinite: true,
          prevArrow: '[data-prev]',
          nextArrow: '[data-next]',
          // responsive: [{
          //     breakpoint: 994,
          //     settings: {
          //       centerMode: false,
          //       arrows: true,
          //       prevArrow: '[data-uniqprev]',
          //       nextArrow: '[data-uniqnext]',
          //     }
          // }, ]
      });
  }
    if (jQuery('[data-catslider]').length > 0) {
      $('[data-catslider]').slick({
          dots: true,
          speed: 300,
          slidesToShow: 1,
          infinite: false,
          // responsive: [{
          //     breakpoint: 994,
          //     settings: {
          //       centerMode: false,
          //       arrows: true,
          //       prevArrow: '[data-uniqprev]',
          //       nextArrow: '[data-uniqnext]',
          //     }
          // }, ]
      });
  }
// select
  if (jQuery('[data-hcity]').length > 0) {
    jQuery('[data-hcity]').select2({
      width: 'auto'
    });
  }
  if (jQuery('[data-paycount]').length > 0) {
    jQuery('[data-paycount]').select2({
      width: '100%'
    });
  }
  if (jQuery('[data-paysrok]').length > 0) {
    jQuery('[data-paysrok]').select2({
      width: '100%'
    });
  }
  if (jQuery('[data-flats]').length > 0) {
    jQuery('[data-flats]').select2({
      width: '250px'
    });
  }
  if (jQuery('[data-time]').length > 0) {
    jQuery('[data-time]').select2({
      width: 'auto',
      dropdownCssClass: "time-container",
      dropdownAutoWidth: true
    });
  }
  if (jQuery('[data-val]').length > 0) {
    jQuery('[data-val]').select2({
      width: 'auto',
      dropdownCssClass: "val-container",
      dropdownAutoWidth: true
    });
  }
  if (jQuery('[data-lang]').length > 0) {
      jQuery('[data-lang]').select2({
        width: 'auto',
        dropdownAutoWidth: true,
        dropdownCssClass: "lang-container",
        templateSelection: formatState
      });
    }
    if (jQuery('[data-mcity]').length > 0) {
      jQuery('[data-mcity]').select2({
        width: '240',
        dropdownAutoWidth: true,
        dropdownCssClass: "main-lang",
        templateSelection: langformat
      });
    }
// стилизация выпадающих селектов
  function formatState (state) {
      if (!state.id) {
        return state.text;
      }
    
      var baseUrl = "img";
      var $state = $(
        '<span class="lang-chose"><span class="img-lang"><img class="main__icon" /></span> <span class="val-lang"></span></span>'
      );
    
      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $state.find(".val-lang").text(state.text);
      $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
    
      return $state;
    };
    function langformat (lang) {
      if (!lang.id) {
        return lang.text;
      }
    
      var $lang = $(
        '<span class="city-wrapmain"><span class="city-tit">Город</span> <span class="main__val-city"></span></span>'
      );
    
      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $lang.find(".main__val-city").text(lang.text);    
      return $lang;
    };
//plus minus
    (function quantityProducts() {
      var $quantityArrowMinus = $("[data-arrowminus]");
      var $quantityArrowPlus = $("[data-arrowplus]");
      var $quantityNum = $("[data-guest]");
   
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
   
      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
          $('[data-guestinp]').text($quantityNum.val());
          if ($quantityNum.val() > 4) {
            $('[data-guesttxt]').text('гостей');
          }  else if ($quantityNum.val() == 1) {
            $('[data-guesttxt]').text('гость');
          } else {
            $('[data-guesttxt]').text('гостя');
          }
        }
      }
   
      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
        $('[data-guestinp]').text($quantityNum.val());
        if ($quantityNum.val() > 4) {
          $('[data-guesttxt]').text('гостей');
        } else if ($quantityNum.val() == 1) {
          $('[data-guesttxt]').text('гость');
        } else {
          $('[data-guesttxt]').text('гостя');
        }
      }
    })();
    $('[data-guest]').change(function(){
      var value = $('[data-guest]').val();
      $('[data-guestinp]').text(value);
      if (value > 4) {
        $('[data-guesttxt]').text('гостей');
      } else if (value == 1) {
        $('[data-guesttxt]').text('гость');
      } else {
        $('[data-guesttxt]').text('гостя');
      }
  });
  $('[data-mguest]').click(function(){
    $('[data-guestdrop]').toggleClass('active');
  })

  function closeMenu () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".main__guest"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('[data-guestdrop]').removeClass("active");
      }
    });
  };
  closeMenu ();

// readmore

  $("[data-revtxt]").shorten({
    "showChars" : 225,
    "moreText"  : "Подробнее",
    "lessText"  : "Скрыть",
  });
  $("[data-flatrev]").shorten({
    "showChars" : 230,
    "moreText"  : "Читать дальше",
    "lessText"  : "Скрыть",
  });

// tabs
    $('[data-tab]').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('.login__popup-wrap').find('form.login__popup-form').removeClass('active').eq($(this).index()).addClass('active');
    });

// range

    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 25,
        values: [ 5, 22 ],
        slide: function( event, ui ) {
          $( ".ui-slider-handle:nth-child(2) > .range-label" ).text( ui.values[ 0 ] + " ₽");
          $( ".ui-slider-handle:last-child > .range-label" ).text( ui.values[ 1 ] + " ₽");
        }
      });
      $('.ui-slider-handle').html('<span class="range-label"></span>');
      $( ".ui-slider-handle:nth-child(2) > .range-label" ).text( $( "#slider-range" ).slider( "values", 0 ) + " ₽");
      $( ".ui-slider-handle:last-child > .range-label" ).text( $( "#slider-range" ).slider( "values", 1 ) + " ₽");
    } );
});
