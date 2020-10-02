// Generate a range of numbers like python, takes 1 to 3 arguments.
// range(limit);
// range(start, limit, step);
// range return a array of numbers or a error.
int[] range(params int[] numbers) {
    if (numbers.Length <= 3) {
        int num = 0, limit = numbers[0], step = 1;

        if (numbers.Length >= 2) {
            num = numbers[0];
            limit = numbers[1];
        }
        
        if (numbers.Length == 3) {
            step = numbers[2];
        }

        // Create and calculate the array length.
        float calculateArrayLength = (float) (limit - num) / step;
        int roundArrayLength = (int)  Math.Ceiling(calculateArrayLength);
        int[] numbersArray = new int[roundArrayLength];

        // Replace each value of the array to the increment of num.
        for (int i = 0; num < limit; num += step, i++) {
            numbersArray[i] = num;
        }

        return numbersArray;
    } else {
        // When range recieve more than 3 arguments the throw a error.
        throw new System.ArgumentException("range method takes maximun 3 arguments");
    }
}

int[] listNumbers = range(5, 25, 3);

foreach (int num in listNumbers) {
   Console.Write($"{num.ToString()} ");
}