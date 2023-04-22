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
  list-style: none;
`;

export const ListItem = styled.li``;

export const PercentageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #cf5923;
`;

export const PercentageText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #cf5923;
`;

export const Time = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #adaaaa;
`;

export const Input = styled.input`
  width: 400px;
  cursor: pointer;
`;
