/** Encargado de recibir y responder, pero la lógica de negocio
 * se encuentra en el servicio
 */

import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async () => {};

export { registerCtrl, loginCtrl };
