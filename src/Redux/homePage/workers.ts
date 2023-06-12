import axios from "axios";
import home_data from "@/data/home_data.json";
export const getDataMoviesHomeWorker = async () => {
  // try {
  //   const https = require("https");
  //   const agent = new https.Agent({
  //     rejectUnauthorized: false,
  //   });
  //   const response = await axios.get(
  //     "https://84.201.131.92:5003/home?lang=ru",
  //     {
  //       httpsAgent: agent,
  //       timeout: 5000,
  //     }
  //   );
  //   return response.data;
  // } catch (e) {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(home_data);
    }, 1000);
  });
  return data;
  // }
};
