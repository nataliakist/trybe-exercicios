from linked_list_content import LinkedList


class Stack():
  def __init__(self):
    self._data = LinkedList()

  def size(self):
    return len(self._data)
  
  def is_empty(self):
    return not self.size()
  
  def push(self, value):
    self._data.insert_last(value)

  def pop(self):
    if self.is_empty():
      return None
    return self._data.remove_last()
  
  def peek(self):
    if self.is_empty():
      return None
    return self._data.get_element_at(len(self._data) - 1)
  
  def __str__(self) -> str:
    return "Stack(" + str(self._data) + ")"
  

if __name__ == "__main__":
  stack = Stack()
  stack.push(1)
  stack.push(2)
  print(stack)
  print(stack.peek())
  stack.push(3)
  print(stack)
  print(stack.peek())
  print(stack.pop())
  print(stack)
  print(stack.peek())