from turtle import Turtle
X=0
Y=-280

class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.color("white")
        self.penup()
        self.position = (X, Y)
        self.goto(self.position)
        self.x_move = 10
        self.y_move = 10
        self.move_speed= 0.1

    def move(self):
        new_x = self.xcor() + self.x_move
        new_y = self.ycor() + self.y_move
        self.goto(new_x, new_y)

    def bounce(self):
        self.y_move *= -1


    def rebounce(self):
        self.x_move *= -1

    def reset_position(self):
        self.move_speed = (0.1)
        self.goto(0,0)
        self.rebounce()
