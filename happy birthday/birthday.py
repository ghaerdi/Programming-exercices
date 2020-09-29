# POO birtday congrats
from datetime import date

# A class that takes name and birth date (optional), calculate age and check birthday.
class Person:
  def __init__(self, name, birth = False):
    self.name = name

    if (birth):
        today = date.today()
        compare_date = today.month > birth.month or today.day > birth.day
        self.birth = birth
        self.birthday = today.day == birth.day and today.month == birth.month
        self.age = today.year - birth.year - compare_date

  # Congrats birthday of a other person.
  def congrats_birthday(self, person):
    return person.birth and f"{self.name}: Happy birthday for your {person.age} years! {person.name}!"

pepe = Person("Pepe", date(2001, 9, 29))
manolo = Person("Manolo")

print(manolo.congrats_birthday(pepe))
# Manolo: Happy birthday for your X years! Pepe!
