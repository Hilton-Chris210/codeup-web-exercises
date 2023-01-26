"use strict";
const forecastUpdate = (map) => {
    let center = map.getCenter();
    let latitude = center.lat;
    let longitude = center.lng;
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        lat: latitude,
        lon: longitude,
        appid: keys.openWeather,
        units: 'imperial'
    }).done(function(data) {
        // console.log(data)
        // can be used to get forecast conditions at current time in increments of 24 hours
        let html2 = "";
        let html = `
                <div class="col-12 p-2 m-2 shadow bg-body-tertiary rounded text-center" id="current">
                    <div>Current Conditions for ${data.city.name}</div>
                    <img
                            src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png"
                            class="card-img-top"
                            alt="Weather description"
                    />
                    <div> Current Temp ${Math.round(data.list[0].main.temp)} °F</div>
                    <div> Max Temp ${Math.round(data.list[0].main.temp_max)} °F </div>
                    <div> Min Temp ${Math.round(data.list[0].main.temp_min)} °F</div>
                    <div> Winds ${Math.round(data.list[0].wind.speed)} mph</div>
                    <div> ${data.list[0].weather[0].description}</div>
                </div>`;
        for (let i = 1; i < data.list.length; i += 8) {
            html2 += `
                    <div class="col-2 p-2 m-2 shadow bg-body-tertiary rounded text-center">
                        <div>${(data.list[i].dt_txt).substring(5, 10)}</div>
                        <img
                                src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@4x.png"
                                class="card-img-top"
                                alt="Weather description"
                        />
                         <div> Max Temp ${Math.round(data.list[i].main.temp_max)} °F</div>
                        <div> Min Temp ${Math.round(data.list[i].main.temp_min)} °F</div>
                        <div> Winds ${Math.round(data.list[i].wind.speed)} mph</div>
                        <div> ${data.list[i].weather[0].description}</div>
                      </div>`;
        }
        $('#insertProducts').html(html);
        $('#insertProducts2').html(html2);


    }).fail(function(jqXhr, status, error) {
        //console.log(jqXhr);
        //console.log(status);
        //console.log(error);
    });

}

const initMap = async () => {
    mapboxgl.accessToken = keys.mapbox;
    let map = await new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-79.4512, 43.6568],
        zoom: 13
    });
    return map
}
const initControl = async () => {
    let map = await initMap();
    // Add the control to the map.
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    // If you need to put a event listener on the the search input, uncomment below
    // let searchInput = document.querySelector('.mapboxgl-ctrl-geocoder--input');
    forecastUpdate(map)
    return map;
}
document.addEventListener("DOMContentLoaded",async function(){
    let map = await initControl();
    // add an event listener when the map changes its center
    map.on('moveend', function () {
        forecastUpdate(map);
    });

});

// Print the first element
//console.log(searchInput); //search input

// openweather

