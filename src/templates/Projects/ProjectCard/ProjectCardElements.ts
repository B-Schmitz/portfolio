import styled from 'styled-components';
import { theme } from 'theme/theme';

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: auto;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  border-radius: 0.5rem;
  display: flex;
  height: 250px;
  justify-content: center;
  border: 1px solid ${theme.surface};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  img {
    object-fit: cover;
    height: 250px;
    border: 1px solid ${theme.surface};
    border-radius: 0.5rem;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(15, 6, 23, 0.4);
  padding: 16px;
  border-radius: 8px;

  h4 {
    font-size: 1.4rem;
    font-weight: 900;
  }

  p {
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: #fafafa;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: inline;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 700;
    margin-right: 5px;
    font-size: 17px;
    color: ${theme.title};
  }

  .tags {
    font-size: 15px;
    font-weight: 600;
    color: ${theme.text};
  }
`;
