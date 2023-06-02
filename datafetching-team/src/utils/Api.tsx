// import React from 'react'
import axios from "axios";

const url = "https://api.escuelajs.co/api/v1/products ";
export const Api = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
