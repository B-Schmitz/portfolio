import styled from 'styled-components';
import { theme } from 'theme/theme';

export const ContactWrapper = styled.section``;

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

export const ImgBio = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  height: 120;
`;

export const TechName = styled.div`
  font-size: 14px;
  color: ${theme.text};
`;
