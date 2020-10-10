// OOP birthday congrats

// Date works strange (I think it's because of the javascript engines), I recommend run this exercise in replit.

// A class that takes name and birth date (optional), calculate age and check birthday.
class Person {
    constructor(name, birth = false) {
        this.name = name;

        if (birth) {
            const today = new Date();
            if (today.getMonth() < birth.getMonth() || (today.getMonth() == birth.getMonth() && today.getDay() < birth.getDay())) {
                var compareDate = 1
            } else {
                var compareDate = 0
            }
            this.birth = birth;
            this.birthday = birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
            this.age = today.getFullYear() - birth.getFullYear() - compareDate
        }
    }

    // Congrats birthday of a other person.
    congratsBirthday(person) {
        if (person.birthday) {
            return person.birthday && `${this.name}: Happy birthday for your ${person.age} years! ${person.name}!`;
        } else {
            return `Today is not ${person.name}'s birthday.`
        }
    }
}

const pepe = new Person("Pepe", new Date("1999-10-12"));
const manolo = new Person("Manolo");

console.log(manolo.congratsBirthday(pepe));