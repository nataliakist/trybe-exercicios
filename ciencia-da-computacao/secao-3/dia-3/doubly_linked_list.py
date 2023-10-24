from doubly_node import DoublyNode

class DoublyLinkedList:

    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head_value
        if self.__length == 0:
          self.tail_value = node_value
        else:
          self.head_value.previous = node_value
        self.head_value = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DoublyNode(value)

        if self.is_empty():
            return self.insert_first(value)

        node_value.previous = self.tail_value
        self.tail_value.next = node_value
        self.tail_value = node_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position)
        new_node = DoublyNode(value)
        new_node.next = current_value
        new_node.previous = current_value.previous
        new_node.previous.next = new_node
        current_value.previous = new_node
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            self.head_value.previous = None
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        if not self.is_empty():
          value_to_be_removed = self.tail_value
          previous_to_be_removed = value_to_be_removed.previous
          previous_to_be_removed.next = None
          value_to_be_removed.reset()
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.__get_node_at(position)
        previous_to_be_removed = value_to_be_removed.previous
        next_to_be_removed = value_to_be_removed.next
        previous_to_be_removed.next = next_to_be_removed
        next_to_be_removed.previous = previous_to_be_removed
        value_to_be_removed.reset()
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
          value_returned = DoublyNode(value_to_be_returned.value)
        return value_returned
    
    def __get_node_at(self, position):
        value_to_be_returned = None
        if self.head_value.next != self.tail_value:
          value_to_be_returned = self.head_value.next
          while position > 1:
              value_to_be_returned = value_to_be_returned.next
              position -= 1
        return value_to_be_returned

    def is_empty(self):
        return not self.__length
    

if __name__ == "__main__":
    doubly_linked_list = DoublyLinkedList()

    print(doubly_linked_list.is_empty()) # saída: True
    doubly_linked_list.insert_first(1)
    print(doubly_linked_list) # saída: LinkedList(len=1 value=Node(value=1 next=None))

    doubly_linked_list.insert_first(2)
    print(doubly_linked_list) # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    doubly_linked_list.insert_last(3)
    print(doubly_linked_list) # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    doubly_linked_list.insert_at(5, 1)
    print(doubly_linked_list) # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))
    
    doubly_linked_list.insert_at(4, 2)
    print(doubly_linked_list) # saída: LinkedList(len=5, value=Node(value=2, next=Node(value=5, next=Node(value=4, next=Node(value=1, next=Node(value=3, next=None))))))

    doubly_linked_list.remove_last()
    print(doubly_linked_list) # saída: LinkedList(len=4, value=Node(value=2, next=Node(value=5, next=Node(value=4, next=Node(value=1, next=None)))))

    doubly_linked_list.remove_first()
    print(doubly_linked_list) # saída: LinkedList(len=3, value=Node(value=5, next=Node(value=4, next=Node(value=1, next=None))))

    doubly_linked_list.remove_at(1)
    print(doubly_linked_list) # saída: LinkedList(len=2, value=Node(value=5, next=Node(value=1, next=None)))

    doubly_linked_list.insert_at(6, 1)
    doubly_linked_list.insert_at(7, 2)
    print(doubly_linked_list)
    print(doubly_linked_list.get_element_at(1)) # saída: Node(value=7, next=Node(value=1, next=None))