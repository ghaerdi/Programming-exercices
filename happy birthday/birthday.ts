// OOP birtday congrats

// Date works strange (I think it's because of the javascript engines), I recommend run this exercise in replit.

// A class that takes name and birth date, calculate age and check birthday.
class Person {
  name: string;
  birth: Date;
  birthday: boolean;
  age: number;

  constructor(name: string, birth: Date ) {
    const today: Date = new Date;
    let compareDate: number;
    if (today.getMonth() < birth.getMonth() || (today.getMonth() == birth.getMonth() && today.getDay() < birth.getDay())) {
        compareDate = 1
    } else {
        compareDate = 0
    }
    this.name = name;
    this.birth = birth;
    this.birthday = birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
    this.age = today.getFullYear() - birth.getFullYear() - compareDate;
  }

  // Congrats birthday of a other person.
  congratsBirthday(person: Person): string {
    if (person.birthday) {
      return person.birthday && `${this.name}: Happy birthday for your ${person.age} years! ${person.name}!`  
    } else {
      return `Today is not ${person.name}'s birtday.`
    }
    
  }
}

const Pepe: Person = new Person("Pepe", new Date("2002-09-9"));
const Manolo: Person = new Person("Manolo", new Date("2000-03-07"));

console.log(Manolo.congratsBirthday(Pepe))