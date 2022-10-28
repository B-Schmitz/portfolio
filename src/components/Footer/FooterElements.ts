import styled from 'styled-components';
import wave from 'assets/svgs/wave.svg';
import { theme } from 'theme/theme';

export const FooterSection = styled.footer`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  position: relative;

  span {
    position: absolute;
    bottom: 0;
    color: ${theme.white};
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 15%;
    position: absolute;
    bottom: 0;
    right: 20rem;

    @media screen and (max-width: 1000px) {
      right: 8rem;
     
    }

    @media screen and (max-width: 550px) {
      right: 1rem;
      flex-direction: column;
    }
  }
 li > a, li > i {
    font-size: 2rem;
    color: ${theme.white};
    transition: 0.3s ease-in;
    cursor: pointer;
    &:hover {
      color: ${theme.onSurface};
    }
    @media screen and (max-width: 550px) {
      font-size: 1.6rem;
    }
  }
  }
`;
