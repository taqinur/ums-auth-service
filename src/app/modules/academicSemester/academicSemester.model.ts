import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const SemesterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
    enum: ['Autumn', 'Summer', 'Fall'],
  },
  year: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: ['01', '02', '03'],
  },
  startMonth: {
    type: String,
    required: true,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  endMonth: {
    type: String,
    required: true,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
});

SemesterSchema.pre('save', async function (next) {
  const isExist = await Semester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Semester already exists');
  }
  next();
});

export const Semester = model<IAcademicSemester, AcademicSemesterModel>(
  'Semester',
  SemesterSchema
);
