from turtle import Turtle

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
WIDTH = 1
HEIGHT = 7


class Bricks(Turtle):
    def __init__(self, position):
        super().__init__()
        self.position = position
        self.shape("square")
        self.shapesize(WIDTH, HEIGHT)
        self.penup()
        self.color("white")
        self.goto(position)