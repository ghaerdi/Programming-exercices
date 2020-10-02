// Generate array from 0 to N
int[] array(int limit) {
    int[] numbers = new int[limit];
    for (int num = 0; num < limit; num++) {
        numbers[num] = num;
    }
    return numbers;
}

// Add dividers of a number
int addDividers(int number) {
    int result = 0;
    foreach (int div in array(number)) {
        if (div == 0) continue;
        if (number % div == 0)  {
            result += div;
        }
    }
    return result;
}

// Check if a number have a friend and return a friendly message.
string checkFriendNumber(int number) {
    int posibleFriend = addDividers(number);
    string strNumber = number.ToString();
    string strPosibleFriend = posibleFriend.ToString();

    if (addDividers(posibleFriend) == number){
        return $"{strNumber} and {strPosibleFriend} are friends :]";
    }
    return $"{strNumber} don't have friends :[";
}

Console.WriteLine(checkFriendNumber(220));