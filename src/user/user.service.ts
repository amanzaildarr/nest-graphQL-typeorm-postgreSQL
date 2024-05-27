import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly i18n: I18nService,
  ) {}
  async createUser(createUserInput: CreateUserInput) {
    const User = this.userRepository.create(createUserInput);
    await User.save();
    console.log('User', User);

    return User;
  }

  findAll() {
    const Users = this.userRepository.find();
    return Users;
  }

  async findOne(id: number) {
    const User = await this.userRepository.findOne({ where: { id },withDeleted:true });
    
    if (!User) {
      throw new BadRequestException(this.i18n.t('user.NOT_FOUND'));
    }
    return User;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const User = await this.userRepository.findOne({ where: { id } });
    for (const key in updateUserInput) {
      User[key] = updateUserInput[key];
    }
    await User.save();
    return User;
  }

  async remove(id: number) {
    // const User = await this.userRepository.restore(id);
    const User = await this.userRepository.findOne({ where: { id } });
    await User.softRemove()
    return User;
  }
}
