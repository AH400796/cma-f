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
  const [arbPercentage, setArbPercentage] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await getData();
      setDataList(responce.data);
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
      console.log(1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const { updateTime = '-- / -- / --', sortData } = dataList;

  const handleChange = event => {
    setArbPercentage(event.target.value);
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <Time>Last update: {updateTime}</Time>
        <PercentageWrapper>
          <PercentageText>
            Minimum arbitrage level: <Percentage>{arbPercentage}</Percentage>%
          </PercentageText>
          <RangeInput onChange={handleChange} value={arbPercentage} />
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
