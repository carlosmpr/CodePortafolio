from turtle import Screen
from padle import Paddle
from ball import Ball
from bricks import Bricks
import time
game_is_on = True
record = 0
X=-400
Y=390
screen = Screen()
screen.screensize(canvheight=600, canvwidth=600, bg='black')
screen.title("Break Game")
screen.tracer(0)
new_brick = {}

player = Paddle((0,-300))

ball = Ball()


screen.onkeypress(player.left, "Left")
screen.onkeypress(player.right, "Right")
for n in range(1,97):
    new_brick[n] = Bricks((X,Y))
    X+=160
    if X > 400:
        X = -400
        Y -= 30


screen.listen()







while game_is_on:
    if record != 0:
        new_brick[record].hideturtle()
        del new_brick[record]
        record = 0

    time.sleep(0.1)
    screen.update()
    ball.move()


    if ball.xcor() > 450 or ball.xcor() < -450:
        ball.rebounce()
    for brick in new_brick:
        if new_brick[brick].distance(ball) < 50:
            ball.bounce()
            record=brick
    print(record)



    if ball.distance(player) < 30:
        ball.bounce()






screen.exitonclick()