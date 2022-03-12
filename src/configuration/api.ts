import axios from 'axios';

const JWT =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJBRE0sVVNFUiIsImV4cCI6MzIyMDU4NzMwN30.AP9qSdyJCDCVGMuGkEQqabj6DGV289ZwB7xwcJtzmMc';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: JWT,
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
//     if (token) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
