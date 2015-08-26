app.factory("HomeFactory", ['$http', function($http) {
	var o = {};
	var firebase= "https://dogpound.firebaseio.com/"; //private variable so it stays in the factory and not in the controller
	o.dogArr=[];
	o.addDog = function(dog) {
		//$httppost('url', {obj}).success(function(res as javascript object function){})
		$http.post(firebase + '.json', dog).success(function(res) {
			dog._id = res.name;
			o.dogArr.push(dog);
		})
		//2nd property is the object being posted
		//$http automatically stringifies the object
	}
	//get all dogs from database on page load
	$http.get(firebase + '.json').success(function(res) {
		for(var prop in res) {
			res[prop]._id = prop;
			o.dogArr.push(res[prop]);
		}
	})
	//do updating and deleting for homework, reference weekend ajax work

	return o;
}]);