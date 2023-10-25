from stack import Stack

# def reverse_substring(string):
#   substring = []
#   cut_index = 0
#   for index in range(len(string)):
#     if string[index] == "(":
#       cut_index = index
#       while string[index + 1] != ")":
#         substring.append(string[index+1])
#         index += 1
#       string = string[0:cut_index]
#       break
#   reversed_substring = ''.join(substring[::-1])
#   return string+reversed_substring

def reverse_substring(string):
  stack = Stack()
  substring = []
  for index in range(len(string)):
    if string[index] == "(":
      cut_index = index
      while string[index + 1] != ")":
        stack.push(string[index+1])
        index += 1
      string = string[0:cut_index]
      break
  while not stack.is_empty():
    substring.append(stack.pop())
  reversed_substring = ''.join(substring)
  return string+reversed_substring

print(reverse_substring('teste(lagel)'))
  
  