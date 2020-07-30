import styled from "styled-components";

const Buttom  = styled.button `
  color: white;
  font-stretch: bolder;
  border: 0px solid var(--white);
  background-color: var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
  opacity: .5;
}
`;

export default Buttom;