import React, { ReactNode } from 'react';
// import { colors, widths } from '../styles';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from '../assets/gala-logo.webp';


type HeaderProps = {
    children?:ReactNode[]
}
/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = (props:HeaderProps) => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <h3>Gala Explorer</h3>
                <div>Account explorer for Gala games</div>
              </Title>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        {props.children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px pink`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `1100px`,
});

const HomeLink = styled(NavLink)({
  textDecoration: 'none',
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: 'pink',
  alignItems: 'center',
  ':hover': {
    color: 'pink',
  },
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});