import { Section, Title, Content, Left, Right } from './About.styles';

import img1 from '../assets/pexels-eduardo-romero-817034-1750776.jpg';
import img2 from '../assets/pexels-eunhyuk-ahn-1478827-2907034.jpg';
import img3 from '../assets/pexels-frendsmans-1926769.jpg';

const About = () => {
  return (
    <>
      <Section className="fixed-target">
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          About Us
        </Title>
        <Content>
          <Left
            data-scroll
            data-scroll-sticky
            data-scroll-target=".fixed-target"
          >
            We&apos;re fashion studio based in california. We create unique
            designs that will blow your mind. We also design unique jewellary
            pieces. Fashion is an ART that can not be grasped by everyone.
            <br />
            <br />
            We are very dedicated to making our products. We offer unique and
            creative products to a wide range of people. We have a variety of
            styles, but for most people, all of the options are in the box. We
            specialize in making things that make you happy.
            <br />
            <br />
            We strive to build on our vision. As a fashion label, we do our best
            to create amazing experiences for all people. We are always looking
            to make something that is easy for everyone.
          </Left>
          <Right>
            <img src={img1} className="big-img" alt="fashion woman in red" />
            <img
              src={img3}
              data-scroll
              data-scroll-speed="5"
              className="small-img-1"
              alt="fashion men"
            />
            <img
              src={img2}
              data-scroll
              data-scroll-speed="-2"
              className="small-img-2"
              alt="fashion woman"
            />
          </Right>
        </Content>
      </Section>
    </>
  );
};

export default About;
