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


# cartas = [2, 6, 4, 5]
# resultado = [2, 4, 6, 5]


cartas = [1, 4, 4, 7, 6, 6]
# resultado = [1, 7, 4, 6, 4, 6]

print(suffle_cards(cartas))