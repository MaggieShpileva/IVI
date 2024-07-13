import axios from "axios";
import home_data from "@/data/home_data.json";
export const getDataMoviesHomeWorker = async () => {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve(home_data);
    });
  });
  return data;
};
