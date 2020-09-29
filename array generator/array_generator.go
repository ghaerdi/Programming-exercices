package main

import (
	"errors"
	"fmt"
)

func Range(params ...int) (numbers []int, err error) {
	if len(params) <= 3 {
		num, limit, step := 0, params[0], 1
		if len(params) == 2 || len(params) == 3 {
			num, limit = params[0], params[1]
		}
		if len(params) == 3 {
			step = params[2]
		}
		for ; num < limit; num += step {
			numbers = append(numbers, num)
		}
	} else {
		err = errors.New("Range func takes maximum 3 arguments")
	}
	return
}

func main() {
	rangeNumbers, rangeErr := Range(5, 25, 3)
	if rangeErr == nil {
		fmt.Println(rangeNumbers)
	} else {
		fmt.Println(rangeErr)
	}
}
