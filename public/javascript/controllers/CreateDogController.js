app.controller("CreateDogController", ['HomeFactory', '$state', function(HomeFactory, $state) {
	var vm = this;
	vm.dog = {}; //have to declare an empty object because we are going to fill it with properties in createDog.html
	vm.createDog = function() {
		HomeFactory.addDog(vm.dog);
		vm.dog = {};
		$state.go('Home');
	}

}]);