def suffle_cards(cards):
  result = []
  end = len(cards)
  if len(cards) > 1:
    mid = end // 2
    first_half = cards[:mid]
    second_half = cards[mid:]
  for i in range(mid):
    result.append(first_half[i])
    result.append(second_half[i])
  return result


def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer


def another_suffle(cards):
  result = []
  mid = len(cards) // 2
  first_half = cards[:mid]
  second_half = cards[mid:]
  for z in zip(first_half, second_half):
     result.extend(z) 
  return result


# cartas = [2, 6, 4, 5]
# resultado = [2, 4, 6, 5]


cartas = [1, 4, 4, 7, 6, 6]
# resultado = [1, 7, 4, 6, 4, 6]

print(another_suffle(cartas))