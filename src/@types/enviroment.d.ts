import { Secret } from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number | string;
      BD_CONNECTION_STRING: string;
      JWT_SECRET: Secret;
      EXPIRES_IN: string | number;
    }
  }
}
