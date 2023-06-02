// import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tanstack = () => {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}></QueryClientProvider>
    </div>
  );
};

export default Tanstack;
