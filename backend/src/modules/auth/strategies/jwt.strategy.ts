/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUser } from 'src/common/types/auth-user.interface';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const jwtExtractor = ExtractJwt.fromAuthHeaderAsBearerToken() as (
      req: Request,
    ) => string | null;

    super({
      jwtFromRequest: jwtExtractor,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'supersecretkey',
    });
  }

  validate(payload: unknown): AuthUser {
    if (
      typeof payload !== 'object' ||
      payload === null ||
      !('sub' in payload) ||
      !('email' in payload)
    ) {
      throw new Error('Invalid JWT payload');
    }

    const { sub, email } = payload as { sub: number; email: string };

    return {
      id: sub,
      email,
    };
  }
}
