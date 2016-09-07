// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



// var myLnSrvDscy = [
//   { plugtype: 'CD-ROM', plugname: 'Plug-00xx11', plugstatus: 'LinkNext'},
//   { plugtype: 'CAM', plugname: 'Plug-00xx22', plugstatus: 'LinkNext'},
//   { plugtype: 'HDD', plugname: 'Plug-00xx33', plugstatus: ''}
// ];


var ractive = require('ractive');

  // // 2016-06-02 Neil: added in +++
ractive = new Ractive({
  // The `el` option can be a node, an ID, or a CSS selector.
  el: '#container',

  // We could pass in a string, but for the sake of convenience
  // we're passing the ID of the <script> tag above.
  template: '#template',

  // Here, we're passing in some initial data
  data: { lnsrvdscy: myLnSrvDscy }
});

  // // 2016-06-02 Neil: added in ---

// ractive = new Ractive({
//   // The `el` option can be a node, an ID, or a CSS selector.
//   el: '#container',

//   // We could pass in a string, but for the sake of convenience
//   // we're passing the ID of the <script> tag above.
//   template: '#template',

//   // Here, we're passing in some initial data
//   data: { name: 'world' }
// });
