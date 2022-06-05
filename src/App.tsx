import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { DocumentNode, gql, useLazyQuery, useQuery } from '@apollo/client';
import AssetCard from './components/AssetCard';
import { Erc1155Balance, Erc1155Token } from './erc';
import Box from '@mui/material/Box/Box';
import { useEffect, useState } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';

const TOKENS = gql`
        query getAccountERC1155Balances($address:String!) {
        account(id:$address) {
          ERC1155balances {
            token {
              id
              uri
            }
            valueExact
          }
        }
      }`

function App() {

  const [address, setAddress] = useState<string | undefined>();
  const [showLoading, setShowLoading] = useState(false);
  let [getTokens, { called, loading , data }] = useLazyQuery(TOKENS)

  
  const onAddressChanged = (address:string)=>{
    setShowLoading(true);
    getTokens({variables: { address }})
  }

  useEffect(()=> {
    if(called && !loading) {
      setShowLoading(false)
    }
  }, [loading, called])

  return (
    <BrowserRouter>

      <Header title='Gala Games Token History' onAddressChanged={onAddressChanged} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container pageWidth={1100} flexDirection={'row'} justifyContent={'center'}>
          {showLoading && (
            <CircularProgress />
          )}
          {data !== undefined && (
            data.account.ERC1155balances?.map((balance: Erc1155Balance, i: number) => (
              <AssetCard key={i.toString()} token={balance.token} valueExact={balance.valueExact} />
            )
          ))}
        </Container>
      </Box>
      <Footer />

    </BrowserRouter>
  );
}

export default App
