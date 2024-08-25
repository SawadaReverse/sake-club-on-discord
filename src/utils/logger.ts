import { env } from './environment';

export type LogLevel = 'INFO' | 'DEBUG' | 'ERROR';

type LogFormat = {
  level: LogLevel;
  message: string;
  processingDate: string;
};

const currentLogLevel = env.LOG_LEVEL;

export class Logger {
  static error(message: string) {
    const log: LogFormat = {
      level: 'ERROR',
      message,
      processingDate: new Date().toISOString(),
    };
    console.error(log);
  }

  static info(message: string) {
    if (currentLogLevel === 'INFO' || currentLogLevel === 'DEBUG') {
      const log: LogFormat = {
        level: 'INFO',
        message,
        processingDate: new Date().toISOString(),
      };
      console.log(log);
    }
  }

  static debug(message: string) {
    if (currentLogLevel === 'DEBUG') {
      const log: LogFormat = {
        level: 'DEBUG',
        message,
        processingDate: new Date().toISOString(),
      };
      console.log(log);
    }
  }
}
