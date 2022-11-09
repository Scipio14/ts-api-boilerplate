import { hash, compare } from "bcrypt";

export const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 10);
  return passwordHash;
};

export const verified = () => {};
