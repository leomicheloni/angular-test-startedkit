describe("Standard scenario", function(){
	// We can still test thing like always
	var person;
	// The code inside this function will be executed one time before each test
	beforeEach(function(){
		person = new Person();
		person.name = "pepe";
	});
	
	it("should set the name correctly", function(){
		expect(person.name).toBe("pepe");
		expect(person.age).toBe(0);
	});

	describe("Sub scenario 1", function(){
		it("exceptions", function(){
			
			var shouldFail = function(){
				throw new Error();
			};
			
			expect(shouldFail).toThrowError();
		});
		
	});
	
});
describe("Loading a module", function(){
	
	// the module function loads an angular module into the test
	beforeEach(module("testapp1"));
	
	it("retrieving values from module", inject(function(_consValue1_){
		expect(_consValue1_).toBe("hello world");		
	}));

	it("retrieving a controller", inject(function($controller){
		var controller = $controller("mainController");
		
	}));
	
});








