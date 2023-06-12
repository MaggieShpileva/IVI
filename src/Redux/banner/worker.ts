import { BannerType } from "@/types/types";
import main_banner from "@/data/Main_banner.json";

export const getDataBannerWorker = () => {
  return new Promise<BannerType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(main_banner);
    }, 1000);
  });
};
