// A try of POO style.
package main

import (
  "fmt"
  "time"
  "strconv"
)

// Take name, birth, age and birthday
type personInfo struct {
  name string
  birth time.Time
  age int
  birthday bool
}

// Congrats birthday of other person
func (this *personInfo) congratsBirthday(person personInfo) string {
  if person.birthday {
    return this.name + ": Happy birthday for your " + strconv.Itoa(person.age) + " years! " + person.name + "!"
  } else {
    return ""
  }
}

// A function that calculate actual age
func calculateAge(birth time.Time) int {
  today := time.Now()
  var compareDate int

  if today.Day() > birth.Day() && today.Month() > birth.Month() {
    compareDate = 1
  } else {
    compareDate = 0
  }

  return today.Year() - birth.Year() - compareDate
}

// Check if today is birthday
func checkBirtday(birth time.Time) bool {
  today := time.Now()
  if today.Day() == birth.Day() && today.Month() == birth.Month() {
    return true
  } else {
    return false
  }
}

func main() {
  pepeBirth := time.Date(2001, 9, 29, 0, 0, 0, 0, time.UTC)
  manoloBirth := time.Date(2000, 7, 23, 0, 0, 0, 0, time.UTC)

  pepe := personInfo{"Pepe", pepeBirth, calculateAge(pepeBirth), checkBirtday(pepeBirth)}
  manolo := personInfo{"Manolo", manoloBirth, calculateAge(manoloBirth), checkBirtday(manoloBirth)}

  fmt.Println(manolo.congratsBirthday(pepe))
  // Manolo: Happy birthday for your X years! Pepe!
}
