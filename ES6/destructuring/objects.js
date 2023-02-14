const users = {
    name: "Felipe",
    age: 35,
    stack: "Fulllstack",
    address: {
        city: "Cachoeiro de Itapemirim",
        state: "ES",
        country: "Brasil"
    }
};

console.log(users.name);
console.log(users.age);
console.log(users.stack);
console.log(users.address.city);
console.log(users.address.state);
console.log(users.address.country);

console.log("=========================");

const { name, age, stack, address:{city, state, country} } = users;

console.log(name);
console.log(age);
console.log(city);
console.log(state);
console.log(country);