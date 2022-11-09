import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";

const getOrders = (req: Request, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO SE VE CON UN JWT VÁLIDO",
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getOrders };
