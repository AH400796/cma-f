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

export const Backdrop = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  pointer-events: ${props => (props.showMenu ? 'all' : 'none')};
`;

export const MenuHolder = styled.div`
  position: absolute;
  display: inline-block;
  top: 115px;
  right: 5%;
  padding: 0 5px 5px 0;
  overflow: hidden;
  border-radius: 20px 0 20px 0;
`;

export const UserProfile = styled.div`
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
  margin-bottom: 30px;
  text-align: right;
  font-weight: 600;

  color: #f1e892;
`;

export const UserIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  padding: 15px;
  background-color: #e7e6e6;
  &:hover,
  &:focus {
    background-color: #e2daaa;
  }
`;

export const UserSetting = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;

  padding: 20px;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  text-decoration: none;
  color: #ff7b3e;
  background-color: transparent;
  border: none;
  border-top: 1px solid #9c9c9c53;
  cursor: pointer;

  &.active {
    color: #f1e892;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #f1e892;
  }
`;
export const PreferencesButton = styled.button`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  text-decoration: none;
  background-color: transparent;
  color: #ff7b3e;
  border: none;
  border-top: 1px solid #9c9c9c53;

  cursor: pointer;

  &.active {
    color: #f1e892;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #f1e892;
  }
`;
