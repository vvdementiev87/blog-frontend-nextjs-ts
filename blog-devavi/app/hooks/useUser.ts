import { useQuery } from "@tanstack/react-query";
import { UserSevice } from "../../app/service/user.service";

export const useUser = (username: string) => {
  const { error, isLoading, data, refetch, status } = useQuery(
    ["userData"],
    () => UserSevice.getUserByUsername(username),
    { enabled: false }
  );

  return { error, isLoading, data, refetch, status };
};
