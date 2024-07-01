import asyncio
import logging
from multiprocessing import freeze_support

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties

from config.config import Config, load_config
from madule.handlers.echo import echo_router
from madule.handlers.start import start_router

logger = logging.getLogger(__name__)


async def main():
    logging.basicConfig(
        level=logging.DEBUG,
        format="%(filename)s:%(lineno)d #%(levelname)-8s "
               "[%(asctime)s] - %(name)s - %(message)s",
    )

    logger.info("Starting bot")

    config: Config = load_config()
    # print(config.tg_bot.token)
    bot: Bot = Bot(token=config.tg_bot.token)
    dp: Dispatcher = Dispatcher()
    dp.include_routers(
        start_router,
        echo_router,
    )

    # dp.include_router(echo.router)
    # dp.include_router(echo.router)

    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)


if __name__ == "__main__":
    # freeze_support()

    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logger.info("Bot stopped")
    # main_bot.start()
    # uvicorn.run(app,port=5050)