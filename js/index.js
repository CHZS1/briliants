  
  //swiper hero-section
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //accordion tabs sale-section

  document.querySelectorAll('.sale__link').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.sale__link').forEach(function (link) {
            link.classList.remove('sale__link--active')
        });
        e.currentTarget.classList.add('sale__link--active');

        document.querySelectorAll('.tabs-item').forEach( function(tabsLink) {
            tabsLink.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target=${path}]`).classList.add('tabs-item--active');
    });
});

//$(".accordion").accordion();

//countdown init

const efcc_countdown = new countdown({
  target: '.countdown',
  dayWord: ' days',
  hourWord: ' часов',
  minWord: ' минут',
  secWord: ' секунд'
});
