// a controller with scope, property and a function that changes the property
app.controller("mainController", function($scope){
	$scope.value1 = "i'm a value";
	$scope.doSomething = function(){
		$scope.value1 = "my value has changed";
	}
});

// a simple controller with no scope
app.controller("mainControllerWithoutScope", function(){
	
});

// a test service
app.factory("service1", function(){
	
	return {
		foo: function(){
			return "the foo function called"
		}
	};
});
