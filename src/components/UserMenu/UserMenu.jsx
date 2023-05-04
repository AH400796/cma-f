import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { AuthContext } from '../App/App';
import { loginOut } from '../../services/API';
import {
  MenuWrapper,
  LogoutButton,
  UserWrapper,
  UserSetting,
  UserEmail,
  UserProfile,
  PreferencesButton,
  MenuHolder,
} from './UserMenu.styled';

export default function UserMenu({ userEmail }) {
  const [showMenu, setShowMenu] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await loginOut();
      if (response.status === 200) {
        setIsLoggedIn(false);
        navigate('/', { replace: true });
        setShowMenu(prevState => !prevState);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <MenuWrapper>
      <UserWrapper>
        <UserSetting type="button" onClick={handleMenu}>
          <FaUserAlt color={'#c9510c'} size={'25'} />
        </UserSetting>
        <MenuHolder>
          <UserProfile showMenu={showMenu}>
            <UserEmail>{userEmail}</UserEmail>
            <PreferencesButton type="button">Preferences</PreferencesButton>
            <LogoutButton type="button" onClick={handleLogOut}>
              Log out
            </LogoutButton>
          </UserProfile>
        </MenuHolder>
      </UserWrapper>
    </MenuWrapper>
  );
}
