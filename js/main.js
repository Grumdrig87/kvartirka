jQuery(document).ready(function($) {

  $('[data-cardlike]').click(function(){
    $(this).toggleClass('active');
  })
  $('[data-flatnav] li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
  $('[data-flatmore]').click(function() {
    $(this).parent().find('p').removeClass('small');
    $(this).css({'display':'none'})
  })
  $('[data-flatall]').click(function(){
    $("[data-udobwrap] .flat__udob-itemwrap").show();
    $(this).hide();
  });
  $("[data-revwrap] .flat__review-itemwrap:lt(2)").show();
  $('[data-catmore]').click(function(){
    $(this).parent().addClass('show');
  })
  $('[data-sendlink]').click(function(){
    var link = $(this).parent().find('input').val();
    navigator.clipboard.writeText(link)
  })
  
// slide to id
if (jQuery('[data-flatnav]').length > 0) {
  $('[data-flatnav]').on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
}
if (jQuery('[data-addnew]').length > 0) {
  $('[data-addnew]').on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
}
//unselect
$('[data-unselect]').click(function(e) {    
  $('.filter__where-wrap input[type=checkbox]').prop('checked', false);
});
  // faq
  $('[data-faq]').click(function(){
    $(this).toggleClass('open');
    $(this).find('p').slideToggle(300);
  })

//slider
  if (jQuery('[data-reviews]').length > 0) {
      $('[data-reviews]').slick({
          dots: false,
          speed: 300,
          slidesToShow: 3,
          infinite: true,
          prevArrow: '[data-prev]',
          nextArrow: '[data-next]',
          responsive: [{
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
              }
          },{
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
              }
          }, ]
      });
  }
  $("[data-src='#product-modal']").click(function() {
    setTimeout(() => $('.product__view__slider').slick('setPosition'), 100);
})
$('[data-src="#allreview"]').click(function(){
    function revslick (){
      $('[data-allrevslider]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        rows: 2,
    })
    }
    setTimeout(revslick , 100);
  });

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
  if (jQuery('[data-statssel]').length > 0) {
    jQuery('[data-statssel]').select2({
      width: '100%'
    });
  }
  if (jQuery('[data-addnewsel]').length > 0) {
    jQuery('[data-addnewsel]').select2({
      width: '100%'
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
// miss click
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
if (jQuery('[data-revtxt]').length > 0){
  $("[data-revtxt]").shorten({
    "showChars" : 225,
    "moreText"  : "Подробнее",
    "lessText"  : "Скрыть",
  });
};
if (jQuery('[data-flatrev]').length > 0){
  $("[data-flatrev]").shorten({
    "showChars" : 230,
    "moreText"  : "Читать дальше",
    "lessText"  : "Скрыть",
  });
}
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
//show filter
var showitem = $('[data-showitem]');
var showHeight = $('[data-showitem]').height();
$('[data-showitem]').css({'height':'300px'});
var showHeighthelp = $('[data-showitem]').height();
$('[data-showbtn]').on('click', function() {
  $(this).toggleClass('open');
  if (showHeighthelp > 300) {
    $(this).find('span').text('Показать еще');
    showitem.animate({
      height: '300px'
    }, 300);
    setTimeout(function(){
      showHeighthelp = 300;
    }, 200);
  }
    if (showHeighthelp == 300) {
      $(this).find('span').text('Скрыть');
      showitem.animate({
        height: showHeight + 'px'
      }, 300);
      setTimeout(function(){
        showHeighthelp = showHeight;
      }, 200);
      console.log(showHeighthelp)
    } 
  })
//rating
function move(e, obj) {
  var summ = 0;
  var id = obj.next().attr('id').substr(1);
  var progress = e.pageX - obj.offset().left;
  var rating = progress * 5 / jQuery('.rate__stars').width();
  jQuery('#feedback_raiting').attr('value', rating.toFixed(1));
  obj.next().width(progress);
  jQuery('.rating').each(function() {
      summ += parseFloat(jQuery(this).text());
  });
  summ = summ / jQuery('.rating').length;
}
jQuery('#rating .rate__stars').click(function(e) {
  jQuery(this).toggleClass('fixed');
  move(e, jQuery(this));
});
jQuery('#rating .rate__stars').on('mousemove', function(e) {
  if (jQuery(this).hasClass('fixed') == false) move(e, jQuery(this));
});
//foto load
    $("#proffoto").change(function () {
      if (this.files && this.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('[data-profoto] img').attr('src', e.target.result);
          }
          reader.readAsDataURL(this.files[0]);
      }
  });
// adaptive
if ($(window).width() < 994) {
  $('[data-headlog] ul li:first').after('<li><div class="btns__mob"><div class="mob__item"><span>Язык</span><div data-moblang></div></div><div class="mob__item"><span>Валюта</span><div data-mobval></div></div></div></li>');
  $('[data-headlang]').appendTo('[data-moblang]');
  $('[data-headval]').appendTo('[data-mobval]');
  $('[data-headlog] ul li:last a').before('<ul class="sub-menu"><li><a href="#">Связаться с нами</a></li><li><a href="#">Сдать свое жилье</a></li></ul>');
  if (jQuery('[data-catalogwrap]').length > 0){
    $('[data-headcity]').appendTo('[data-catalogwrap]');
    $('[data-cattabs]').appendTo('[data-catalogwrap]');
    $('[data-catalogwrap]').after('<div class="container"><div class="filter-mob" data-filtermob><ul><li><a data-filters href="javascript:;">Фильтр (<span>3</span>)</a></li><li><a data-fancybox data-src="#price" href="javascript:;">Цена <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" fill="none"><path d="M3.759 4.448a1 1 0 0 1-1.519 0L.415 2.318A1 1 0 0 1 1.174.667h3.652a1 1 0 0 1 .759 1.651l-1.826 2.13z" fill="#777d82"/></svg></a></li><li><a data-fancybox data-src="#rooms" href="javascript:;">Комнаты <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" fill="none"><path d="M3.759 4.448a1 1 0 0 1-1.519 0L.415 2.318A1 1 0 0 1 1.174.667h3.652a1 1 0 0 1 .759 1.651l-1.826 2.13z" fill="#777d82"/></svg></a></li><li><a data-fancybox data-src="#guests" href="javascript:;">Гости <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" fill="none"><path d="M3.759 4.448a1 1 0 0 1-1.519 0L.415 2.318A1 1 0 0 1 1.174.667h3.652a1 1 0 0 1 .759 1.651l-1.826 2.13z" fill="#777d82"/></svg></a></li></ul></div></div>')
    $('[data-filters]').click(function(){
      $('[data-catleft]').addClass('open');
      $('body').addClass('open');
    });
    $('[data-catleft]').children('*:first').before('<span class="filter__close" data-filterclose><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#3a3f44" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.667 10.667l10.667 10.667"/><path d="M21.334 10.667L10.667 21.333"/></svg></span>')
    $('[data-guestdrop]').children().children().before('<div class="filter__item-title">Количество гостей:</div>');
    $('[data-filterclose]').click(function(){
      $('[data-catleft]').removeClass('open');
      $('body').removeClass('open');
    });
    $('[data-filterbtns]').children().text('Очистить');
    $('[data-filterbtns]').children().after('<button class="filter-go">Показать <span>375</span> вариантов</button>');
  }
  if (jQuery('[data-popular]').length > 0) {
    $('[data-popular]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        arrows: false,
    });
  }
  if (jQuery('[data-blognews]').length > 0) {
    $('[data-blognews]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        arrows: false,
    });
  }
  if (jQuery('[data-moreflats]').length > 0) {
    $('[data-moreflats]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        arrows: false,
    });
    
  }
  if (jQuery('[data-flatimg]').length > 0) {
    $('[data-flatimg]').after('<div class="flat__card-mobile" data-flatcardmob></div>');
    $('[data-flatcardr]').appendTo('[data-flatcardmob]');
  }
}
if ($(window).width() < 769) {
  $('.footer__title').click(function(){
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  })
  if (jQuery('[data-hands]').length > 0) {
    $('[data-hands]').after('<div data-btnhand></div>');
    $('.btn-see').appendTo('[data-btnhand]');
    $('[data-hands]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        arrows: false,
    });
    
}
if (jQuery('[data-flatimg]').length > 0) {
  $('[data-flatimg]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
  });
}
$('[data-flatall]').after('<button class="flat__udob-all" data-flatall>Показать все <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" fill="none"><path d="M3.759 4.448a1 1 0 0 1-1.519 0L.415 2.318A1 1 0 0 1 1.174.667h3.652a1 1 0 0 1 .759 1.651l-1.826 2.13z" fill="#777d82"/></svg></button>')
$('[data-flatall]').click(function(){
  $("[data-udobwrap]").addClass('show');
  $(this).hide();
});
}
//datepicker
$("[data-bookin]").datepicker({
  altField: "#actualDate",
  firstDay: 1,
  dateFormat: "dd.mm.yy",
  dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
  monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
  gotoCurrent: true,
});
  //dropzone foto
  if (jQuery('[data-dropzone]').length > 0) {
  var dropZone = $('[data-dropzone]'),
        maxFileSize = 10000000; // максимальный размер фалйа - 10 мб.
    
    // Проверка поддержки браузером
    if (typeof(window.FileReader) == 'undefined') {
        dropZone.text('Не поддерживается браузером!');
        dropZone.addClass('error');
    }
    
    // Добавляем класс hover при наведении
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };
    
    // Убираем класс hover
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };
    
    // Обрабатываем событие Drop
    dropZone[0].ondrop = function(event) {
        event.preventDefault();
        dropZone.removeClass('hover');
        dropZone.addClass('drop');
        
        var file = event.dataTransfer.files[0];
        
        // Проверяем размер файла
        if (file.size > maxFileSize) {
            dropZone.find('.addnew__drop').text('Файл слишком большой!');
            dropZone.addClass('error');
            return false;
        }
        
        // Создаем запрос
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', uploadProgress, false);
        xhr.onreadystatechange = stateChange;
        xhr.open('POST', '/upload.php');
        xhr.setRequestHeader('X-FILE-NAME', file.name);
        xhr.send(file);
    };
    
    // Показываем процент загрузки
    function uploadProgress(event) {
        var percent = parseInt(event.loaded / event.total * 100);
        dropZone.find('.addnew__drop').text('Загрузка: ' + percent + '%');
    }
    
    // Пост обрабочик
    function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.find('.addnew__drop').text('Загрузка успешно завершена!');
            } else {
                dropZone.find('.addnew__drop').text('Произошла ошибка!');
                dropZone.addClass('error');
            }
        }
    }
  }
});


// var data = {
//   // A labels array that can contain any sort of values
//   labels: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','16', '17', '18', '19', '20','21', '22', '23', '24', '25','26', '27', '28', '29', '30'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [2, 6, 5, 11, 7, 9, 13, 7, 3, 7, 9, 11, 8, 6, 5, 7]
//   ]
// };

// var options = {
//   showPoint: false,
//   // Disable line smoothing
//   lineSmooth: false,
//   // X-Axis specific configuration
//   axisX: {
//     // We can disable the grid for this axis
//     showGrid: false,
//   },
//   axisY: {
//     // Lets offset the chart a bit from the labels
//     offset: 60,
//   },
//     low: 0,
//     showArea: true
// };

// // Create a new line chart object where as first parameter we pass in a selector
// // that is resolving to our chart container element. The Second parameter
// // is the actual data object. As a third parameter we pass in our custom options.
// new Chartist.Line('.ct-chart', data, options);