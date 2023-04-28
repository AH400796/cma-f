import { useState, useEffect } from 'react';
import { getData } from '../../services/API';
import TraidingPairItem from 'components/TraidingPairItem';
import RangeInput from 'components/RangeInput';
import {
  List,
  Wrapper,
  Time,
  InfoWrapper,
  Percentage,
  PercentageWrapper,
  PercentageText,
} from './ArbCont.styled';

export default function ArbCont() {
  const [dataList, setDataList] = useState([]);
  const [arbPercentage, setArbPercentage] = useState(0);

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
  };

  const setupRange = [0, 20, 0.1, 'arbpercentage'];
  const { date, sortData } = dataList;

  const updateTime = date
    ? new Date(date).toLocaleDateString() +
      ' / ' +
      new Date(date).toLocaleTimeString()
    : '-- / -- / --';
  return (
    <Wrapper>
      <InfoWrapper>
        <Time>Last update: {updateTime}</Time>
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
            arbitrageValue > arbPercentage && (
              <TraidingPairItem key={key} data={el} />
            )
          );
        })}
      </List>
    </Wrapper>
  );
}