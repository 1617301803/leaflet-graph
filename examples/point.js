var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 2
});
var tileLayer = L.tileLayer('./map/{z}/{x}/{y}.png', {
    tms: true
});
tileLayer.addTo(map);

var pointLayer = L.pointLayer();
pointLayer.addTo(map);

function getData() {
    var lon = Math.random() * 100;
    var lat = Math.random() * 100;

    return {
        //id: idIndex++,
        lon: lon,
        lat: lat,
        radius: 1,
        color: 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',1)'
    }
}

var data = [];
for (var i = 0; i < 1000; i++) {
    data.push(getData())
}

pointLayer.data(data);