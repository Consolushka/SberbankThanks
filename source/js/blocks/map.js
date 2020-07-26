var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

  var geoArrX = [];
  var geoArrY = [];
  var btnsAll = document.querySelectorAll(".partner__shop-location-item-info-route");
  var wrappers = document.querySelectorAll(".partner__shop-location-item");
  for (var i = 0; i < btnsAll.length; i++) {
    geoArrX.push(btnsAll[i].dataset.geox);
    geoArrY.push(btnsAll[i].dataset.geoy);
  }
  console.log(geoArrX, geoArrY);
  console.log(Number(geoArrX[0]));
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
  for (i = 0; i < geoArrX.length; i++) {
    console.log(i);
    myMap.geoObjects
      .add(new ymaps.Placemark([Number(geoArrX[i]), Number(geoArrY[i])], {
        balloonContent: 'цвет <strong>красный</strong>'
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
      myMap.geoObjects.remove(multiRoute);
      console.log("click");
      var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
        referencePoints: [
          [55.831999, 37.554834],
          [geoArrX[j], geoArrY[j]],
        ]
      }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
      });

// Добавление маршрута на карту.
      myMap.geoObjects.add(multiRoute);
    })
  });
}
