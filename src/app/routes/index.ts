import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route';

export const router = express.Router();

router.use('/users', UserRoutes);
router.use('/semesters', SemesterRoutes);
