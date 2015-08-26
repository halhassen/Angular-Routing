app.controller("HomeController", ["HomeFactory", function(HomeFactory) {
	var vm = this;
	vm.page = "Home";
	vm.dog = HomeFactory.dog; //references 'o'
	vm.dogs = HomeFactory.dogArr;
}]);