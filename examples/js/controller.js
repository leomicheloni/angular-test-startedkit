app.controller("mainController", function($scope){
	$scope.value1 = "i'm a value";
	$scope.doSomething = function(){
		$scope.value1 = "my value has changed";
	}
});

app.controller("mainControllerWithoutScope", function(){
	
});