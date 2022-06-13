import { AxiosResponse } from "axios";

import { Task } from "../../utils/types/task";
import api from "../agents/instance";

export const getTasksService = async (
  id: string | undefined
): Promise<AxiosResponse<Task[]>> => {
  return await api.get<Task[]>(`todos?userId=${id}`);
};
