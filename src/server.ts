import express from 'express'
const app = express()

const { PORT } = process.env

app.get('/', (req, res) => {
  return res.json({ status: 'Running fine!' })
})

app.listen(PORT, () => console.log(`> Running on http://localhost:${PORT}`))
