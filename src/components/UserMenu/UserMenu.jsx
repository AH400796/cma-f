import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { AuthContext } from '../App/App';
import { loginOut } from '../../services/API';

import {
  MenuWrapper,
  UserIconWrapper,
  LogoutButton,
  UserWrapper,
  UserSetting,
  UserEmail,
  UserProfile,
  PreferencesButton,
  MenuHolder,
  Backdrop,
} from './UserMenu.styled';

export default function UserMenu({ userEmail }) {
  const [showMenu, setShowMenu] = useState(false);
  const { setIsLoggedIn, setToken, setUserEmail, isRefreshing } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyEscape = event => {
      if (event.code === 'Escape') {
        setShowMenu(false);
      }
    };
    if (showMenu === true) {
      window.addEventListener('keydown', handleKeyEscape);
    } else {
      window.removeEventListener('keydown', handleKeyEscape);
    }
  }, [showMenu]);

  const handleLogOut = async () => {
    try {
      const response = await loginOut();
      if (response.status === 200) {
        setIsLoggedIn(false);
        setToken(null);
        setUserEmail('');
        localStorage.removeItem('loggedin');
        localStorage.removeItem('token');
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

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setShowMenu(false);
    }
  };

  return (
    <MenuWrapper>
      <UserWrapper>
        {!isRefreshing && (
          <UserSetting type="button" onClick={handleMenu}>
            <UserIconWrapper>
              <FaUserAlt color={'#c9510c'} size={'25'} />
            </UserIconWrapper>
          </UserSetting>
        )}
        <Backdrop onClick={handleBackdropClick} showMenu={showMenu}>
          <MenuHolder>
            <UserProfile showMenu={showMenu}>
              <UserEmail>{userEmail || '********'}</UserEmail>
              <PreferencesButton type="button">Preferences</PreferencesButton>
              <LogoutButton type="button" onClick={handleLogOut}>
                Log out
              </LogoutButton>
            </UserProfile>
          </MenuHolder>
        </Backdrop>
      </UserWrapper>
    </MenuWrapper>
  );
}
