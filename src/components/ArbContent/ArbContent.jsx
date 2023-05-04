import { useState, useEffect } from 'react';
import { getData } from '../../services/API';
import TraidingPairItem from '../TraidingPairItem';
import RangeInput from '../RangeInput';
import {
  List,
  Wrapper,
  ExtraWrapper,
  Time,
  InfoWrapper,
  Percentage,
  PercentageWrapper,
  PercentageText,
  TimeWrapper,
} from './ArbContent.styled';

export default function ArbCont() {
  const [dataList, setDataList] = useState([]);
  const [arbPercentage, setArbPercentage] = useState(() => {
    return JSON.parse(localStorage.getItem('arb') || 0);
  });

  useEffect(() => {
    const fetchData = async () => {
      const responce = await getData();
      setDataList(responce.data);
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = event => {
    setArbPercentage(event.target.value);
    localStorage.setItem('arb', JSON.stringify(event.target.value));
  };

  const setupRange = [0, 20, 0.1, 'arbpercentage'];
  const { date, sortData } = dataList;

  const updateTime = date
    ? new Date(date).toLocaleDateString() +
      ' / ' +
      new Date(date).toLocaleTimeString()
    : '-- / -- / --';
  return (
    <ExtraWrapper>
      <Wrapper>
        <InfoWrapper>
          <TimeWrapper>
            <Time>Last data update:</Time>
            <Time>{updateTime}</Time>
          </TimeWrapper>
          <PercentageWrapper>
            <PercentageText>
              Minimum arbitrage level: <Percentage>{arbPercentage}</Percentage>%
            </PercentageText>
            <RangeInput
              onChange={handleChange}
              value={arbPercentage}
              setupRange={setupRange}
            />
          </PercentageWrapper>
        </InfoWrapper>
        <List>
          {sortData?.map(el => {
            const key = el[0];
            const arbitrageValue = el[1];

            return (
              <TraidingPairItem
                key={key}
                data={el}
                arbitrageValue={arbitrageValue}
                arbPercentage={arbPercentage}
              />
            );
          })}
        </List>
      </Wrapper>
    </ExtraWrapper>
  );
}
