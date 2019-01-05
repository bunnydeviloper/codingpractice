d = {}
d[1] = 2
d[1] = 'one'
d[2] = 'two'

print(d) # {1: 'one', 2: 'two'}
print(3 in d) # false
print(2 in d) # true

d[(1,2)] = 'one comma two'
print(d)

