from turtle import Turtle
WIDTH = 5
HEIGHT = 1


class Paddle(Turtle):
    def __init__(self, position):
        super().__init__()
        self.position = position
        self.shape("square")
        self.shapesize(WIDTH, HEIGHT)
        self.penup()
        self.color("white")
        self.goto(position)

    def up(self):
        new_y = self.ycor() + 20
        self.goto(self.xcor(), new_y)

    def down(self):
        new_y = self.ycor() - 20
        self.goto(self.xcor(), new_y)
