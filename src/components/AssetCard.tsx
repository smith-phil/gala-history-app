import { useEffect } from 'react';
import styled from '@emotion/styled';
import { mq } from '.';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Erc1155Token } from '../erc';
import { fetchErc115Token } from '../store/erc1155Slice';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Card from '@mui/material/Card/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';

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

            dispatch(fetchErc115Token(props.token))
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
                <Card sx={{maxWidth: 340, maxHeight: 490}}>
                <CardMedia
                        component='img'
                        image={tokenDetail.image}
                        alt={tokenDetail.name}
                        sx={{maxHeight:'100%', maxWidth:'100%'}}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {tokenDetail.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{overflowY:'hidden'}}>
                    {tokenDetail.description}
                    </Typography>
                </CardContent>

                </Card>

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
    margin: 10,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
});