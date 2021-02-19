import time
from turtle import Screen
from player import Player
from car import Cars
from scoreboard import ScoreBoard
screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

player1 = Player()
truck = Cars()
score = ScoreBoard()
screen.listen()
screen.onkeypress(player1.move,"Up")
game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()
    truck.create_car()
    truck.move_cars()

    for car in truck.all_cars:
        if car.distance(player1) < 20:
            game_is_on = False
            score.loose()

    if player1.is_at_finish_line():
        player1.go_to_start()
        truck.level_up()
        score.level_up()


screen.exitonclick()