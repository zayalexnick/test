import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
    
`;

export const Tag = styled.button<{ selected: boolean }>`
    width: 100px;
    height: 50px;
    background: ${ ({ selected }) => rgba('#000', selected ? 1 : 0.5) }
`;