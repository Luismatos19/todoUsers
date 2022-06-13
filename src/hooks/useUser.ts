import { useEffect, useState } from "react";

import { getUserService } from "../services/User";
import { User } from "../utils/types/user";

const useUser = () => {
  const [user, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const { data } = await getUserService();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { user };
};

export default useUser;
