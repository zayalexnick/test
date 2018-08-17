import styled from 'styled-components/native';
import { Touchable } from '@/components';

export const Container = styled.View`
    padding: 15px;
    background: #fff;
`;

export const Item = styled(Touchable)`
    margin-bottom: 10px;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;

    margin-bottom: 10px;
`;

export const Description = styled.Text`
    font-size: 14px;
`;