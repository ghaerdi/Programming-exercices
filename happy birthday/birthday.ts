// POO birtday congrats

// A class that takes name and birth date, calculate age and check birthday.
class Person {
  name: string;
  birth: Date;
  birthday: boolean;
  age: number;

  constructor(name: string, birth: Date ) {
    const today: Date = new Date;
    const compareDate: number = today.getDate() > birth.getDate() || today.getMonth() > birth.getMonth()! ? 1 : 0;

    this.name = name;
    this.birth = birth;
    this.birthday = birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
    this.age = today.getFullYear() - birth.getFullYear() - compareDate;
  }

  // Congrats birthday of a other person.
  congratsBirthday(person: Person): string | boolean {
    return person.birthday && `${this.name}: Happy birthday for your ${person.age} years! ${person.name}!`
  }
}

const pepe = new Person("Pepe", new Date("2002-09-30"))
const manolo = new Person("Manolo", new Date("2000-03-07"))

console.log(manolo.congratsBirthday(pepe))
// Manolo: Happy birthday for your X years! Pepe!
