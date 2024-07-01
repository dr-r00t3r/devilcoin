import asyncio
import logging
import multiprocessing
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties

from config.config import Config, load_config
from madule.handlers.echo import echo_router
from madule.handlers.start import start_router
# import wmi

logger = logging.getLogger(__name__)


async def bot_handler():
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


class RunnableCore(multiprocessing.Process):
    def __init__(self, thread_name, app, host='185.116.160.9', port=15000, log_lvl='info', reload_flag=True):
        super().__init__()
        self.thread_name = thread_name
        self.app = app
        self.host = host
        self.port = port
        self.log_lvl = log_lvl
        self.reload_flag = reload_flag

    def run(self):
        try:
            asyncio.run(bot_handler())
        except (KeyboardInterrupt, SystemExit):
            logger.info("Bot stopped")
