import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}

  createRole(dto: CreateRoleDto) {
    return this.roleModel.create(dto);
  }

  getRoleByValue(value: string) {
    return this.roleModel.findOne({ where: { value } });
  }
}
