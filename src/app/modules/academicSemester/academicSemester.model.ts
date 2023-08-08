import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';

const SemesterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  endMonth: {
    type: String,
    required: true,
  },
});

export const Semester = model<IAcademicSemester, AcademicSemesterModel>(
  'Semester',
  SemesterSchema
);
