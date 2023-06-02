import { atom } from "recoil";

export const readCount = atom({
  key: "readCount",
  default: 0,
});
