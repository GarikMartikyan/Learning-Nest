// src/common/decorators/api-error-response.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { ErrorResponseDto } from '../dto/error-response.dto';

export function ApiErrorResponse() {
  return applyDecorators(
    ApiExtraModels(ErrorResponseDto),
    ApiResponse({
      status: 400,
      description: 'Bad Request',
      type: ErrorResponseDto,
    }),
  );
}
