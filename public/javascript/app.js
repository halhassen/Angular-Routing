angular.module('app', []) 
.controller("FormController", [/* scope would go here*/function() {
	var vm = this;
	vm.user = {};
	vm.register = function() {
		console.log(vm.user);
	}
}])