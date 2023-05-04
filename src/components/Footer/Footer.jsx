import {
  StyledFooter,
  FooterText,
  FooterContacts,
  Wrapper,
  IconWrapper,
  Link,
  ContactsText,
  TextTitle,
  Text,
  TextWrapper,
} from './Footer.styled';
import Container from 'components/Container';

import { IoMdMail } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <TextWrapper>
          <TextTitle>General Terms and Conditions:</TextTitle>
          <Text>
            1. The CMA application (Crypto Markets Arbitrage) was created to
            find arbitrage cases on spot trading of well-known (and not so)
            cryptocurrency exchanges.
          </Text>
          <Text>
            2. The user of the website bears full responsibility for his actions
            and transactions on the exchanges. He performs all his operations at
            his own peril and risk.
          </Text>
          <Text>
            3. All information is provided from the exchanges as quickly and
            accurately as possible from the point of view of the API
            capabilities provided by the exchanges and the available
            functionality and capabilities of this application.
          </Text>
          <Text>
            4. We strongly recommend that you independently check all possible
            information on the exchanges before each transaction: the current
            price, the size of the order, and especially information about the
            transaction networks (their presence on both exchanges of the
            arbitrage pair, the amount of commissions, the current status of the
            network, additional conditions from the network or the exchange
            etc.).
          </Text>
        </TextWrapper>

        <FooterContacts>
          <ContactsText>Contacts:</ContactsText>
          <Wrapper>
            <Link href="https://t.me/AH400796" aria-label="telegram">
              <IconWrapper>
                <FaTelegram size={20} color={'#f85b12'} />
              </IconWrapper>
              Telegram
            </Link>
            <Link href="mailto:a.hokhman@gmail.com" aria-label="email">
              <IconWrapper>
                <IoMdMail size={20} color={'#f85b12'} />
              </IconWrapper>
              a.hokhman@gmail.com
            </Link>
          </Wrapper>
          <FooterText>
            © 2023. Created by Andrii Hokhman. All rights reserved.
          </FooterText>
        </FooterContacts>
      </Container>
    </StyledFooter>
  );
}
