import styled, { css } from "styled-components"
import { slideIn } from "../../styles/animation"

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
       {
        ${slideIn(".5s")}
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 600px;
        padding: 10px 5px;
        position: fixed;
        right: 0;
        top: -40px;
        transform: scale(0.5);

        z-index: 1;
      }
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
