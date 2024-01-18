word = input()
result_list = []
for c in word:
    if not c.isalnum() and not c.isspace():
        result_list.append(" ")
    elif c.isdigit():
        pass
    else:
        result_list.append(c)
result_string = ''.join(result_list)
print(result_string)

        