var obj =  {
  name: "John Doe",
  greet: function() {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();

// .call changes the this keyword to point to the 
// object passed to call vs the parent object
obj.greet.call({ name: 'Jane Doe'});

// .apply works the same as .call with the difference that
// any parameters are passed in as an array instead of comma 
// separated
obj.greet.apply({ name: 'Jane Doe'});

//These options essentially allow borrowing methods and changing
//the this to which they apply
//



