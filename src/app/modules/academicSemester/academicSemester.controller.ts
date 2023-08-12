import { NextFunction, Request, Response } from 'express';
import { SemesterService } from './academicSemester.service';
import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await SemesterService.createSemester(academicSemesterData);
    next();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  }
);
export const SemesterController = {
  createSemester,
};
