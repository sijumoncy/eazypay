import bcrypt from "bcrypt";

export async function hash(value: string, salt: number = 10): Promise<string> {
  const hashedValue = await bcrypt.hash(value, salt);
  return hashedValue;
}

export async function compareHashed(
  plainValue: string,
  hashedValue: string
): Promise<boolean> {
  const validate = await bcrypt.compare(plainValue, hashedValue);
  return validate;
}
