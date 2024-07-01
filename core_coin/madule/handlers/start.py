from aiogram import Router
from aiogram.filters import CommandStart
from aiogram.types import Message, FSInputFile, WebAppInfo
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

start_router = Router()


@start_router.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    """
    This handler receives messages with `/start` command
    """
    file_ids = []
    # Most event objects have aliases for API methods that can be called in events' context
    # For example if you want to answer to incoming message you can use `message.answer(...)` alias
    # and the target chat will be passed to :ref:`aiogram.methods.send_message.SendMessage`
    # method automatically or call API method directly via
    # Bot instance: `bot.send_message(chat_id=message.chat.id, ...)`
    # Good bots should send chat actions...
    all_btn = [
        [InlineKeyboardButton(text=f"Mine Devilcoin 👋 ", web_app=WebAppInfo(url="https://devilcoin.drr00t3r.ir"))],
        [InlineKeyboardButton(text=f"Join Community 💪💋", callback_data=f"callback_community", )],
        [InlineKeyboardButton(text=f"Twitter", callback_data=f"callback_twitter", url="https://twitter.com")],
        [InlineKeyboardButton(text=f"How it's works 🤔", callback_data=f"callback_help",
                              url="https://blog.jojocoin.io")]]
    keyboard = InlineKeyboardMarkup(inline_keyboard=all_btn)
    image_from_pc = FSInputFile("static/img/1.jpg")
    result = await message.answer_photo(
        image_from_pc,
        caption="""⚡️

Fully charged and ready to go.

Let's tap!""", reply_markup=keyboard
    )
    file_ids.append(result.photo[-1].file_id)

    # await message.answer(f"Hello, <b>{message.from_user.full_name}!</b>")
    # await message.answer(f"Hello, <b>{message.from_user.full_name}!</b>")
