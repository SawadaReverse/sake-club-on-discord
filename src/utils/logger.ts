const logLevel = ['DEBUG', 'INFO', 'ERROR'] as const;
type LogFormat = {
  level: (typeof logLevel)[number];
  message: string;
  processingDate: string;
};

let currentLogLevel = process.env.LOG_LEVEL || 'ERROR';
if (!(currentLogLevel in logLevel)) {
  currentLogLevel = 'ERROR';
}

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
    if (currentLogLevel !== 'ERROR') {
      const log: LogFormat = {
        level: 'INFO',
        message,
        processingDate: new Date().toISOString(),
      };
      console.info(log);
    }
  }

  static debug(message: string) {
    if (currentLogLevel !== 'ERROR' && currentLogLevel !== 'INFO') {
      const log: LogFormat = {
        level: 'DEBUG',
        message,
        processingDate: new Date().toISOString(),
      };
      console.debug(log);
    }
  }
}
