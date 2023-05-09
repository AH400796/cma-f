import { io } from 'socket.io-client';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../App/App';

// import { getData } from '../../services/API';
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

const URL = `https://cma-p5y3.onrender.com/`;
// http://localhost:3010;

export default function ArbCont() {
  const [dataList, setDataList] = useState([]);
  const [arbPercentage, setArbPercentage] = useState(() => {
    return JSON.parse(localStorage.getItem('arb') || 0);
  });
  const { token } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responce = await getData();
  //     setDataList(responce.data);
  //   };

  //   fetchData();
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const socket = io(URL);
    socket.on('updatedData', data => {
      setDataList(data);
    });

    return () => socket.disconnect();
  }, []);

  const maxValue = token ? 10000 : 0.5;
  const minValue = token ? arbPercentage : 0;

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
            {!token && (
              <PercentageText>
                Maximum arbitrage level:
                <Percentage> 0.5</Percentage>%
              </PercentageText>
            )}

            {token && (
              <PercentageText>
                Minimum arbitrage level:
                <Percentage> {arbPercentage}</Percentage>%
              </PercentageText>
            )}

            <RangeInput
              onChange={handleChange}
              value={minValue}
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
                arbPercentage={minValue}
                maxValue={maxValue}
              />
            );
          })}
        </List>
      </Wrapper>
    </ExtraWrapper>
  );
}
