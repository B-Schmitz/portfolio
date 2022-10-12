import styled from "styled-components";
import { theme } from "theme/theme";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  height: 120px;
  background-color: ${theme.onSurface};
  border-radius: 100%;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 1rem;
`;

export const TechImg = styled.img`
  height: 48px;
  width: auto
`;

export const TechName = styled.div`
  font-size: 14px;
`;
