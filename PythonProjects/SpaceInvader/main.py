from turtle import Screen
from ship import Ship
from shoot import Shoot
from enemy import  Enemy
import time
import random
record = 0
playerShoo = False
EnemyShoo = False
player = ''
enemyshoot = ''
game_is_on = True
enemys = {}
EnemyGangs = []
X=-300
Y=300
screen = Screen()
nave = Ship((0,-300))
screen.screensize(canvheight=600, canvwidth=600, bg='black')
screen.title("Space Invader")
screen.tracer(0)

def playerShoot():
    global playerShoo
    global player

    if playerShoo:
        pass
    else:
        player = Shoot(nave.xcor(),nave.ycor())
        playerShoo =True
        return player







for n in range(1,19):

    enemys[n] = Enemy((X,Y))
    EnemyGangs.append(enemys[n])
    X+=120
    if X > 300:
        X = -300
        Y -= 60



def EnemyShoot():
    global EnemyShoo
    global enemyshoot
    if EnemyShoo:
        pass
    else:
        Enemigo = random.choice(EnemyGangs)
        enemyshoot = Shoot(Enemigo.xcor(), Enemigo.ycor())
        EnemyShoo = True
        return enemyshoot


screen.onkeypress(nave.left, "Left")
screen.onkeypress(nave.right, "Right")
screen.onkeypress(playerShoot, "Up")
screen.onkeypress(EnemyShoot(), "Down")
screen.listen()


while game_is_on:
    shootenemy = random.choice([1,2,3,4,5,6])
    print(shootenemy)
    if shootenemy == 6:
        if EnemyShoo:
            pass
        else:
            EnemyShoot()
    if record != 0:
        playerShoo = False
        player.hideturtle()
        enemys[record].hideturtle()
        del enemys[record]
        record = 0

    time.sleep(0.15)
    screen.update()
    for n in range(1, 19):
        try:
            enemys[n].move()
        except:
            pass


    if playerShoo:
        player.move(1)

        if player.ycor() >= 420:
            playerShoo = False

        for enemy in enemys:
            if enemys[enemy].distance(player) < 50:
                record = enemy

    if EnemyShoo:
        enemyshoot.move(-1)
        print(enemyshoot.ycor())
        if enemyshoot.distance(nave) < 50:
            EnemyShoo = False
            enemyshoot.hideturtle()
            nave.hideturtle()


        if enemyshoot.ycor() <= -420:
            EnemyShoo = False





screen.exitonclick()