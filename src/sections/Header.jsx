import { HeaderContainer, MenuBtn, NavList, MenuItem } from './Header.styles';
import { useState } from 'react';

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <HeaderContainer
        click={click}
        initial={{ y: `-100%` }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <NavList
          drag="y"
          dragConstraints={{ top: 0, bottom: 70 }}
          dragElastic={0.05}
          dragSnapToOrigin
        >
          <ul>
            <MenuItem
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              Home
            </MenuItem>
            <MenuItem
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              about
            </MenuItem>
            <MenuItem
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              shop
            </MenuItem>
            <MenuItem
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9, Y: 0 }}
            >
              new arrival
            </MenuItem>
          </ul>
        </NavList>
      </HeaderContainer>
    </>
  );
};

export default Header;
