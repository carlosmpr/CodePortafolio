from turtle import Turtle

STARTING_POSITION = (0,-280)
MOVE_DISTANCE =10
FINISH_LINE_Y = 280

class Player(Turtle):
    def __init__(self):
        super(Player, self).__init__()
        self.penup()
        self.shape("turtle")
        self.color("green")
        self.go_to_start()
        self.setheading(90)

    def move(self):
        new_y = self.ycor() + MOVE_DISTANCE
        self.goto(self.xcor(),new_y)

    def go_to_start(self):
        self.goto(STARTING_POSITION)

    def is_at_finish_line(self):
       if self.ycor() > 280:
            return True
       else:
           return  False