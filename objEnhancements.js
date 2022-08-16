const createInstructor = (firstName, lastName) => {
    return {
        [firstName] : firstName,
        [lastName] : lastName
    };
}

var favoriteNumber = 42;
var instructor = {
    firstName: 'Colt'
    [favoriteNumber] = 'That is my favorite!'
};



var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  const createAnimal = (species, verb, noise) => {
    return {
        species : species,
        [verb](){
            console.log(noise)
        },
    }
}