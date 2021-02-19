from random_words import RandomWords
from tkinter import *

rw = RandomWords()
word = rw.random_words(count=30)



def listToString(s):
    # initialize an empty string
    str1 = " "

    # return string
    return (str1.join(s))

phrase = listToString(word)

def key_pressed(event):
 w=Label(window,text="Key Pressed:"+event.char)
 w.place(x=70,y=90)


def create_text(event):
    x =10
    y =150




# Driver code
window = Tk()
window.title("Typing speed")
window.config(padx=100, pady=50)


canvas = Canvas(width=600, height=500)
create_text()

canvas.grid(row=0, column=0,)




window.bind("<Key>",key_pressed)

window.mainloop()