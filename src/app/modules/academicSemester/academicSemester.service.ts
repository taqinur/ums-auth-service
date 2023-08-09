import { IAcademicSemester } from './academicSemester.interface';
import { Semester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await Semester.create(payload);
  return result;
};

export const SemesterService = {
  createSemester,
};
