r10 = range(10) # same as r10 = range(0,10)
t10 = tuple(r10)
print(t10)
print(r10[3])

print(r10[3:5])
print(list(r10[3:5])) #same

print(r10[1:8:2])
print(list(r10[1:8:2])) #same

longStr = 'this is a really long string'
print(longStr.count('i'))
print(longStr.count(''))
# help(str)
print(longStr.capitalize())

import string
print(string.punctuation)

# list.append
# list.sort
