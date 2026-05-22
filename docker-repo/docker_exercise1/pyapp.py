# Dynamically creating a list of squares
numbers = [1, 2, 3, 4, 5]
dynamic_list = [n**2 for n in numbers]

for item in dynamic_list:
    print(f"Calculated Value: {item}")

print("This is working bro!!")
