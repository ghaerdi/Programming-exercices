# I tried to do this exercise in as few lines as possible.

# Generate from 1 to N and add dividers of a number
add_dividers = lambda n: sum([not n % div and div for div in range(1, n)])

# Check if a number have a friend number and return a friendly message or return False
friend_number = lambda n: add_dividers(add_dividers(n)) == n and f"{n} and {add_dividers(n)} are friends!"

print(friend_number(223))
