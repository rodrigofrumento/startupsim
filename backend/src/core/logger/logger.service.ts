import { Injectable, LoggerService, LogLevel } from '@nestjs/common';

@Injectable()
export class AppLogger implements LoggerService {
  private levels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];

  setLogLevels(levels: LogLevel[]) {
    this.levels = levels;
  }

  log(message: any, context?: string) {
    if (this.levels.includes('log')) {
      console.log(`[LOG] ${context ?? ''}`, message);
    }
  }

  error(message: any, trace?: string, context?: string) {
    if (this.levels.includes('error')) {
      console.error(`[ERROR] ${context ?? ''}`, message, trace ?? '');
    }
  }

  warn(message: any, context?: string) {
    if (this.levels.includes('warn')) {
      console.warn(`[WARN] ${context ?? ''}`, message);
    }
  }

  debug(message: any, context?: string) {
    if (this.levels.includes('debug')) {
      console.debug(`[DEBUG] ${context ?? ''}`, message);
    }
  }

  verbose(message: any, context?: string) {
    if (this.levels.includes('verbose')) {
      console.info(`[VERBOSE] ${context ?? ''}`, message);
    }
  }
}
