import axios from "axios";

const instance = axios.create({
  baseURL: "https://zerodha-clone-2-0rdc.onrender.com",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Token being sent:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// If token expires, redirect to login
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      localStorage.clear();
      window.location.href = "`https://zerodha-clone-3-vmf8.onrender.com/login"; // frontend login page
    }
    return Promise.reject(err);
  }
);

export default instance;