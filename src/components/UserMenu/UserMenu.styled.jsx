import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div`
  position: relative;
`;

export const MenuHolder = styled.div`
  position: absolute;
  top: 150%;
  right: -20px;
  width: 400px;
  height: 600px;
  overflow: hidden;
`;

export const UserProfile = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;

  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgb(69, 52, 50) 50.89%,
    rgb(117, 104, 77) 308.27%
  );
  box-shadow: 2px 2px 5px 0px #070707;
  border-radius: 20px 0 20px 0;
  transition: transform 0.3s ease;
  transform: ${props =>
    props.showMenu ? 'translateY(0)' : 'translateY(-110%)'};
`;

export const UserEmail = styled.span`
  width: 100%;
  text-align: right;
  color: #d8a331;

  margin-bottom: 30px;
`;

export const UserSetting = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  padding: 10px;
  background-color: #e7e6e6;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #8cc75c;
  }
`;

export const LogoutButton = styled.button`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  text-decoration: none;
  color: #f85b12;
  background-color: transparent;
  border: none;
  border-top: 1px solid #9c9c9c53;
  cursor: pointer;

  &.active {
    color: #d8a331;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #d8a331;
  }
`;
export const PreferencesButton = styled.button`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  text-decoration: none;
  background-color: transparent;
  color: #f85b12;
  border: none;
  border-top: 1px solid #9c9c9c53;

  cursor: pointer;

  &.active {
    color: #d8a331;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #d8a331;
  }
`;
