import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class ProfesseurGuard implements CanActivate {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return false;
    }

    const token = authHeader.split(" ")[1];
    try {
      const user = this.jwtService.verify(token);
      const professeurId = request.params.professeurId;

      // eslint-disable-next-line eqeqeq
      if (user && user.role === 1 && user.id == professeurId) {
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  }
}
