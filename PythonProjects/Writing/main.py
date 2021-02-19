from tkinter import *
import math

text=""




window = Tk()
window.title("Write write")
window.config(padx=100, pady=50)




timer_label = Label(text="TIMER",font=("Arial", 35 , "bold") , bd=0)
timer_label.grid(row=0, column=0)
timer_text = Label(text="00:00", font=("Arial",35,"bold"))
timer_text.grid(row=1, column=0)
canvas = Canvas(width=600, height=500)
canvas.grid(row=2, column=0,)

def start_timer():
    work_sec = 1*60
    count_down(work_sec)

def key_pressed(event):
    global text
    window.after_cancel(timer)
    start_timer()
    if event.keysym == "BackSpace":
        text = text[:-1]
        event.char=""

    canvas.delete("all")
    X = 10
    Y = 150
    text += event.char
    for letter in text:
        canvas.create_text(X, Y, text=letter, width=600, font=("Arial", 15, "bold"), )
        X += 10
        if X > 500:
            X = 10
            Y += 30

def count_down(count):
    global text
    count_min = math.floor(count/60)
    count_sec = count % 60
    if count_sec < 10:
        count_sec = f"0{count_sec}"
    timer_text.config(text=f"{count_min}:{count_sec}")
    if count > 0:
        global timer
        timer = window.after(1000, count_down, count - 1)
    else:
        canvas.delete("all")
        text=""


start_timer()
window.bind("<Key>",key_pressed)

window.mainloop()