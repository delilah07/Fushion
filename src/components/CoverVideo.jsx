import React from 'react';
import { VideoContainer, DarkOverlay, Title } from './CoverVideo.styles';
import MainVideo from '../assets/1154850-hd_1920_1080_24fps.mp4';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 3,
      when: 'beforeChildren',

      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <>
      <VideoContainer data-scroll>
        <DarkOverlay />
        <Title variants={containerVariants} initial="hidden" animate="show">
          <h1>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.16"
              data-scroll-speed="4"
            >
              F
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.14"
              data-scroll-speed="4"
            >
              u
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.12"
              data-scroll-speed="4"
            >
              s
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.1"
              data-scroll-speed="4"
            >
              h
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.08"
              data-scroll-speed="4"
            >
              i
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              o
            </motion.span>
            <motion.span
              variants={itemVariants}
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="4"
            >
              n
            </motion.span>
          </h1>
          <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
            Fashion and style are forever
          </h2>
        </Title>
        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
    </>
  );
};

export default CoverVideo;
