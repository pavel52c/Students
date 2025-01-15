import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entitie';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
}
