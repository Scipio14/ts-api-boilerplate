/**
 * A esta ruta solo podrán acceder las personas
 * que tienen sesión activa
 * que tengan un jwt válido
 */

import { Router } from "express";
import { getOrders } from "../controllers/order";
const router = Router();

router.get("/", getOrders);

export { router };
