import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { SemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/semesters', SemesterRoutes);

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled promise rejection'))
// })

// Global error Handler
app.use(globalErrorHandler);

export default app;
