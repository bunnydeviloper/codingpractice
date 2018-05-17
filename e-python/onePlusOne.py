print(1 + 1)
name = 'sophia'
print(name)
name += ' is awesome'
print(name)
print(len(name))

for i in range(1, 11):
    print('number is ', i)

num = 4
while num > 0:
    print(num)
    num -= 1

# list in python
fruits = [
        'orange',
        'apple',
        'cherry',
        'lemon'
        ]
print(fruits)
print(len(fruits))

for item in fruits:
    print(item + 's')
    # add if (): elif (): else:... statement for words ending in o, y...

for letter in name:
    print(letter)

# conditional statements in python
if True:
    print('this is true')

# define a function, remmember to indent 4 spaces
def factorial(n):
    if (n<1):
        return 1
    return n * factorial(n-1)
print(factorial(4))
