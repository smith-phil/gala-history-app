import React from 'react';
import styled from '@emotion/styled';
import { Erc1155Balance, Erc1155Token, TokenDetail } from '../erc';
import { fetchAssetFromJson } from '../services/Fetch';
import { mq } from '.';

type AssetCardProps = {
    balance: Erc1155Balance
}

/**
 * Asset Card component renders information about ERC1155 tokens
 */
const AssetCard = (props:AssetCardProps) => {
  const { account, value, valueExact, token } = props.balance;
  let tokenDetail: undefined | TokenDetail;
  const fetcher = async () => {
    tokenDetail = await fetchAssetFromJson<TokenDetail>(token.uri);
  }
  fetcher();
  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={tokenDetail!.image} alt={tokenDetail!.name} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{tokenDetail!.name || ''}</CardTitle>
          <CardAmount>{valueExact}</CardAmount>
          <CardFooter>
          <CardDescription>{tokenDetail!.description || ''}</CardDescription>
          <CardDetails>
            <li>Game: {tokenDetail!.properties.game || ''}</li>
            <li>Category: {tokenDetail!.properties.category || ''}</li>
            <li>Rarity: {tokenDetail!.properties.rarity.label || ''}</li>
            <li>Supply Limit: {tokenDetail!.properties.rarity.supplyLimit || ''}</li>
          </CardDetails>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default AssetCard;

/** Track Card styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '31%',
  },
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: 'pink',
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  flex: 1,
});

const CardAmount = styled.h4({
textAlign: 'center',
  fontSize: '1.2em',
  lineHeight: '1em',
  fontWeight: 700,
  flex: 1,
})

const CardImageContainer = styled.div({
  height: 220,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(250,0,150,0.20)',
  },
});

const CardImage = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'grayscale(60%)',
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardDescription = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const CardDetails = styled.ul({
    listStyle: 'square inside'
})

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const AuthorAndTrack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const AuthorName = styled.div({
  lineHeight: '1em',
  fontSize: '1.1em',
});

const TrackLength = styled.div({
  fontSize: '0.8em',
});
