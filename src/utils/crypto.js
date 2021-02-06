import crypto from "crypto-js";

export const encrypt = (input, key) => {
  const encrypted = crypto.AES.encrypt(input, key).toString();
  return encrypted;
};
export const decrypt = (input, key) => {
  const decrypted = crypto.AES.decrypt(input, key);
  const text = decrypted.toString(crypto.enc.Utf8);
  return text;
};
