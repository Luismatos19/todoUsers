import { AxiosResponse } from "axios";

import { User } from "../../utils/types/user";
import api from "../agents/instance";

export const getUser = async (): Promise<AxiosResponse<User[]>> => {
  return await api.get<User[]>("users");
};
