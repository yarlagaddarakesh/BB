string_input = input()
str_len = len(string_input)

if str_len % 2 != 0:
    half_len = (str_len // 2 )+1
    modified_string = string_input[:half_len].upper() + string_input[half_len:].lower()
else:
    modified_string = string_input.lower()

print(string_input+" - "+modified_string)
