import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export const checkJwt = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // ['Bearer','111']
    const isUser = verifyToken(`${jwt}`);
    console.log(isUser);
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      console.log({ jwtByUser });
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESION_NO_VALIDA");
  }
};
