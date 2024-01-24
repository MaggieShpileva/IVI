import { BannerType } from "@/types/types";

export const Worker = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  });
};
