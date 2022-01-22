import axios from 'axios';

const jwt = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOiJBRE0sVVNFUiIsImV4cCI6MzIyMDU4NzMwN30.AP9qSdyJCDCVGMuGkEQqabj6DGV289ZwB7xwcJtzmMc';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': jwt
  }
});