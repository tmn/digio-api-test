var digio_api = require('../digio-api')
, config = require('./config')


var api = new digio_api(config.token)

// api.droplets.list_droplets(function (err, data) {
//   console.log(data);
// });
//
// api.domains.list_all_domains(function (err, data) {
//   console.log(data);
// })
//
// api.domains.create_domain_record('tmn2.io', '191.168.0.1', function (err, data) {
//   console.log(data);
// })
