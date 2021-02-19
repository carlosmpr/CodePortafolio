from turtle import Turtle

WIDTH = 3
HEIGHT = 3



class Ship(Turtle):
    def __init__(self, position):
        super().__init__()
        self.position = position
        self.shape("square")
        self.shapesize(WIDTH, HEIGHT)
        self.penup()
        self.color("white")
        self.goto(position)

    def left(self):
        if self.xcor() >= -380:
         new_x = self.xcor() - 30
         self.goto(new_x, self.ycor())

    def right(self):
        if self.xcor() <= 380:
            new_x = self.xcor() + 30
            self.goto(new_x, self.ycor())
    def shoot(self):
        pass



