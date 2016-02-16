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
		// this test fails as the person object is initialized just in the parent scope
		person.age++;
	});
	
});
describe("Scenario1", function(){
	
	// The code inside this function will be executed one time before each test
	beforeEach(function(){
		
	});
	
	it("should do something", function(){
		
	});

	
	describe("Sub scenario 1", function(){
		
	
	});
	
});