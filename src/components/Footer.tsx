import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
//import { colors, ApolloIcon } from '../styles';


type FooterProps = {
    children?:ReactNode[]
}
/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = (props:FooterProps) => {
  return (
    <FooterContainer>
      Gala Games content © 2021 Gala Games
      {props.children}
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div<FooterProps>`
display: flex,
flexDirection: row,
justifyContent: center,
alignItems: center,
color: pink,
marginTop: 30,
height: 200,
padding: 20,
backgroundColor: white,
borderTop: solid 1px pink,`

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});
