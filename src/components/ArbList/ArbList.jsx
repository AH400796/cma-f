import { useState, useEffect } from 'react';
import { getData } from '../../services/API';
import TraidingPairItem from 'components/TraidingPairItem';
import { List, Wrapper, Time } from './ArbList.styled';

export default function ArbList() {
  const [dataList, setDataList] = useState([]);
  const [arbPercentage, setArbPercentage] = useState(1);

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
  const { updateTime = '--/--/--', sortData } = dataList;

  return (
    <Wrapper>
      <Time>Last update: {updateTime}</Time>
      <List>
        {sortData?.map(el => {
          const key = el[0];
          const arbValue = el[1];
          return (
            <>
              {arbValue > arbPercentage && (
                <TraidingPairItem key={key} data={el} />
              )}
            </>
          );
        })}
      </List>
    </Wrapper>
  );
}
