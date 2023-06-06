import { Injectable } from '@nestjs/common';
import { JwtService } from './jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Vous pouvez implémenter votre logique d'authentification ici
  async validateUser(payload: any): Promise<any> {
    // Recherchez l'utilisateur dans la base de données, par exemple
    // en utilisant le payload.sub pour l'ID de l'utilisateur
    // Retournez l'utilisateur s'il est trouvé, sinon retournez null
  }

  async login(user: any): Promise<any> {
    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.generateToken(payload);
    return { access_token: token };
  }
}
