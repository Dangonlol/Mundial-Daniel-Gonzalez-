if (localStorage.getItem("logged") !== "true") {
    window.location.href = "/";
}
let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 12);


L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);

let icon = L.icon({
    iconUrl: "./imagenes/marker.png",
    iconSize: [40, 40],
    iconAnchor: [22, 22],
    popupAnchor: [8, -41],
});

document.getElementById('select-location').addEventListener('change', function (e) {
    let coords = e.target.value.split(",");
    L.marker(coords).addTo(map)
    map.flyTo(coords, 13);
});

function closeHandler() {
    localStorage.setItem("logged", false);
    window.location.href = "/";
}
document.getElementById('logout-button').addEventListener('click', closeHandler, false);


