import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  width: 635px;
`;

export const ListItem = styled.li``;

export const PercentageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dfa810;

  gap: 5px;
  width: 400px;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

export const PercentageText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const Time = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

export const Input = styled.input`
  width: 400px;
  cursor: pointer;
`;
