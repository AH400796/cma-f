import styled from 'styled-components';

export const ExtraWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 20px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
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
  color: #c4c4c4;

  gap: 5px;
  width: 320px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const PercentageText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const Time = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #c4c4c4;
`;

export const Input = styled.input`
  width: 400px;
  cursor: pointer;
`;
