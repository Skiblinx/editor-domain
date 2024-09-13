import axios from "axios"
import {setSession} from './requests'

export const handleUnauthorizedRequest = (error) => {
  if (error && (error.status === 401 || error.statusCode === 401)) {
      // setSession();
      const authRoutes = ['/login', '/register', '/forgot-password', '/reset-password'];
      // push to log in immediately when not auth path, token is not valid
      if (!authRoutes.includes(window.location.pathname)) {
          // window.location.replace('/login');
      }
  }
};


const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      handleUnauthorizedRequest(error.response || error);
      return Promise.reject(error.response);
  },
);






export { axiosInstance as axios };