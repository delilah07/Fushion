import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 6;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  transition: top 0.5s ease-in-out;
`;

export const MenuBtn = styled.span`
  background: ${(props) => `rgba(${props.theme.textRGBA}, 0.7)`};
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.theme.navHeight};
  left: 50vw;
  transform: translateX(-50%);
`;

export const NavList = styled(motion.nav)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10rem;
    list-style: none;
  }
`;
export const MenuItem = styled(motion.li)`
  cursor: pointer;
  text-transform: uppercase;
`;
