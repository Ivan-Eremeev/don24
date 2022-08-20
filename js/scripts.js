window.onload = function () {

  // Stiky menu // Липкое меню.
	function stikyMenu(header) {
		headerTop = header.offset().top;
		$(window).scroll(function(){
      headerHoggleClass();
		});
    function headerHoggleClass() {
      if ($(window).scrollTop() > headerTop + 150) {
        header.addClass('stiky');
      } else {
        header.removeClass('stiky');
      }
    }
	};
	stikyMenu($('#headerSticky'));

  // Выпадайки при клике по кнопке
	// Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
	// Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
	function dropBlock(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-drop-close');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.toggleClass('is-active');
			drop.toggleClass('open');
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('is-active');
					drop.removeClass('open');
				}
			});
		})
		close.on('click', function () {
			$('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
			$('#' + $(this).data('drop')).removeClass('open');
		})
	}
	dropBlock($('.js-drop-btn'));

  // Кнопка скролла страницы наверх
  function scrollUp() {
    const btn = $('.scrollup');
    $(window).scroll(function () {
      btnShowFade();
    });
    function btnShowFade() {
      if ($(this).scrollTop() > 200) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    }
    btnShowFade();
    btn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }
  scrollUp();

  // Открытие подменю на мобилке
  function openSubmenu() {
    let link = $('.header__menu-link');
    let submenu = $('.header__submenu');
    link.on('click', function (e) {
      let currentLink = $(this);
      if ($(window).width() <= 991) {
        e.preventDefault();
        submenu.stop().slideUp(300);
        currentLink.next('.header__submenu').stop().slideToggle(300);
      }
    });
    $(window).resize(function () {
      if ($(window).width() > 991) {
        submenu.removeAttr('style');
      }
    });
  }
  openSubmenu();

  // Переключение темы сайта
  function themeSwitch() {
    $('.theme-switch').on('click', function () {
      $('body').toggleClass('dark');
    })
  }
  themeSwitch();

}