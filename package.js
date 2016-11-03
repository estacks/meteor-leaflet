Package.describe({
  name: "estacks:leaflet",
  summary: "AtmosphereJS wrapper for Leaflet.",
  git: "https://github.com/estacks/meteor-leaflet.git",
  author: "Eric King <eric@king.rocks>",
  version: "3.0.1_3",
  license: "MIT"
});

Npm.depends({
  "spin.js": "2.3.2",
  "leaflet": "1.0.1",
  "leaflet-providers": "1.1.15"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/leaflet_spin.js',
    'styles/leaflet.css',
  ], 'client');
  api.addAssets([
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
