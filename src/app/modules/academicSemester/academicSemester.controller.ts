import { NextFunction, Request, Response } from 'express';
import { SemesterService } from './academicSemester.service';

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await SemesterService.createSemester(academicSemesterData);
    res.status(200).json({
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const SemesterController = {
  createSemester,
};
