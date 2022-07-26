import styled from "styled-components";

export const NavigationStyled = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: red;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  background-color: salmon;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
