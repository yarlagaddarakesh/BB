input_list = [2, 6, 7, 4, 8, 1]

if len(input_list) >= 4:
    sorted_numbers = sorted(input_list, reverse=True)
    print("First Greatest Number:",sorted_numbers[0])
    print("Fourth Greatest Number:",sorted_numbers[3])
else:
    print("Minimum 4 numbers are required")