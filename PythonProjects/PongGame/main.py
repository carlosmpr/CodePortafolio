from turtle import Screen
from paddle import Paddle
from ball import Ball
from scoreboard import ScoreBoard
import time

screen = Screen()
screen.screensize(canvwidth=600, canvheight=600, bg="black")
screen.title("Pong Game")

screen.tracer(0)
player1 = Paddle((400, 0))
player2 = Paddle((-400, 0))
ball = Ball()
score = ScoreBoard()
screen.listen()
screen.onkeypress(player1.up, "Up")
screen.onkeypress(player1.down, "Down")

screen.onkeypress(player2.up, "w")
screen.onkeypress(player2.down, "s")

game_is_on = True

while game_is_on:
    time.sleep(ball.move_speed)
    screen.update()
    ball.move()

    # Detect collision with the wall
    if ball.ycor() > 380 or ball.ycor() < -380:
        ball.bounce()

    #Detect collision with player1
    if ball.distance(player1) < 50 and ball.xcor() > 360 or ball.distance(player2) < 50 and ball.xcor() < -360:
        ball.rebounce()

    #the R paddle misses
    if ball.xcor() > 480:
        ball.reset_position()
        score.l_point()


    if ball.xcor() < -480:
        ball.reset_position()
        score.r_point()







screen.exitonclick()
