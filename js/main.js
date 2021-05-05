jQuery(document).ready(function($) {


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
  if (jQuery('[data-hcity]').length > 0) {
    jQuery('[data-hcity]').select2({
      width: 'auto'
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
  // var text1 = $("[data-revtxt]").each(function(){
  //   $(this).html();
  // })
  // console.log(text1);
  //closetext
  $("[data-revtxt]").text(function(i, text) {

    if (text.length >= 227) {
      text = text.substring(0, 227);
      var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
      text = text.substring(0, lastIndex) + '... <a class="readmore">Подробнее</a>'; // обрезаем до последнего слова
    }
    
    $(this).html(text);
  });
//   $('.readmore').click(function(){
//       $(this).parent('[data-revtxt]').html(text1.eq($('.slick-slide').index())).css({'height':'auto'});
//   })

// tabs
    $('[data-tab]').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('.login__popup-wrap').find('form.login__popup-form').removeClass('active').eq($(this).index()).addClass('active');
    });

// range
    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 25,
        values: [ 5, 20 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );
});
