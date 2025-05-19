/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod';
import * as dotenv from 'dotenv';
import { envSchema } from './env.validation';

dotenv.config();

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('Env error', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
