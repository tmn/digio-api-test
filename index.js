var config = require('./config')
var digio_api = require('../digio-api')(config.token)

digio_api.droplets.list_droplets(function (err, data) {
  console.log(data);
});
//
// digio_api.domains.list(function (err, data) {
//   console.log(data);
// })
//
// digio_api.domains.create('tmn2.io', '191.168.0.1', function (err, data) {
//   console.log(data);
// })
//
// digio_api.domains.get('tmn.io', function (err, data) {
//   console.log(data);
// })
//
// digio_api.domains.delete('tmn2.io', function (err, data) {
//   console.log(data);
// })
