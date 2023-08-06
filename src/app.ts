import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Error!')
//   // next ("Error!")
// })

// Global error Handler
app.use(globalErrorHandler)

export default app
