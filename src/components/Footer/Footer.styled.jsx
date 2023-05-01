import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-top: 30px;
  flex-shrink: 0;
  text-align: center;
  padding: 10px;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(117, 104, 77, 0.81) 308.27%
  );
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
  row-gap: 20px;
`;
export const ContactsText = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: #f85b12;
`;

export const TextTitle = styled.p`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: #ec9166;
`;

export const Text = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  color: #ec9166;
`;

export const FooterText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #f85b12;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  border: 1px dotted #dba68d;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;

  color: #f85b12;
  font-size: 16px;
  font-weight: 600;
`;

export const IconWrapper = styled.div`
  padding: 5px;
`;
