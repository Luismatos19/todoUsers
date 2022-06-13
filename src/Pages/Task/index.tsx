import React from "react";
import { useRoute } from "wouter";

import TaskCard from "../../Components/TaskCard";
import { useTasks } from "../../hooks/useTasks";
import { Container } from "./style";

const Task: React.FC = () => {
  const [_, params] = useRoute("/user/:id");
  console.log(params?.id);
  const { tasks } = useTasks(params?.id);

  return (
    <>
      <Container>
        <div>
          {tasks.map((task) => {
            return <TaskCard task={task} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Task;
