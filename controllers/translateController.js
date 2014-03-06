var BeGlobal = require("node-beglobal");

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: "PQIUPhLwoA%2Fwayme6Z5MGw%3D%3D"
});


var getFromLanguages = function(cb){
  beglobal.languages.all(function(err, results){
    if (err) {return console.log(err);}
    var fromArray = [];

    for (var i = 0; i < results.length; i++) {
      if (fromArray.indexOf(results[i].from.name)===-1) {
        fromArray.push(results[i].from.name);
      }
    };
    cb(fromArray);
  });
};

var getToLanguages = function(from, cb){
  beglobal.languages.all(function(err, results){
    if (err) {return console.log(err);}
    var toArray = [];

    for (var i = 0; i < results.length; i++) {
      if (from===results[i].from.name) {
        if (toArray.indexOf(results[i].to.name)===-1) {
          toArray.push(results[i].to.name);
        }
      }
    };
    cb(toArray);
  });
};


module.exports = {
  renderForm: function (req, res){
    getFromLanguages(function(fromArray){
      res.render("translateForm", {
        title: "Translate Word",
        fromLanguages: fromArray
      });
    })
  },
  toLng: function(req, res){
    var from = req.params.from;

    getToLanguages(from, function(toArray){
      res.send(toArray);
    });
  }

};
