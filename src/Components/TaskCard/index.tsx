import React from "react";

import { Task } from "../../utils/types/task";
import { Header } from "./style";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <>
      <Header>{task.title}</Header>
    </>
  );
};

export default TaskCard;
