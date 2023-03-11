import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash as argonHash } from 'argon2';
import { LoginPayloadDto, UserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async signup(userRegisterDto: UserDto): Promise<LoginPayloadDto> {
    try {
      // hash the password
      const hash = await argonHash(userRegisterDto.password);

      const user = this.userRepository.create({
        email: userRegisterDto.email,
        password: hash,
      });

      await this.userRepository.save(user);
      delete user.password;
      return user;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'A user has already been created with this email address',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async signin() {
    return;
  }
}
