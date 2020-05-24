import discord
from discord.ext import commands
import speech_recognition as sr
from time import ctime
import time
import os
from gtts import gTTS
import requests, json

client = commands.Bot(command_prefix = 'X:')

@client.event
async def on_ready():
print('Titanium is available!')

client.run('os.environ["BOT_TOKEN"]')

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("listening...")
        audio = r.listen(source)
    data = ""
    try:
        data = r.recognize_google(audio)
        print("You said: " + data)
    except sr.UnknownValueError:
        print("i do not understand, please clarify or try again!")
    except sr.RequestError as e:
        print("Request Failed; {0}".format(e))
    return data
def respond(audioString):
    print(audioString)
    tts = gTTS(text=audioString, lang='en')
    tts.save("speech.mp3")
    os.system("mpg321 speech.mp3")
def digital_assistant(data):
    global listening
    if "titanium, how are you" in data:
        listening = True
        respond("I am doing fine, as i love serving extremis!")

    if "titanium, what time is it" in data:
        listening = True
        respond(ctime())

    if "titanium, what is the location of" in data:
        listening = True
        data = data.split(" ")
        location_url = "https://www.google.com/maps/place/" + str(data[6])
        respond("I will show you where " + data[6] + " is.")
        maps_arg = '/usr/bin/open -a "/Applications/Google Chrome.app" ' + location_url
        os.system(maps_arg)
        
    if "titanium, what is the weather in" in data:
        listening = True
        api_key = "8860cf4159e444795bc28adeda25b9e3"
        weather_url = "http://api.openweathermap.org/data/2.5/weather?"
        data = data.split(" ")
        location = str(data[6])
        url = weather_url + "appid=" + api_key + "&q=" + location 
        js = requests.get(url).json() 
        if js["cod"] != "404": 
            weather = js["main"] 
            temp = weather["temp"] 
            hum = weather["humidity"] 
            desc = js["weather"][0]["description"]
            resp_string = " The temperature in " + location + " is " + str(temp) + " The humidity is " + str(hum) + " and The weather description is " + str(desc)
            respond(resp_string)
        else: 
            respond("i couldn't find that location!") 