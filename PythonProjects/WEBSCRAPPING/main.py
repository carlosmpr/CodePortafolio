import requests
import pandas as pd

from bs4 import BeautifulSoup

URL = "https://listindiario.com/?home=1"
response =requests.get(url=URL)
data = response.text

soup = BeautifulSoup(data, 'html.parser')

news = []
for html in soup.find_all("div", class_="row_item"):
    news.append(html.get_text().replace('\n',""))


df = pd.DataFrame(news, columns=["Noticias"])
df.to_csv('list.csv', index=False)