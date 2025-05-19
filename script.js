// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj = new Movie("vikram", "RKFI", "8.5");
console.log(obj.title, obj.studio, obj.rating);

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movies {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj2 = new Movies("Casino Royale", "Eon Productions");
console.log(obj2.title,obj2.studio,obj2.rating);

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Moviess {
  constructor(title, studio, rating ) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj3 = new Moviess("Casino Royale", "Eon Productions", "PG13");
console.log(obj3.title,obj3.studio,obj3.rating);

// 3. write a "Person" class to hold all the details
class Person {
  constructor(name, age, gender, maritalstatus, contact, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.maritalstatus = maritalstatus;
    this.contact = contact;
    this.email = email;
  }
}
const result = new Person(
  "aki",
  "23",
  "female",
  "single",
  "1234567890",
  "aki11@gmail.com"
);
console.log(
  result.name,
  result.age,
  result.gender,
  result.maritalstatus,
  result.contact,
  result.email
);

