from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(' ')
    for token in tokens_list:
        if token == '+':
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            op1 = stack.pop()
            op2 = stack.pop()
            result = op2 - op1
            stack.push(int(result))
        elif token == '/':
            op1 = stack.pop()
            op2 = stack.pop()
            result = op2 / op1
            stack.push(int(result))
        else:
            # add number operation
            stack.push(int(token))
    return stack.pop()


print(solve_expression("5 10 + 3 *")) # Saída 45
print(solve_expression('5 10 + 30 5 / -')) # 9
print(solve_expression('10 5 30 * 30 / 2 * +')) # 20
print(solve_expression('5 10 * 30 - 4 5 * 10 - +')) # 30
print(solve_expression('30 10 / 5 + 5 10 + *')) # 120
print(solve_expression('50 10 * 2 / 5 * 5 /')) # 250