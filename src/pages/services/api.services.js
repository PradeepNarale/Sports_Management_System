import axios from "axios";

const serverURL = `http://localhost:8080`;

const APICall = (url, data = {}, method = 1) => {
  return new Promise(async (resolve, reject) => {
    try {
      const finalURL = `${serverURL}${url}`;
      let response;
      if (method === 1) {
        response = await axios.get(finalURL);
      } else if (method === 2) {
        response = await axios.post(finalURL, data);
      } else if (method === 3) {
        response = await axios.patch(finalURL, data);
      } else if (method === 4) {
        response = await axios.delete(finalURL);
      } else if (method === 5) {
        response = await axios.put(finalURL, data);
    }
      return resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export default APICall;
