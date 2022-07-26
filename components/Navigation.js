import {
  NavigationStyled,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  Logo,
} from "./Styles/Navigation.styles";
import Link from "next/link";

import LogoImg from "../public/logo.png";

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </LeftContainer>
        <RightContainer>
          <Link href="/">
            <a>
              <Logo src={`${prefix}/logo.png`} alt=""></Logo>
            </a>
          </Link>{" "}
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavigationStyled>
  );
};

export default Navigation;
