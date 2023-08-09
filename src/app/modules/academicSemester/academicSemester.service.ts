import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAcademicSemester } from './academicSemester.interface';
import { Semester } from './academicSemester.model';

const semesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (semesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await Semester.create(payload);
  return result;
};

export const SemesterService = {
  createSemester,
};
