var digio_api = require('../digio-api')
, config = require('./config')


var api = new digio_api(config.token)

// api.droplets.list_droplets(function (err, data) {
//   console.log(data);
// });
//
// api.domains.list(function (err, data) {
//   console.log(data);
// })
//
// api.domains.create('tmn2.io', '191.168.0.1', function (err, data) {
//   console.log(data);
// })
//
// api.domains.get('tmn.io', function (err, data) {
//   console.log(data);
// })
// 
// api.domains.delete('tmn2.io', function (err, data) {
//   console.log(data);
// })
