import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // main route
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
