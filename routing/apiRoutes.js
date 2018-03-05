var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends)
	});

	app.get("/api/data",function(req, res) {
		res.json(friends)
	});

	app.post("api/friends", function(req, res) {
		
		var results = req.body;

		results.name = results.name.replace(/\s+/g, "");
		results.photo = results.photo.replace(/\s+/g, "");

		var compName = "";
		var compPhoto = "";
		var newScore = results.scores;

		var difference = 10000;

		for (var i = 0; friends.length; i++) {
			var initDiff = 0;
		}

	var result = [friends[0]];
    res.json({
      status: 'OK',
      result
    });
	})
};