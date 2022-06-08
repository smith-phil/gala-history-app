import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


type FooterProps = {
  children?: ReactNode[]
}

/**
 * Generic footer for the website
 */
const Footer = (props: FooterProps) => {
  return (
    <footer style={{ width: '100%', height: '70px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#1976d2', display: 'flex', flexDirection: 'column' }}>
      <div style={{ margin: 'auto', color: '#fff', lineHeight: '1vh' }}>Galawallet.io is an unofficial site and has no connection to or affiliation with Gala Games</div>
      <FooterContent>
        <div>Gala Games content © 2021 <Link href='https://app.gala.games' color='inherit' underline='hover'>Gala Games</Link></div>
        <div><Link href='tandc.html' color='inherit' underline='hover'>Terms and Conditions</Link></div>
        <div><GitHubIcon fontSize='inherit' />&nbsp;<Link href="https://github.com/smith-phil/gala-history-app" color='inherit' underline='hover'>Source Code</Link> </div>
      </FooterContent>
    </footer>
  );
};

export default Footer;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
  align-items: baseline;
  color: #fff;`


