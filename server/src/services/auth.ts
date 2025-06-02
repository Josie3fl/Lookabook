
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';


dotenv.config();

interface MyJwtPayload extends jwt.JwtPayload {
  _id: string;
}

const secret = process.env.JWT_SECRET_KEY || '';
const expiration = '1h';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};



export function signToken(user: { username: string; email: string; _id: string }) {
  const payload = { username: user.username, email: user.email, _id: user._id };
  return jwt.sign(payload, secret, { expiresIn: expiration });
}

// Apollo Server context function
export function authMiddleware({ req }: { req: Request }) {
  let token = req.headers.authorization || '';

  if (token.startsWith('Bearer ')) {
    token = token.slice(7).trim();
  }

  if (!token) return req;

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    (req as any).user = decoded;
  } catch (err) {
    console.warn('Invalid token');
  }

  return req;
}
