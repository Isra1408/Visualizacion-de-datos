import axios from "../axios/axios";

const getDataApi = async () => {
  try {
    const response = await axios.get("/api");
    return response;
  } catch (error) {
    throw error;
  }
};

export default getDataApi;
