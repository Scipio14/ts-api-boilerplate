import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import Item from "../models/item";
import { getCars, insertCar } from "../services/item";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITMES");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_CREATE_ITEM", e);
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITE");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
