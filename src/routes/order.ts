/**
 * A esta ruta solo podrán acceder las personas
 * que tienen sesión activa
 * que tengan un jwt válido
 */

import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
const router = Router();

router.get("/", checkJwt, getItems);

export { router };
