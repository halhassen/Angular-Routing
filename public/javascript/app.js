var app = angular.module("app", ["ui.router"])
app.config(function($stateProvider, $urlRouterProvider) { //these dependencies allow them to be accessbile in the block of code
	$urlRouterProvider.otherwise("/"); //redirects to homepage in a situation with an invalid route
	$stateProvider
	.state("Home", {
		url: "/",
		templateUrl: "javascript/views/home.html", //here and vm.page point to home.html
		controller: "HomeController",
		controllerAs: "vm"
	})
	.state("Profile", {
		url: "/profile",
		templateUrl: "javascript/views/profile.html",
		controller: "ProfileController",
		controllerAs: "vm"
	})
	.state("CreateDog", {
		url: "/Dog/Create",
		templateUrl: "javascript/views/createDog.html",
		controller: "CreateDogController",
		controllerAs: "vm"
	})
})
