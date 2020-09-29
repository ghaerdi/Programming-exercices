package main

import (
	"fmt"
	"strconv"
)

// Generate array from 0 to N
func Array(limit int) (numbers []int) {
	for num := 0; num < limit; num++ {
		numbers = append(numbers, num)
	}
	return
}

// Generate and add dividers of a number
func addDividers(n int) (result int) {
	for _, num := range Array(n) {
		if num != 0 && n%num == 0 {
			result += num
		}
	}
	return
}

// Check if a number have a friend and return a friendly message.
func friendNumber(n int) string {
	posibleFriend := addDividers(n)
	strNumber := strconv.Itoa(n)
	strPosibleFriend := strconv.Itoa(posibleFriend)

	if addDividers(posibleFriend) == n {
		return strNumber + " and " + strPosibleFriend + " are friends :]"
	}
	return strNumber + " don't have friends :["
}

func main() {
	fmt.Println(friendNumber(220))
}
