from stack import Stack


class StackLimit(Stack):
  def __init__(self, limit):
    super().__init__()
    self.limit = limit

  def push(self, value):
    if self.size() < self.limit:
      super().push(value)
    else:
      print("Stack is full")