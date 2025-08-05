// src/pipes/custom-validation.pipe.ts

import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  ValidationError,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new ValidationException(this.formatErrors(errors));
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private formatErrors(errors: ValidationError[]): string[] {
    return errors.flatMap((err) => this.mapConstraints(err));
  }

  private mapConstraints(error: ValidationError): string[] {
    const constraints = error.constraints
      ? Object.values(error.constraints)
      : [];
    const children = error.children ?? [];
    const childConstraints = children.flatMap((child) =>
      this.mapConstraints(child),
    );
    return [...constraints, ...childConstraints];
  }
}
