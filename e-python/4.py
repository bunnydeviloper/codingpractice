import turtle
sprite = turtle.Turtle()

# make the directions be like snap!
turtle.mode("logo")

def koch(size, levels):
    if levels == 1:
        sprite.forward(size)
    else:
        koch(size/3, levels-1)
        sprite.left(60)
        koch(size/3, levels-1)
        sprite.right(120)
        koch(size/3, levels-1)
        sprite.left(60)
        koch(size/3, levels-1)


def snowflake(size, levels):
    for _ in range(3):
        koch(size, levels)
        sprite.right(120)


# speed it up
sprite.speed(0)
# pen down
sprite.pendown()
# draw!
snowflake(150, 5)
