import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { mq } from '.';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Erc1155Token } from '../erc';
import { fetchErc115Token } from '../store/erc1155Slice';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

type AssetCardProps = {
    token: Erc1155Token,
    valueExact: number,
}

/**
 * Asset Card component renders information about ERC1155 tokens
 */
const AssetCard = (props: AssetCardProps) => {

    const loaded = useAppSelector(state => state.erc115Tokens[props.token.id] !== undefined);
    const tokenDetail = useAppSelector(state => state.erc115Tokens[props.token.id])
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!loaded) {
            dispatch(fetchErc115Token(props.token.uri))
        }
    }, [loaded])

    return (
        <CardContainer>
            {!loaded && (
                <CardContent>
                    <CircularProgress />
                </CardContent>
            )}
            {loaded && (
                <CardContent>
                    <CardImageContainer>
                        <CardImage src={tokenDetail.image} alt={tokenDetail.name} />
                    </CardImageContainer>
                    <CardBody>
                        <CardTitle>{tokenDetail.name}</CardTitle>
                        <CardAmount>{props.valueExact}</CardAmount>
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
            )}
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
