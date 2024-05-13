import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  width: 80vw;
  margin: 0 auto;
  overflow: visible;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Kaushan Script';
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

export const Content = styled.div`
  display: flex;
`;

export const Left = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  width: 50%;
  position: relative;
  z-index: 5;
  margin: 15% 5% 0 0;
`;

export const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 85%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;
