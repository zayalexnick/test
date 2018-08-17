import styled from 'styled-components/native';
import { Text as RNText } from 'react-native';
import { Touchable } from "@/components";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Text = styled.Text`
    
`;

export const Button = styled(Touchable)`
    margin: 20px auto;
    
    font-size: 20px;
`;

export const Tag = styled(Touchable)<{color: string, selected: boolean }>`    
    margin: 5px 0;
    padding: 15px 10px;
    
    text-align: center;
    font-size: 18px;
    
    color: ${ ({ selected }) => selected ? '#fff': '#333' };
    background: ${ ({ selected, color }) => selected ? color : '#ccc' };
`;