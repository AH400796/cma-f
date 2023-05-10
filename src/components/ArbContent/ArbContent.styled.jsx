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
  gap: 10px;
  padding-bottom: 20px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  padding: 12px;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(117, 104, 77, 0.81) 308.27%
  );
  box-shadow: 2px 2px 4px 0px #070707;
  border-radius: 5px;
`;
export const PercentageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 320px;
  padding: 10px;

  color: #f1e892;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(117, 104, 77, 0.81) 308.27%
  );
  box-shadow: 2px 2px 5px 0px #070707;
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  width: 635px;
`;

export const ListItem = styled.li``;

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
  color: #f1e892;
`;

export const Input = styled.input`
  width: 400px;
  cursor: pointer;
`;
