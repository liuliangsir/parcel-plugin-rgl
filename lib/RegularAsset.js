const Regular = require('regularjs');
const path = require('path');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

class RegularAsset extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
  }

  parse(code) {
    // Parse Regular into an HTML file and pass it on to the HTMLAsset
    return super.parse(Regular.parse(code, {
      stringify: true
    }));
  }
}

module.exports = RegularAsset;
