import os



board = [" "," "," "," "," "," "," "," "," "]
plays = []


PlayerX ="x"
PlayerO = "0"
Game_on = True
CHANGE = True
def show_board():
    for n in range(0,9):
        m = n + 1
        if m % 3 != 0:
            print(board[n]+" |",end =" ")

        if n != 0 and m % 3 ==0:
            print(board[n])
            if m == 9:
                pass
            else:
                print('----------')

def play(user, player):
    board[user-1] = player

def player( ):
    global CHANGE
    show_board()
    if CHANGE:
        player_number = 1
    else:
        player_number = 2
    user = int(input(f"Player {player_number} Choose a number between 1 - 9 ? "))
    if user > 9 :
        print("invalid number please select other number to be in the range")
        return
    if user in plays:
        print(f"sorry you can move in that space try again player {player_number}")
        return
    plays.append(user)
    if CHANGE:
        play(user,PlayerX)
        CHANGE = False
    else:
        play(user, PlayerO)
        CHANGE = True


def show_winner(value):
    global Game_on
    show_board()
    Game_on = False
    if value == 'x':
        print(f'The winner is player 1')
    else:
        print(f'The winner is player 2')



def winner():

    if board[0] == board[1] == board[2] and board[0]!= " ":
        show_winner(board[0])
    if board[3] == board[4] == board[5] and board[3]!= " ":
        show_winner(board[3])
    if board[6] == board[7] == board[8] and board[6]!= " ":
        show_winner(board[6])


    if board[0] == board[3] == board[6] and board[0] != " " :
        show_winner(board[0])
    if board[1] == board[4] == board[7] and board[1] != " " :
        show_winner(board[1])
    if board[2] == board[6] == board[8] and board[2] != " ":
        show_winner(board[2])



    if board[0] == board[4] == board[8] and board[0] != " ":
       show_winner(board[0])
    if board[2] == board[4] == board[6] and board[2] != " ":
       show_winner(board[2])






while Game_on:
    player()
    if len(plays) >= 9:
        Game_on = False
        print("Is a tie")
    winner()








