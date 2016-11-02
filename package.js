Package.describe({
  name: "estacks:leaflet",
  summary: "AtmosphereJS wrapper for Leaflet.",
  git: "https://github.com/estacks/meteor-leaflet.git",
  author: "Eric King <eric@king.rocks>",
  version: "3.0.1_1",
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
    '.npm/package/node_modules/leaflet/src/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/leaflet_spin.js',
    'styles/leaflet.css',
  ], 'client');
  api.addAssets([
    'styles/images/layers-2x.png',
    'styles/images/layers.png',
    'styles/images/marker-icon-2x.png',
    'styles/images/marker-icon.png',
    'styles/images/marker-shadow.png'
  ],'client');
});
