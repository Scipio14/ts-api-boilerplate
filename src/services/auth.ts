import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER ALREADY EXISTS";
  //TODO encriptar la contraseña antes de pasarsela a la base de datos
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};
export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "INVALID_CREDENTIALS";

  const passwordHash = checkIs.password; //! El encriptado que viene de la base de datos
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "INVALID_CREDENTIALS";
  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};
