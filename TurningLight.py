listR1 = [True, True, True, True, True, True]
listR2 = [True, True, True, True, True, True]
listR3 = [True, True, True, True, True, True]
listR4 = [True, True, True, True, True, True]
listR5 = [True, True, True, True, True, True]

totalList = [listR1,
             listR2,
             listR3,
             listR4,
             listR5]
y = totalList
for x in range(5):
    print(totalList[x])
w, h = 8, 6;
Matrix = [[int(True) for x in range(w)] for y in range(h)]


def printMatrix():
    for y in range(6):
        print(Matrix[y])


def press(y, x):
    if (Matrix[y][x] != 0):
        Matrix[y][x] = 0
    else:
        Matrix[y][x] = 1
    if y != 0:
        if Matrix[y - 1][x] != 0:
            Matrix[y - 1][x] = 0
        else:
            Matrix[y - 1][x] = 1
    if y != h - 1:
        if Matrix[y + 1][x] != 0:
            Matrix[y + 1][x] = 0
        else:
            Matrix[y + 1][x] = 1

    if x != 0:
        if Matrix[y][x - 1] != 0:
            Matrix[y][x - 1] = 0
        else:
            Matrix[y][x - 1] = 1
    if x != w - 1:
        if Matrix[y][x + 1] != 0:
            Matrix[y][x + 1] = 0
        else:
            Matrix[y][x + 1] = 1


# Trying to turning off all the light by pushing all the button followed by each rows in left to right. (2^30 timing)
printMatrix()
print("\n")
for y in range(5):
    for x in range(6):
        press(y, x)

printMatrix()

print(Matrix[0][2])
