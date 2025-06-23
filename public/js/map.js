

	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v12', // stylesheet location
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
;

    const marker = new mapboxgl.Marker({color : 'red'}) // create a new marker with a specified color   
        .setLngLat(listing.geometry.coordinates) // set the marker position [lng, lat]
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
        )
        .addTo(map); // add the marker to the map
