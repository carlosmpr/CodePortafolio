from MORSE import MORSECODE

user = input("write the text that you want to create in morse code: ").upper()

text = ""

for letter in user:
    if letter == " ":
        text += "\t"
    else:
        text += MORSECODE[letter]

print(text)