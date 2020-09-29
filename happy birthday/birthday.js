// POO birthday congrats

// A class that takes name and birth date (optional), calculate age and check birthday.
class Person {
    constructor(name, birth = false) {
        this.name = name;

        if (birth) {
            const today = new Date();
            this.birth = birth;
            this.birthday = birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
            this.age = Math.floor((today - birth) / 31536000000);
        }
    }

    // Congrats birthday of a other person.
    congratsBirthday(person) {
        return person.birthday && `${this.name}: Happy birthday for your ${person.age} years! ${person.name}!`;
    }
}

const pepe = new Person("Pepe", new Date("1999-09-30"));
const manolo = new Person("Manolo");

console.log(manolo.congratsBirthday(pepe));
// Manolo: Happy birthday for your X years! Pepe!
