import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRGBA}, 0.5)`};
`;

export const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};

  h1 {
    font-family: 'Kaushan Script';
    font-size: ${(props) => props.theme.fontBig};
    line-height: 1;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    line-height: 1;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 500;
  }
`;
