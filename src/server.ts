import { Config } from './config'
import app from './app'
console.log(Config.PORT)

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    } catch (error) {
        console.error(error)
    }
}
startServer()
