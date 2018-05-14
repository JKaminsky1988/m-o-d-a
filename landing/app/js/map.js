    function initMap() {
        var markerPosition = {
            lat: 50.390571,
            lng: 30.624008
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: markerPosition
        });
        var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            title: "M.O.D.A. Beauty Studio",
            desc: "M.O.D.A. Beauty Studio"
        });
        marker.setMap(map);
    }

