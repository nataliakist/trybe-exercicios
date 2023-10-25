from linked_list_content import LinkedList


class Queue():
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if self.is_empty():
            return None
        return self._data.remove_first()

    def peek(self):
        if self.is_empty():
            return None
        return self._data.get_element_at(0)

    def is_empty(self):
        return not len(self._data)

    def __str__(self):
        return "Queue(" + str(self._data) + ")"