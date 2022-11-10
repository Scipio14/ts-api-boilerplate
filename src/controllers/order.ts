import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO SE VE CON UN JWT VÁLIDO",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getItems };
