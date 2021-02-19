from turtle import Turtle


class Shoot(Turtle):
    def __init__(self,X,Y):
        super().__init__()
        self.shape("circle")
        self.color("white")
        self.penup()
        self.position = (X, Y)
        self.goto(self.position)
        self.x_move = 10
        self.y_move = 10
        self.move_speed= 0.1

    def move(self,m):

        new_y = self.ycor() + (self.y_move * m)
        self.goto(self.xcor(), new_y)



    def reset_position(self):
        self.move_speed = (0.1)
        self.goto(0,0)
        self.rebounce()
