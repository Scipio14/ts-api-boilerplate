/** Se va a encargar solamente de generar la firma del jwt */
import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET!;
/**Generar el token para ello se necesita el payload */
export const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
