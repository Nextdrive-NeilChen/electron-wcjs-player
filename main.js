const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipc = electron.ipcMain;

//require('./ServiceDiscovery.js');

// var sudo = require('electron-sudo');
//
// var options = {
//   name: 'Service Discovery',
//   process: {
//     options: {
//
//     },
//     on: function(ps) {
//       ps.stdout.on('data', function(data) {});
//       setTimeout(function() {
//         ps.kill();
//       }.bind(ps), 50000);
//     }
//   }
// };

// var trim = require("trimmer");
//
// var ip = require('ip');
// var NodeCache = require('cacheman');
// var myCache = new NodeCache();
//
// var CachemenFile = require('cacheman-file');
// var myCacheFile = new CachemenFile('tmp');
//
// var myKeyDeviceUid;
//
// var Cap = require('cap').Cap,
//     decoders = require('cap').decoders,
//     PROTOCOL = decoders.PROTOCOL;
//
// var c = new Cap(),
//     device = Cap.findDevice(ip.address()),
//     filter = 'udp and dst port 54321',
//     bufSize = 10 * 1024 * 1028,
//     buffer = new Buffer(65535);

let mainWindow;

// const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
//   // Someone tried to run a second instance, we should focus our window.
//   if (mainWindow) {
//     if (mainWindow.isMinimized()) mainWindow.restore();
//     mainWindow.focus();
//   }
// });
//
// if (shouldQuit) {
//   app.quit();
//   return;
// }

// Create myWindow, load the rest of the app, etc...
app.on('ready', () => {

  mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // var linkType = c.open(device, filter, bufSize, buffer);
  //
  // c.setMinBytes && c.setMinBytes(0);
  //
  // c.on('packet', function (nbytes, trunc) {
  //   console.log('A packet: length ' + nbytes + ' bytes, truncated? ' + (trunc ? 'yes' : 'no'));
  //
  //   if(linkType == 'ETHERNET') {
  //     var ret = decoders.Ethernet(buffer);
  //
  //     if(ret.info.type === PROTOCOL.ETHERNET.IPV4) {
  //       console.log('Decoding IPV4 ...');
  //
  //       ret = decoders.IPV4(buffer, ret.offset);
  //       console.log('from: ' + ret.info.srcaddr + ' to ' + ret.info.dstaddr);
  //
  //       if (ret.info.protocol === PROTOCOL.IP.TCP) {
  //         var datalen = ret.info.totallen - ret.hdrlen;
  //
  //         console.log('Decoding TCP ...');
  //
  //         ret = decoders.TCP(buffer, ret.offset);
  //         console.log(' from port: ' + ret.info.srcport + ' to port: ' + ret.info.dstport);
  //         datalen -= ret.hdrlen;
  //         console.log(buffer.toString('binary', ret.offset, ret.offset + datalen));
  //
  //       }
  //       else if (ret.info.protocol === PROTOCOL.IP.UDP) {
  //         console.log('Decoding UDP ...');
  //
  //         ret = decoders.UDP(buffer, ret.offset);
  //         //console.log(' from port: ' + ret.info.srcport + ' to port: ' + ret.info.dstport);
  //         //console.log(buffer.toString('binary', ret.offset, ret.offset + ret.info.length));
  //
  //         var Dissolve = require('dissolve');
  //         //var Buffertrim = require('buffertrim');
  //         //var trimEnd = Buffertrim.trimEnd;
  //         var parser = Dissolve()
  //                     .string('leading', 42).tap(function () {
  //                       this.vars.leading = trim.right(this.vars.leading, "\u0000");
  //                     })
  //                     .string('magic1', 8)
  //                     .string('magic2', 8)
  //                     .uint16('version')
  //                     .uint16('device_type')
  //                     .string('device_name', 32).tap(function () {
  //                       this.vars.device_name = trim.right(this.vars.device_name, "\u0000");
  //                     })
  //                     .string('device_serial', 16).tap(function () {
  //                       this.vars.device_serial = trim.right(this.vars.device_serial, "\u0000");
  //                     })
  //                     .string('device_uid', 36).tap(function() {
  //                       myKeyDeviceUid = this.vars.device_uid;
  //                       console.log (`myKeyDeviceUid =  ${myKeyDeviceUid} `);
  //                     })
  //                     .string('service_address_v4', 16).tap(function () {
  //                       this.vars.service_address_v4 = trim.right(this.vars.service_address_v4, "\u0000");
  //                     })
  //                     .string('service_address_v6', 46).tap(function () {
  //                       this.vars.service_address_v6 = trim.right(this.vars.service_address_v6, "\u0000");
  //                     })
  //                     .uint16('service_port')
  //                     .string('service_interface', 16).tap(function () {
  //                       this.vars.service_interface = trim.right(this.vars.service_interface, "\u0000");
  //                     })
  //                     .uint16('password_protected')
  //                     .uint16('battery_voltage')
  //                     .uint16('vendor_id')
  //                     .uint16('device_id')
  //                     .uint16('state')
  //                     .uint32('capability_flag')
  //                     .uint16('secured_service_port')
  //                     .tap(function() {
  //                       this.push(this.vars);
  //                       this.vars={};
  //                     });
  //           parser.write(buffer);
  //           parser.on('readable', function() {
  //             var e;
  //             // while(e = parser.read()) {
  //             //   console.log(e);
  //             // }
  //             e = parser.read();
  //             //console.log(e);
  //
  //             // try JSON.stringify
  //             console.log(JSON.stringify(e));
  //
  //             // try updating the in-memory cache
  //             myCache.set(myKeyDeviceUid, e, 15, function(err, value) {
  //               if (err)
  //                 throw err;
  //               //console.log (value);
  //             });
  //
  //             // try file based cacheman-file
  //             myCacheFile.set(myKeyDeviceUid, e, 15, function(error) {
  //               if (error) throw error;
  //
  //             });
  //           });
  //
  //           // // only meant for testing
  //           // // try to get from the NodeCache
  //           // myCache.get(myKeyDeviceUid, function (err, value) {
  //           //   if (err)
  //           //     throw err;
  //           //   //console.log (`Retrieved from cache for the ${myKeyDeviceUid} = ${value}`);
  //           // });
  //
  //
  //
  //       }
  //       else {
  //         console.log('Unsupported IPV4 protocol: ' + PROTOCOL.IP[ret.info.protocol]);
  //       }
  //     }
  //     else {
  //       console.log('Unsupported Ethertype: ' + PROTOCOL.ETHERNET[ret.info.type]);
  //     }
  //   }
  // });
  // sudo.exec('echo hello', options, function(error) { console.log(error); });

});
