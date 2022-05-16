import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import wineRouter from './routes/wine.js'

const app = express()

app.use(morgan("dev"))
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

app.use('/wine', wineRouter)

app.get('*', (req, res) => {
    res.status(404).json({
      status: 'fail',
      data: {
        resource: 'Not found'
      }
    })
  })

const port = 4000
app.listen(port, () => {
 console.log(`\n Server is running on http://localhost:${port}/`)
})