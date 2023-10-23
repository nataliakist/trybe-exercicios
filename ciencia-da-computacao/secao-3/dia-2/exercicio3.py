def products_combinations(products):
  answer = 0
  for i in range(len(products)):
    for j in range(i + 1, len(products)):
      if products[i] == products[j]:
        answer += 1
  return answer


# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

print(products_combinations(produtos))