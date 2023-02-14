const user = {
    name: 'Felipe Santos',
    age: 35,
    stack: 'Fullstack'
}

const userAddress = {
    city: "Cachoeiro de Itapemirim",
    state: 'ES',
    country:'Brasil'
}

console.log("--------------Sem Spread------------")

const { name, age, stack } = user;
const { city, state, country } = userAddress;

const userData = {
    name: name,
    age: age,
    stack: stack,
    address: {
        city: city,
        state: state,
        country:country
    }
}

console.log(userData);

console.log("--------------Com Spread------------");

const newUserData = { ...user, name:'Felipe', address: {...userAddress, city:"Cach. Ita"}};
console.log(newUserData);
