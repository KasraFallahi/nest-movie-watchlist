import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, LoginPayloadDto } from './dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth') // main route
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
  signup(@Body() dto: UserDto): Promise<LoginPayloadDto> {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
