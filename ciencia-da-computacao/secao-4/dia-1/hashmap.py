class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for element in self._buckets[address]:
            if element.id_num == id_num:
                return element.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        for element in self._buckets[address]:
            if element.id_num == id_num:
                return True
        return False
    
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for element in self._buckets[address]:
            if element.id_num == id_num:
                element.name = new_name
                return
        return None


employees = [(14, "name1"), (24, "name2"), (10, "name3"), (9, "name4")]
hashmap = HashMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    hashmap.insert(employee)

# print(hashmap.get_value(24))
# print(hashmap.get_value(14))
# hashmap.update_value(14, "name10")
# print(hashmap.get_value(14))


dict_comprenhension = {x: x*2 for x in range(3, 21)}
# print(dict_comprenhension)
for x in dict_comprenhension.keys():
  if x % 2 != 0:
      dict_comprenhension[x] = x * 3

# print(dict_comprenhension)


string = "bbbbaaaacccaaaaaaddddddddccccccc"
most_frequent = string[0]
counter = {}
for char in string:
    if char in counter:
        counter[char] += 1
    else:
        counter[char] = 1
    if counter[char] > counter[most_frequent]:
        most_frequent = char


# print(counter)
# print(most_frequent)


orders = [
('fernanda', 'rafa'),
('fran', 'daniel'),
('mirian', 'gabriel'),
('matheus', 'yasmin'),
('giovanni', 'fernanda'),
('rafa', 'fran'),
('daniel', 'mirian'),
('gabriel', 'matheus')
]

def organizing_queue(people_list):
    row = []
    row_dict = {tuple[0]: tuple[1] for tuple in people_list}
    inv_row_dict = {tuple[1]: tuple[0] for tuple in people_list}
    next_in_queue = ""
    for key in row_dict:
        if key not in inv_row_dict:
            next_in_queue = key
            row.append(next_in_queue)
            break
    while next_in_queue in row_dict:
        next_in_queue = row_dict[next_in_queue]
        row.append(next_in_queue)
            
    return row


def get_sevens(rolls):
    seen_before = {}
    answer = []
    for roll in rolls:
        if 7 - roll in seen_before:
            answer.append((7-roll, roll))
            if seen_before[7-roll] == 1:
                del seen_before[7-roll]
            else:
                seen_before[7-roll] -= 1
        else:
            if roll not in seen_before:
              seen_before[roll] = 1
            else:
              seen_before[roll] += 1
    return answer

rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1, 6, 6,]
# saída: [(5,2), (1,6), (3,4), (1,6)]

print(get_sevens(rolls))
