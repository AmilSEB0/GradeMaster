/* eslint-disable prettier/prettier */
import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiBody, ApiTags, ApiResponse } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiBody({
    type: Object,
    description: 'Les informations d\'identification de l\'utilisateur',
    required: true,
    schema: {
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        motDePasse: { type: 'string', example: 'password123' },
      },
    },
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Identifiants invalides' })
  async login(@Body() user: { email: string; motDePasse: string }) {
    const authenticatedUser = await this.authService.validateUser(
      user.email,
      user.motDePasse,
    );

    if (!authenticatedUser) {
      throw new HttpException(
        "Identifiants invalides",
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = await this.authService.login(authenticatedUser);
    return token;
  }
}
