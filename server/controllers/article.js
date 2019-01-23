const HTTP = require('../utils/http-common');

module.exports = {

  archive: function(req, res) {
    HTTP.get(`svc/archive/v1/${req.query.year}/${req.query.month}.json`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
  },

  search: function(req, res) {
    HTTP.get(`svc/search/v2/articlesearch.json?q=${req.query.q}&page=${req.query.page || 0}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  
};