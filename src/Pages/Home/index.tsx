import React from "react";
import { useLocation } from "wouter";

import useUser from "../../hooks/useUser";
import Usercard from "../../Components/Usercard";
import { Container } from "./style";

const Home: React.FC = () => {
  const [_, setLocation] = useLocation();
  const { user: users } = useUser();

  const handleCardClick = (id: number): void => {
    setLocation(`/user/${id}`);
  };

  return (
    <>
      <Container>
        {users.map((user) => {
          return <Usercard user={user} onClick={handleCardClick} />;
        })}
      </Container>
    </>
  );
};

export default Home;
