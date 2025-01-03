import express from 'express'

const app = express()

app.get('/:id', (req, res) => {
    const a = req.params.id
    res.send('Welcome to auth service' + '  ' + a)
})

export default app
