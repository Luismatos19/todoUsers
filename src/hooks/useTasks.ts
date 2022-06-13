import { useEffect, useState } from "react";

import { getTasksService } from "../services/Task";
import { Task } from "../utils/types/task";

export const useTasks = (id: string | undefined) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await getTasksService(id);
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return { tasks };
};
