import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

api.interceptors.response.use((response) => {
  const body = response.data;

  if (typeof body === "object" && "data" in body) {
    return {
      ...response,
      data: body.data,
    };
  }

  return response;
});
