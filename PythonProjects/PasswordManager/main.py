from tkinter import *
from tkinter import messagebox
import random
import pyperclip
import json
# ---------------------------- PASSWORD GENERATOR ------------------------------- #


letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

nr_letters = random.randint(8, 10)
nr_symbols = random.randint(2, 4)
nr_numbers = random.randint(2, 4)
def generated_password():
    password_entry.delete(0, END)
    password_letters = [random.choice(letters) for _ in range(nr_letters)]
    password_symbols = [random.choice(symbols) for _ in range(nr_symbols)]
    password_number = [random.choice(numbers) for _ in range(nr_numbers)]
    password_list = password_letters + password_number + password_symbols
    random.shuffle(password_list)
    password = "".join(password_list)
    password_entry.insert(0, f"{password}")
    pyperclip.copy(password)


# ---------------------------- SAVE PASSWORD ------------------------------- #

def save():
    website = website_entry.get()
    email = email_entry.get()
    password = password_entry.get()
    data = {
        website:{
            "email":email,
            "password":password
        }
    }
    if len(website) ==0 or len(password) ==0:
        messagebox.showinfo(title="oops" , message="you need to comple all fields")
    else:
        is_ok = messagebox.askokcancel(title=website, message=f"are you sure with this data \n Email {email} \n {password} are you sure you want yo save?")
        if is_ok:
            try:
                with open("data.json", "r") as data_file:
                    info = json.load(data_file)

            except FileNotFoundError:
                with open("data.json","w") as data_file:
                    json.dump(info, data_file, indent=4)
            else:
                info.update(data)
                with open("data.json","w") as data_file:
                    json.dump(info,data_file , indent=4)
            finally:
                website_entry.delete(0, END)
                password_entry.delete(0, END)

# ---------------------------- UI SETUP ------------------------------- #


def find_password():
    website = website_entry.get()
    try:
        with open("data.json") as data_file:
            data = json.load(data_file)
    except FileNotFoundError:
        messagebox.showinfo(title="Error", message="no data found")

    else:
        if website in data:
            email = data[website]["email"]
            password = data[website]["password"]
            messagebox.showinfo(title=website, message=f"Email: {email} \n Passowrd: {password}")
        else:
            messagebox.showinfo(title="Error", message="no data found")




#--------------find Password ------------------------------#
#Window Setup
window = Tk()
window.title("Password manager")
window.config(padx=50 , pady=50)

#Logo image setup
pass_logo = PhotoImage(file="logo.png")
canvas = Canvas(width=200, height=200, highlightthickness=0)
canvas.create_image(100,100,image=pass_logo)
canvas.grid(row=0, column=1)


#Label
website = Label(text="Website:", font=("Arial",12,"bold"))
website.grid(row=1, column=0)

website_entry = Entry(width=21)
website_entry.grid(row=1, column=1 , columnspan=1)
website_entry.focus()

email = Label(text="Email:", font=("Arial",12,"bold"))
email.grid(row=2, column=0)

email_entry = Entry(width=35)
email_entry.grid(row=2, column=1, columnspan=2)
email_entry.insert(0, "cp@gmail.com")


password = Label(text="Password:", font=("Arial",12,"bold"))
password.grid(row=3, column=0)


password_entry = Entry(width=25)
password_entry.grid(row=3, column=1)


#Buttons
generate_pass = Button(text="Generate Password" , command=generated_password)
generate_pass.grid(row=3, column=2)

search = Button(text="search" , width=15, command=find_password)
search.grid(row=1,column=2)
add = Button(text="Add" , width=36,command=save)
add.grid(row=4, column=1, columnspan=2)




window.mainloop()