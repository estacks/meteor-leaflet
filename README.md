# Leaflet for Meteor

[Leaflet.js](http://leafletjs.com/), a Javascript library for mobile-friendly interactive maps.

## Demo
Meteor Leafet Demo  |  [GitHub](https://github.com/bevanhunt/meteor-leaflet-demo)  |  [Demo](http://leaflet.meteor.com)

## Packaged Files
- Leaflet: 0.7.3
- Leaflet Providers: 1.1.1
- Leaflet Spin: 0.1.0
- Leaflet Marker Cluster: 0.4.0

## Usage
- add this package to your Meteor project
  ```bash
    meteor add bevanhunt:leaflet
  ```

- add a map div to html
  ```html
    <div id='map'></div>
  ```

- in Javascript client-side code define Leaflet map with default image path

  ```javascript
    if (Meteor.isClient) {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('map');
    }
  ```

- in Javascript client-side code use a free tile provider [optional] - [Read Docs](https://github.com/leaflet-extras/leaflet-providers)

  ```javascript
    if (Meteor.isClient) {
      L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
    }
  ```

- in Javascript client-side code use Leaflet Spin [optional]

  - to start the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(true);
      }
    ```

  - to stop the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(false);
      }
    ```

- in Javascript client-side code user Leaflet Marker Cluster [optional]

  - add marker cluster
    ```javascript
        if (Meteor.isClient) {
          var markers = new L.MarkerClusterGroup();
          markers.addLayer(new L.Marker([51.5, -0.09]));
          map.addLayer(markers);
        }
    ```

## GeoJSON
I suggest the free web service - [Orge Web Service](http://ogre.adc4gis.com/)

## License
MIT/X11
