// window.$ = require('./jquery-3.1.1');
// window.jQuery = window.$;
require('./wix.min');
// require('./editor-ui-lib-jquery');
// require('./wix.min');
// window.WixReact = require('./editor-ui-lib');

module.exports = {
  WixMin: require('./wix.min'),
  WixReact: require('react'),
  WixReactLib: require('./editor-ui-lib'),
  WixReactDOM: require('react-dom')
};
  