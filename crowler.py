import requests
import webbrowser
from bs4 import BeautifulSoup
# Replace 'url' with the URL of a public, static website
url = ""  # This is a placeholder for a publicly accessible URL
webbrowser.open(url)
response = requests.get(url)  # Sends a GET request to the URL


soup = BeautifulSoup(response.text, 'lxml')


greeting = soup.find_all('div')[1].text
message_body = soup.find_all('div')[2].text
closing = soup.find_all('div')[3].text


print(f"Greeting: {greeting}")
print(f"Message Body: {message_body}")
print(f"Closing: {closing}")
