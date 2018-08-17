import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;

    flex-direction: column;
`;

export const Item = styled(Link)`
    margin-bottom: 10px;
    padding: 10px;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;

    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 14px;
`;