import styled, { keyframes } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { theme } from '../../theme/theme';

export const HomeContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const Main = styled.main`
  background: linear-gradient(180deg, ${theme.surface} 0%, ${theme.onBackground} 100%);
  width: 100%;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: ${theme.title};
    font-weight: 600;
  }

  h5 {
    font-size: 1.6rem;
    color: ${theme.text};
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: ${theme.text};
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HomeRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    objectfit: cover;
    border-radius: 100%;
  }
`;

export const ImageBackground = styled.div`
  opacity: 0.75;
  border-radius: 100%;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 4s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${theme.title};

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
