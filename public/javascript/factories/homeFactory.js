app.factory("HomeFactory", [function() {
	var HomeFactory = {};
	HomeFactory.stuff = ["One", "Two"]
	console.log("HomeFactory running")
	return HomeFactory
}])