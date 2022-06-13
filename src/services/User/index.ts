import { AxiosResponse } from "axios";

import { User } from "../../utils/types/user";
import api from "../agents/instance";

export const getUserService = async (): Promise<AxiosResponse<User[]>> => {
  return await api.get<User[]>("users");
};
