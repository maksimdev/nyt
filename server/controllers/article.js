const HTTP = require('../utils/http-common');

module.exports = {

  find: function(req, res) {
    HTTP.get(`svc/archive/v1/${req.query.year}/${req.query.month}.json`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  
};