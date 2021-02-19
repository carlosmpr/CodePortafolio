from turtle import Turtle

class ScoreBoard(Turtle):
    def __init__(self):
        super(ScoreBoard, self).__init__()
        self.level = 1
        self.hideturtle()
        self.penup()
        self.goto(-280, 280)
        self.write_screen()

    def write_screen(self):
        self.clear()
        self.write(f"level is {self.level}", align="left", font=("Courier", 12, "normal"))

    def level_up(self):
        self.level +=1
        self.write_screen()

    def loose(self):
        self.goto(-100, 0)
        self.write(f"GAME OVER", align="left", font=("Courier", 24, "normal"))

