import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt-constants';
import { AuthService } from '../auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';

@Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // async validate(payload: any) {
  //   const user = await this.authService.validateUser(payload);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
  async validate(payload: any): Promise<User> {
    const user = await this.usersService.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
