import React from "react";

import useUser from "../../hooks/useUser";

import Header from "../../Components/Header";
import Usercard from "../../Components/Usercard";
import { Container } from "./style";

const Home: React.FC = () => {
  const { user: users } = useUser();

  const handleCardClick = (id: number): void => {
    console.log("Card clicked with id: ", id);
  };

  return (
    <>
      <Header />
      <Container>
        {users.map((user) => {
          return <Usercard user={user} onClick={handleCardClick} />;
        })}
      </Container>
    </>
  );
};

export default Home;
