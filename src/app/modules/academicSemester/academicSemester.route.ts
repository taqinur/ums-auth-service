import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { SemesterValidation } from './academicSemester.validation';
import { SemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(SemesterValidation.createSemesterZodSchema),
  SemesterController.createSemester
);

export const SemesterRoutes = router;
