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
display: flex,
justifyContent: ${props => props.justifyContent},
flexDirection: ${props => props.flexDirection},
flexWrap: wrap,
alignSelf: center,
flexGrow: 1,
maxWidth: ${props => props.pageWidth}px,
width: 100%,
padding: props.fullWidth ? 0 : unit * 2,
paddingBottom: unit * 5,
`

export default Container;