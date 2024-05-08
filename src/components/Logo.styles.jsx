import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.text};
  z-index: 5;

  svg {
    width: 3rem;
    border-radius: 50%;
    height: auto;
    border: 0.15rem solid ${(props) => props.theme.text};
    padding: 0.5rem;

    g {
      fill: ${(props) => props.theme.text};
    }
  }
`;

export const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  line-height: ${(props) => props.theme.fontlg};
  padding-bottom: 0.5rem;
`;
