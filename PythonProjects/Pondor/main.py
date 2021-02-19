from tkinter import *
import math
# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 1
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
reps =0
timer = NONE
# ---------------------------- TIMER RESET ------------------------------- # 
def reset_timer():
    global reps
    window.after_cancel(timer)
    reps =0
    timer_label.config(text="TIMER", fg=GREEN, font=(FONT_NAME, 35, "bold"), bg=YELLOW, bd=0)
    canvas.itemconfig(timer_text, text=f"00:00")

# ---------------------------- TIMER MECHANISM ------------------------------- # 
def start_timer():
    global  reps
    reps +=1
    work_sec = WORK_MIN*60
    short_break_sec = SHORT_BREAK_MIN *60
    long_break_sec = LONG_BREAK_MIN *60




    if reps % 8 ==0:
        count_down(long_break_sec)
        timer_label.config(text="LONG BREAK", fg=PINK,font=(FONT_NAME, 35, "bold"), bg=YELLOW , bd=0)
    elif reps % 2 ==0:
        count_down(short_break_sec)
        timer_label.config(text="BREAK", fg=RED, font=(FONT_NAME, 35, "bold"), bg=YELLOW, bd=0)
    else:
        count_down(work_sec)

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #


# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Pomodoro")
window.config(padx=100 , pady=50,bg=YELLOW)


window.after(1000, )


timer_label = Label(text="TIMER", fg=GREEN,font=(FONT_NAME, 35 , "bold") ,bg=YELLOW , bd=0)
timer_label.grid(row=0, column=1)


tomato_img=PhotoImage(file="tomato.png")
canvas = Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)
canvas.create_image(100, 112, image=tomato_img)
timer_text = canvas.create_text(100,130, text="00:00",fill="white", font=(FONT_NAME,35,"bold"))
canvas.grid(row=1, column=1)


def count_down(count):

    count_min = math.floor(count/60)
    count_sec = count % 60

    if count_sec < 10:
        count_sec = f"0{count_sec}"
    canvas.itemconfig(timer_text , text=f"{count_min}:{count_sec}")

    if count > 0:
        global timer
        timer = window.after(1000, count_down, count -1)
    else:
        start_timer()
        mark = ""
        work_sessions = math.floor(reps/2)
        for _ in range(work_sessions):
            mark+="✔"

        complete.config(text=mark, fg=GREEN,font=(FONT_NAME, 15 , "bold") ,bg=YELLOW , bd=0)



start = Button(text="start", command=start_timer)
start.grid(row=2 , column=0)

complete = Label(text="", fg=GREEN,font=(FONT_NAME, 15 , "bold") ,bg=YELLOW , bd=0)
complete.grid(row=3, column=1)


reset = Button(text="reset", command=reset_timer)
reset.grid(row=2 , column=3)

window.mainloop()








