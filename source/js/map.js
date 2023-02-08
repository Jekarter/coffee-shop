const mapImg = document.querySelector('.page-main__map-img');
const leafletMap = document.querySelector('.map-leaflet')

mapImg.classList.add('map-nojs')
leafletMap.classList.remove('map-nojs')

var map = L.map('map').setView([59.968367, 30.317440], 25);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var iconOptions = {
  iconUrl: 'img/map/marker.png',
  iconSize: [38,50]
}

var customIcon = L.icon(iconOptions)

var markerOptions = {
  icon: customIcon
}

var marker = L.marker([59.968367, 30.317440], markerOptions)
  .addTo(map)
  .bindPopup('Санкт-Петербург, набережная реки Карповки, дом 5');
