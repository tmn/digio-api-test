var digio_api = require('../digio-api')
, config = require('./config')


var api = new digio_api(config.token)

api.droplets.list_droplets(function (err, data) {
  console.log(data);
});
