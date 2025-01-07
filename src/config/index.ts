import { config } from 'dotenv'
config()

const { PORT, Node_ENV } = process.env

export const Config = {
    PORT,
    Node_ENV,
}
