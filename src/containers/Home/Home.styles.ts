import styled from 'styled-components';

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
`;

export const ExploreContainer = styled.div`
  margin-top: 2rem;
`;

export const ExploreTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const ExploreOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ExploreCard = styled.div`
  width: 47%;
`;

export const ExploreLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  border-radius: 0.25rem;
  color: #000;
  box-shadow: 0px 2px 5px #cbd5e1;

  span {
    margin-bottom: 0.5rem;
    font-size: 2.2rem;
  }
`;
