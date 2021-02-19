import smtplib
import datetime as dt
import random
now = dt.datetime.now()
weekday = now.weekday()
email=""
passw=""

if weekday == 0:
    with open("quotes.txt", encoding="utf8") as file_name:
        al_quote = file_name.readlines()
        quote = random.choice(al_quote)
        new_quote = quote.replace(".”","")
        new_quote2 =new_quote.replace("“","")

        print(new_quote2)

        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(email,passw)
            connection.sendmail(from_addr=email,to_addrs=email, msg=f"Subject:Monday Motivational Quote\n\n {new_quote2} ")

