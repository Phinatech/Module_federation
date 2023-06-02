import { Api } from "../utils/Api";
import { useQuery } from "@tanstack/react-query";

export const useTan = () => {
  const {} = useQuery({
    queryKey: ["data"],
    queryFn: Api,
  });

  return [];
};
