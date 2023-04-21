import { useState, useEffect } from 'react';
import { getData } from '../../services/API';
import TraidingPairItem from 'components/TraidingPairItem';
import { List } from './ArbList.styled';

export default function ArbList() {
  const [dataList, setDataList] = useState([]);

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
  const sortData = dataList.sort((a, b) => b[1] - a[1]);
  return (
    <>
      <List>
        {sortData?.map(el => {
          const key = el[0];
          const arbValue = el[1];
          return (
            <>{arbValue > 0 && <TraidingPairItem key={key} data={el} />}</>
          );
        })}
      </List>
    </>
  );
}
