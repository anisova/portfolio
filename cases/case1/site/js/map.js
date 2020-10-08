ymaps.ready(init);


function init () {
  var map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12,
      controls:['zoomControl'],
      behaviors:['drag']
  });
  var placemark= new ymaps.Placemark([59.97,30.31],{
    hintContent:'ул. Литераторов, д.19',
    balloonContent:'Заходите к нам! <br> ул. Литераторов, д.19'
  },
  {
    iconLayout:'default#image',
    iconImageHref:'img/map.png',
    iconImageSize:[46,57]
  });
  var placemark1= new ymaps.Placemark([59.93,30.35],{
    hintContent:'ул. Литераторов, д.19',
    balloonContent:'Заходите к нам! <br> ул. Литераторов, д.19'
  },
  {
    iconLayout:'default#image',
    iconImageHref:'img/map.png',
    iconImageSize:[46,57]
  });
  var placemark2= new ymaps.Placemark([59.92,30.30],{
    hintContent:'ул. Литераторов, д.19',
    balloonContent:'Заходите к нам! <br> ул. Литераторов, д.19'
  },
  {
    iconLayout:'default#image',
    iconImageHref:'img/map.png',
    iconImageSize:[46,57]
  });
  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
}
