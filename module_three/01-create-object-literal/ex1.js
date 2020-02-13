let cat = {
  name: {
    first: "Stevie",
    last: "Nicks"
  },
  age: 7,
  gender: "female",
  interests: ["napping", "eating", "purring", "mice", "mischief"],

  greeting: () => {
    alert(`Hi ${cat.name.first}`);
  },
  bio: () => {
    alert(`${cat.name.first} ${cat.name.second} is ${cat.age} years old. They like ${cat.interests[0]} and ${cat.interests[1]}`);
  }
}
