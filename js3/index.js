// Apply()

let nameObj = {
	name: "Captain"
}

let PrintName = {
	name: "Steve Rogers",
	sayHi: function (...age) {
		console.log(this.name + " age is " + age);
	}
}
PrintName.sayHi.apply(nameObj, [42]);

// Bind()

let name = {
	name: "Tony"
}

let PName = {
	nameS: "steve",
	sayHi: function (age) {
		console.log(this.name + " age is " + age);
	}
}

PName.sayHi.call(nameS, 42);

// call()

let Obj = {
	name: "Tony"
}

let Name = {
	name: "steve",
	sayHi: function () {

		// Here "this" points to nameObj
		console.log(this.name);
	}
}

let HiFun = Name.sayHi.bind(Obj);
HiFun();


