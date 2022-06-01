import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { gql, useQuery } from '@apollo/client';
import AssetCard from './components/AssetCard';
import { Erc1155Balance, Erc1155Token } from './erc';

const TOKENS = gql`
  query getAccountERC1155Balances {
  accounts(where: {id:"0x8d408adf3416f038ef48cf3093023b3fd7fc9bb5"}) {
    ERC1155balances {
      token {
        id
        uri
      }
      valueExact
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(TOKENS);
  if(data) {
    console.log('data is: ', data);
    console.log('accounts is', data.accounts)
    console.log('balances is ', data.accounts[0].ERC1155balances);
  }
  return (
<BrowserRouter>

      <Header />
      
      <Container pageWidth={1100} flexDirection={'row'} justifyContent={'center'}>
      {data !== undefined && (
        data.accounts[0].ERC1155balances?.map((balance:Erc1155Balance, i:number) => (
          <AssetCard key={i.toString()} token={balance.token} valueExact={balance.valueExact} />
        )
      ))}
      </Container>
      <Footer />

</BrowserRouter>
  );
}

export default App;
