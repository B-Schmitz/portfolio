import styled from 'styled-components';
import { theme } from 'theme/theme';


export const Button = styled.a`
    display: flex;
    padding: 8px 16px;
    background: ${theme.background};
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background: ${theme.onBackground};
    }
`;