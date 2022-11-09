import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

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
export const loginUser = async () => {};
