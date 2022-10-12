import styled from "styled-components";
import { theme } from "theme/theme";

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
  background: ${theme.onSurface};
  border-radius: 5px;
  padding: 4px;
  height: 280px;
  display: flex;
  
  img {
    width: 100%;
    border-radius: 3px;

  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  p {
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
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
    color: ${theme.title}
  }

  .tags {
    font-size: 15px;
    font-weight: 600;
    color: ${theme.text}
  }
`;