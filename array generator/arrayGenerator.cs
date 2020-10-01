// Generate a range of numbers like python, takes 1 to 3 arguments.
// Range(limit)
// Range(start, limit, step)
// Range return a array of numbers or a error
static dynamic range(params int[] numbers)
{
    if (numbers.Length <= 3)
    {
        int num = 0, limit = numbers[0], step = 1;

        if (numbers.Length >= 2)
        {
            num = numbers[0];
            limit = numbers[1];
        }
        
        if (numbers.Length == 3)
        {
            step = numbers[2];
        }

        decimal calculateLength = (decimal) (limit - num) / step;
        int roundLength = (int) Math.Ceiling(calculateLength);

        int[] numbersArray = new int[roundLength];

        for (int i = 0; num < limit; num += step, i++)
        {
            numbersArray[i] = num;
        }

        return numbersArray;
    }
    else
    {
        throw new System.ArgumentException("range method takes maximun 3 arguments");
    }
}

int[] listNumbers = range(5, 25, 3);

foreach (int num in listNumbers)
{
   Console.Write($"{num.ToString()} ");
}