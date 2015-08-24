angular.module('app', []) //brings in non-angular dependencies
/*.controller('OldController', ['$scope', function($scope) { //brings in dependencies that are brought in from angular
	$scope.popup = function() {
		$scope.thing = $scope.stuff;
	};
}])*/
.controller('OtherController', [function() {
	var vm = this;
	vm.newCar = "";
	vm.cars = [];
	vm.editing = false;
	vm.editCar = {};
	vm.create = function() {
		vm.cars.push(vm.newCar);
		vm.newCar = "";
	}
	
	vm.startEdit = function(index) {
		vm.editing = true;
		vm.editCar.place = index;
		vm.editCar.name = vm.cars[index];
	}

	vm.submitEdit = function(car) {
		vm.cars[vm.editCar.place] = vm.editCar.name;
		vm.editing = false;
	}

	vm.exp = function() {
		if((1+1) === 2) {
			return true;
		}
		else {
			return false;
		}
		//ng-if REMOVES it from the DOM tree, not hides it
	}
}]);