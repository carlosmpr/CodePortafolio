from turtle import Turtle
STATING_POSITIONS = [(0,0), (-20,0),(-40,0)]
MOVE_DISTANCE = 20
RIGTH = 0
LEFT = 180
UP = 90
DOWN = 270
class Snake:
    def __init__(self):
        self.segments =[]
        self.create_snake()
        self.head =self.segments[0]

    def create_snake(self):
        for turtle in STATING_POSITIONS:
            self.add_segment(turtle)

    def add_segment(self,turtle):
        tim = Turtle()
        tim.penup()
        tim.shape("square")
        tim.color("white")
        tim.goto(turtle)
        self.segments.append(tim)

    def extend(self):
        self.add_segment(self.segments[-1].position())

    def move(self):
        for seg_num in range(len(self.segments) - 1, 0, -1):
            new_x = self.segments[seg_num - 1].xcor()
            new_y = self.segments[seg_num - 1].ycor()
            self.segments[seg_num].goto(new_x, new_y)
        self.head.forward(MOVE_DISTANCE)

    def right(self):
        if self.head.heading() != LEFT:
            self.head.setheading(RIGTH)
    def left(self):
        if self.head.heading() != RIGTH:
            self.head.setheading(LEFT)
    def up(self):
        if self.head.heading() != DOWN:
            self.head.setheading(UP)

    def down(self):
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

