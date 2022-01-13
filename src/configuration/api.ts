import axios from 'axios';

const jwt = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzOCIsInJvbGVzIjoiVVNFUiIsImV4cCI6MTY0MzkwODYyNH0.IfCqiFLBRi2Y1MSUqPjR_Ohtge1RlxGYeR2ccDZJqys';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': jwt
  }
});