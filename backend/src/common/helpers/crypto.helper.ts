/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
// src/common/helpers/crypto.helper.ts
import * as bcrypt from 'bcrypt';

export class CryptoHelper {
  static async hash(str: string): Promise<string> {
    return bcrypt.hash(str, 10);
  }

  static async compare(str: string, hash: string): Promise<boolean> {
    return bcrypt.compare(str, hash);
  }
}
