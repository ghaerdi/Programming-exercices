// OOP birthday cograts

// A class that takes name and birth date, calculate age and check birthday.
class Person {
    public string name;
    DateTime birth;
    public int age;
    public bool birthday;

    int compareDate;
    DateTime today = DateTime.Now;

    public Person(string personName, DateTime personBirth) {
        name = personName;
        birth = personBirth;
        if (today.Month < birth.Month || (today.Month == birth.Month && today.Day < birth.Day)) {
            compareDate = 1;
        } else {
            compareDate = 0;
        }
        age = today.Year - birth.Year - compareDate;
        birthday = today.Month == birth.Month && today.Day == birth.Day;
    } 

    // Congrats birthday of a other person (or himself).
    public string congratsBirthday(Person person) {
        if (person.birthday) {
            return $"{name}: Happy birthday for your {person.age.ToString()} years! {person.name}!";
        } else {
            return $"Today is not {person.name}'s birthday.";
        }
    }
}

Person Manolo = new Person("Manolo", new DateTime(2004, 05, 21));
Person Pepe = new Person("Pepe", new DateTime(2002, 10, 01));

Console.WriteLine(Manolo.congratsBirthday(Pepe));