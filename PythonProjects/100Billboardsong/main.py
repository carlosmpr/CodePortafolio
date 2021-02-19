import requests
import spotipy
from bs4 import BeautifulSoup
from spotipy.oauth2 import SpotifyOAuth

SPOTIFY_CLIEN_ID = "71cf2928ade646128ae0421bf1cacd3d"
SPOTIFY_SECRET = "1050dcf743d646d791abc9371845c6cd"

date = input("Which year do you want to travel to? Type the date in this format YYYY-MM-DD: ")

response = requests.get("https://www.billboard.com/charts/hot-100/" + date)

soup = BeautifulSoup(response.text, 'html.parser')
song_names_spans = soup.find_all("span", class_="chart-element__information__song")
song_names = [song.getText() for song in song_names_spans]



sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIFY_CLIEN_ID,
                                               client_secret=SPOTIFY_SECRET,
                                               redirect_uri="http://127.0.0.1:5500/",
                                               scope="playlist-modify-private"))
songs_uris = []
song_uris = []
year = date.split("-")[0]
user_id = sp.current_user()["id"]
for song in song_names:
    result = sp.search(q=f"track:{song} year:{year}", type="track")
    print(result)
    try:
        uri = result["tracks"]["items"][0]["uri"]
        song_uris.append(uri)
    except IndexError:
        print(f"{song} doesn't exist in Spotify. Skipped.")

playlist = sp.user_playlist_create(user=user_id, name=f"{date} Billboard 100", public=False)
print(playlist["id"])
sp.playlist_add_items(playlist["id"],songs_uris, position=None)