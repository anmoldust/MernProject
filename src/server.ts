import { Config } from './config'
import app from './app'
import logger from './config/logger'
console.log(Config.PORT)

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            logger.info('Listening on port', { port: PORT })
        })
    } catch (error) {
        console.error(error)
    }
}
startServer()
