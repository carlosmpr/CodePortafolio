from turtle import Turtle

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
WIDTH = 2
HEIGHT = 2


class Enemy(Turtle):
    def __init__(self, position):
        super().__init__()
        self.position = position
        self.shape("square")
        self.shapesize(WIDTH, HEIGHT)
        self.penup()
        self.color("white")
        self.goto(position)
        self.GoingLeft = True
        self.countLeft = 4
        self.countRight = 8

    def move(self):
        if self.countLeft > 0:
         new_x = self.xcor() - 30
         self.goto(new_x, self.ycor())
         self.countLeft -=1

        elif self.countRight > 0:
            new_x = self.xcor()  + 30
            self.goto(new_x, self.ycor())
            self.countRight -= 1
        else:
            self.countLeft = 8
            self.countRight = 8


