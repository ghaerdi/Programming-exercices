# OOP birthday congrats
from datetime import date

# A class that takes name and birth date (optional), calculate age and check birthday.
class Person:
  def __init__(self, name, birth = False):
    self.name = name

    if birth:
        today = date.today()
        if (today.month < birth.month or (today.month == birth.month and today.day < birth.day)):
          compare_date = 1
        else: 
          compare_date = 0
        self.birth = birth
        self.birthday = today.day == birth.day and today.month == birth.month
        self.age = today.year - birth.year - compare_date

  # Congrats birthday of a other person.
  def congrats_birthday(self, person):
    if person.birthday:
      return f"{self.name}: Happy birthday for your {person.age} years! {person.name}!"
    else:
      return f"Today is not {person.name}'s birthday."

Manolo = Person("Manolo")
Pepe = Person("Pepe", date(2001, 11, 10))

print(Manolo.congrats_birthday(Pepe), Pepe.age)