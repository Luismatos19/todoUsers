import styled from "styled-components";
import * as color from "../../config/colors";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  color: white;
  background-color: ${color.PURPLE_LIGHT};
  margin: 0 auto;
  height: 3.5em;
  padding: 1em 7em;

  p {
    font-size: 1.5em;
    font-weight: 900;
    letter-spacing: 2px;
  }

  .icon {
    height: 1.5em;
    background-color: ${color.WHITE};
    width: 3em;
    height: 1.5em;
    border-radius: 25px;
    margin-left: 0.5em;
  }
`;
