import SellBlock from 'components/SellBlock';
import BuyBlock from 'components/BuyBlock';
import {
  ListItem,
  PairName,
  BlockWrapper,
  Arbitrage,
  ArbWrapper,
} from './TraidingPairItem.styled';

export default function TraidingPairsItem({ data }) {
  const name = data[0];
  const arbitrageValue = data[1];
  const { market: buyMarket, url: buyUrl, buyPrice, buyQty, fee } = data[2];
  const { market: sellMarket, url: sellUrl, sellPrice, sellQty } = data[3];
  return (
    <ListItem>
      <ArbWrapper>
        <PairName>{name}</PairName>
        <Arbitrage>{arbitrageValue}%</Arbitrage>
      </ArbWrapper>

      <BlockWrapper>
        <BuyBlock
          url={buyUrl}
          marketplace={buyMarket}
          buyPrice={buyPrice}
          buyQuantity={buyQty}
          fee={fee}
        />
        <SellBlock
          url={sellUrl}
          marketplace={sellMarket}
          sellPrice={sellPrice}
          sellQuantity={sellQty}
        />
      </BlockWrapper>
    </ListItem>
  );
}
