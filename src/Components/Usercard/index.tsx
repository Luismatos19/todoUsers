import React from "react";
import { User as AvatarUser } from "react-feather";

import { User } from "../../utils/types/user";
import { Container, Title } from "./style";

interface UserCardProps {
  user: User;
  onClick: (id: number) => void;
}

const Usercard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <>
      <Container onClick={() => onClick(user.id)}>
        <AvatarUser />
        <Title>{user.name}</Title>
      </Container>
    </>
  );
};

export default Usercard;
