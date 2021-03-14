import { createGlobalStyle } from 'styled-components';

// Font files
import BauRegular from './bau-regular.woff';

export default createGlobalStyle`
@font-face {
    font-family: 'bau-regular';
    src: url(${BauRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
}
`;
