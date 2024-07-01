from telegram.ext import Updater, CommandHandler
import sqlite3
from time import sleep
from telegram.chat import *
from telegram.ext import Updater
from telegram.ext import CommandHandler
from telegram.ext import MessageHandler, Filters
from datetime import datetime, time
import telegram.chat
import logging

list_command = []


def start(update, context):
    context.bot.sendMessage(chat_id=update.message.chat_id,
                            text="Welcome \nI'm r00t3rak.I'm not Bot.\nmy father is: telegram.me/dr_r00t3r")


def send(update, context):
    userInfo = update.message.chat
    userName = userInfo['username']
    if (userName == 'dr_r00t3r'):
        context.bot.sendMessage(chat_id=update.message.chat_id, text="Hi Father ")
        sleep(2)
        context.bot.sendMessage(chat_id=update.message.chat_id, text="Can I help You?? Father??")
    else:
        context.bot.sendMessage(chat_id=update.message.chat_id, text="Thanks")
        userInfo = update.message.chat
        userMessage = update.message.text
        userId = userInfo['id']
        userName = userInfo['username']
        userFirstName = userInfo['first_name']
        userLastName = userInfo['last_name']
        cn = sqlite3.connect("zthb.sqlite")
        cn.execute("PRAGMA ENCODING = 'utf8';")
        cn.text_factory = str
        cn.execute(
            "CREATE TABLE IF NOT EXISTS user_comment(u_id MEDIUMINT, u_name VARCHAR(100), u_first_name VARCHAR(100), u_last_name VARCHAR(100), u_comment TEXT, u_time DATETIME);")
        cn.execute("INSERT INTO user_comment VALUES (?, ?, ?, ?, ?, ?);",
                   (userId, userName, userFirstName, userLastName, userMessage, datetime.now()))
        cn.commit()
        cn.close()


def list_artist(update, context):
    name_artist = update.message.text
    cn = sqlite3.connect("zthb.sqlite")
    cur = cn.cursor()
    cur.execute("SELECT * From list_artist WHERE  family_artist=?", (name_artist,))
    rows = cur.fetchall()
    for row in rows:
        name_artist_finder = row[2]
        print(row)
    cur.execute("SELECT * From album_list where artist_id=?", (name_artist_finder,))
    rows_album = cur.fetchall()
    for r in rows_album:
        print(r)
        list_command.append(r[1] + r[2])
        context.bot.sendMessage(chat_id=update.message.chat_id, text="/" + r[1] + r[2])


def unknown(update, context):
    c = update.message.text
    artist = c.split('/')[1]
    if artist in list_command:
        print(artist)
    else:
        context.bot.sendMessage(chat_id=update.message.chat_id, text="Unknown Command!")


updater = Updater(token='947934288:AAFlJQ8aHGfZchXRVbn6TwnAzHfpJUjEaVU', use_context=True)
dispatcher = updater.dispatcher

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

cm_handler = MessageHandler(Filters.text, list_artist)
dispatcher.add_handler(cm_handler)
# #
unknown_handler = MessageHandler(Filters.command, unknown)
dispatcher.add_handler(unknown_handler)

updater.start_polling()
updater.idle()
updater.stop()
