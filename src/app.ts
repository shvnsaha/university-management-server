import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFoundRoute from './app/middlewares/notFoundRoute'
import router from './app/routes'
const app: Application = express()

// parsers:
app.use(express.json())
app.use(cors())

// application routes;
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error handler:
app.use(globalErrorHandler)
// not found:
app.use(notFoundRoute)

export default app
