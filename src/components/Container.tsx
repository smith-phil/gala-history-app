import styled from '@emotion/styled';
import { ReactNode } from 'react';

type ContainerProps = {
    justifyContent: 'center' | 'top',
    flexDirection: 'row' | 'column', 
    pageWidth: number,
    children?:ReactNode[]
}

/** Layout styled components */
const Container = styled.div<ContainerProps>`
display: flex;
justify-content: ${props => props.justifyContent};
flex-direction: ${props => props.flexDirection};
flex-wrap: wrap;
align-self: center;
flex-grow: 1;
max-width: ${props => props.pageWidth}px;
width: 100%;
padding: props.fullWidth ? 0 : unit * 2;
padding-bottom: unit * 5;
`

export default Container;