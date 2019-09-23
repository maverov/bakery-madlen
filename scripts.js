$(function () {
    $(".hamburger-menu").on("click", function() {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 41.932, lng: 25.556};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

let currentYear = document.getElementById("year");
currentYear.innerHTML = new Date().getFullYear();