// import React from 'react'

import { useEffect, useState } from "react";
import { Api } from "../utils/Api";

export const usefetch = () => {
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    Api().then((res: any) => {
      setState(res);
    });
  });

  console.log(state?.data);
  return state?.data;
};
