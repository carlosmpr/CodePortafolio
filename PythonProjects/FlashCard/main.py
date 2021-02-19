BACKGROUND_COLOR = "#B1DDC6"
from tkinter import *
import pandas
import random

try:
    data = pandas.read_csv("data/words_to_learn_csv")

except FileNotFoundError:

    data = pandas.read_csv("data/french_words.csv")
    learn_word = data.to_dict(orient="records")
else:
    learn_word = data.to_dict(orient="records")


select_word = random.choice(learn_word)
def next_word():
    global select_word ,flip_timer
    window.after_cancel(flip_timer)
    select_word = random.choice(learn_word)
    card_canvas.itemconfig(title_text, text="French", fill="black")
    card_canvas.itemconfig(word_text, text=select_word["French"] , fill="black")
    card_canvas.itemconfig(card_background, image=card_image)
    flip_timer = window.after(300, back_card)


def back_card():
    global select_word

    card_canvas.itemconfig(title_text, text="English" , fill="white")
    card_canvas.itemconfig(word_text, text=select_word["English"] ,fill="white")
    card_canvas.itemconfig(card_background, image=back_image)

def is_kown():
    learn_word.remove(select_word)
    data = pandas.DataFrame(learn_word)
    data.to_csv("data/words_to_learn_csv", index=False)
    next_word()
# select_random = random.choice(word_learn)
window = Tk()
window.title("Flashcard")
window.config(padx=50, pady=50 , bg=BACKGROUND_COLOR)


card_image = PhotoImage(file="images/card_front.png")
back_image = PhotoImage(file="images/card_back.png")
card_canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_background = card_canvas.create_image(400,263, image=card_image)
card_canvas.grid(row=0, column=0, columnspan=2)

title_text = card_canvas.create_text(400,150, text="French", font=("Ariel",40,"italic"))
word_text = card_canvas.create_text(400,263, text=f"{select_word['French']}", font=("Ariel",40,"italic"))

right_button_image = PhotoImage(file="images/right.png")
right_button = Button(image=right_button_image, bg=BACKGROUND_COLOR, highlightthickness=0, command=is_kown)
right_button.grid(row=1,column =1)

wrong_button_image = PhotoImage(file="images/wrong.png")
wrong_button = Button(image=wrong_button_image, bg=BACKGROUND_COLOR, highlightthickness=0, command=next_word)
wrong_button.grid(row=1,column =0)


flip_timer  = window.after(3000 , back_card)
window.mainloop()