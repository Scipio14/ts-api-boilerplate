import { Router, Request, Response } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getItems);
router.post("/", postItem);
router.get("/:id", logMiddleware, getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
