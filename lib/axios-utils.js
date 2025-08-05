"use client";
import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "https://api.projectme.my.id/api",
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getSession();
  config.headers.Authorization = token.accessToken;
  return config;
}),
  axiosInstance.interceptors.response.use(
    async (response) => {
      const session = await getSession();
      console.log(session);
      if (session) {
        response.headers.Authorization = session.accessToken;
      }
      return response;
    },
    async (error) => {
      // const refreshToken = await getSession();
      // if (error.response.status === 401) {
      //   const res = await axios({
      //     url: "https://api.projectme.my.id/apiauth/refreshtoken",
      //     method: "post",
      //     headers: { "x-access-token": refreshToken.refreshToken },
      //   });
      //   error.config.headers["Authorization"] = res.data.newToken;
      //   return axios(error.config);
      // }
      return Promise.reject(error);
    }
  );
export default axiosInstance;
