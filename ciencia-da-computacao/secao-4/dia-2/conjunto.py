class Conjunto:
    def __init__(self) -> None:
        self.set = [False for _ in range(1001)]
        self.last_element = 0

    def __str__(self):
        string = ""
        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        return "{" + string + "}"
    
    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def union(self, conjunto_b):
        conjunto_c = Conjunto()
        for index, is_in_set in enumerate(self.set):
            if is_in_set or conjunto_b.set[index]:
                conjunto_c.add(index)
        return conjunto_c
    
    def intersection(self, conjunto_b):
        conjunto_c = Conjunto()
        for index, is_in_set in enumerate(self.set):
            if is_in_set and conjunto_b.set[index]:
                conjunto_c.add(index)
        return conjunto_c

    def difference(self, conjunto_b):
        conjunto_c = Conjunto()
        for index, is_in_set in enumerate(self.set):
            if is_in_set and not conjunto_b.set[index]:
                conjunto_c.add(index)
        return conjunto_c
    
    def issubset(self, conjunto_b):
        for index, is_in_set in enumerate(self.set):
            if is_in_set and not conjunto_b.set[index]:
                return False
        return True
    
    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False
        return True

if __name__ == "__main__":
    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    est = Conjunto()
    lista1 = Conjunto()
    lista2 = Conjunto()

    for i in estudantes:
        est.add(i)
    for i in lista1_entregues:
        lista1.add(i)
    for i in lista2_entregues:
        lista2.add(i)

    # 1.Quem ainda não entregou a lista1?
    print(est.difference(lista1))

    # 2.Quem já entregou as duas listas?
    print(lista1.intersection(lista2))

    # 3.Quem já entregou qualquer uma das duas listas?
    print(lista1.union(lista2))

    # 4.Quem ainda não entregou nenhuma das listas?
    print(est.difference(lista1.union(lista2)))
