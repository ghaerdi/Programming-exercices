import math

numbers: [int] = [2,3,4,7,8,10,17,21,22]
num: int = 20


def index_or_last(arr: [int], num: int) -> int:
  return num if len(arr) > num else len(arr) - 1


# Find the last posible index number
def binary_search(arr: [int], num: int) -> int:
  index: int = index_or_last(arr, num)
  middle: int = index

  while True:
    try:
      # Break if the next number is the number
      if arr[index] == num:
        index -= 1
        break
      if arr[index] < num and arr[index + 1] >= num:
        break
    # Break if have no more higher numbers to search
    except: break

    # Calculate next step
    middle = math.ceil(middle / 2)

    # Move left
    if (arr[index] > num):
      index -= middle
    # Move Right
    else:
      index += middle

  return index


def add_searcher(arr: [int], num: int) -> str:

  # Filters if num is imposible to calculate
  if arr[-1] + arr[-2] < num:
    return f"numbers not found for {num}"

  if num <= arr[0]:
    return f"numbers not found for {num}"

  # Check if last 2 numbers added are the result.
  if arr[-1] + arr[-2] == num:
    return f"{arr[-1]} + {arr[-2]} = {num}"

  first_index: int = 0
  last_index: int = binary_search(arr, num)

  while True:
    add: int = arr[first_index] + arr[last_index]

    if first_index == last_index:
      return f"numbers not found for {num}"

    if add == num:
      return f"{arr[first_index]} + {arr[last_index]} = {num}"

    if add < num:
      first_index += 1

    if add > num:
      last_index -= 1

print(add_searcher(numbers, num))
