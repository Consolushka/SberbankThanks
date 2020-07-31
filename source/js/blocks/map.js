var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

  var Array = [];
  var multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: [
      [55.831999, 37.554834],
      [55.831999, 37.554834]
    ]
  });
  var btnsAll = document.querySelectorAll(".partner__shop-location-item-info-route");
  var wrappers = document.querySelectorAll(".partner__shop-location-item");
  for (var i = 0; i < btnsAll.length; i++) {
    Array.push({'geoX': btnsAll[i].dataset.geox, 'geoY': btnsAll[i].dataset.geoy, 'Address': btnsAll[i].dataset.address});
  }
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [55.752506, 37.621756], // Москва
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });
  for (i = 0; i < Array.length; i++) {
    myMap.geoObjects
      .add(new ymaps.Placemark([Number(Array[i].geoX), Number(Array[i].geoY)], {
        balloonContent: 'Адрес: <br>' + Array[i].Address
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/apple.png',
        iconImageSize: [20, 20]
      }))
  }
  btnsAll.forEach(function (btn, j) {
    btn.addEventListener("click", function () {
      for (i = 0; i < wrappers.length; i++) {
        wrappers[i].classList.remove("partner__shop-location-item--active");
      }
      wrappers[j].classList.add("partner__shop-location-item--active");
      console.log("click");
      multiRoute.model.setReferencePoints([
        [55.831999, 37.554834],
        [Array[j].geoX, Array[j].geoY]
      ]);
      multiRoute.model.setParams({
        boundsAutoApply: true
      });

// Добавление маршрута на карту.
      myMap.geoObjects.add(multiRoute);
    })
  });
}
