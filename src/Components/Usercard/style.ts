import styled from "styled-components";
import * as color from "../../config/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 4em;
  width: 40%;
  background-color: ${color.WHITE};
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  padding: 0.5em;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-left: 0.5em;
`;
