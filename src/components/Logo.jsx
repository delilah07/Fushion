import { Link } from 'react-router-dom';
import { Container, Text } from './Logo.styles';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="none"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              d="M2833 5113 c-27 -5 -80 -64 -89 -98 -7 -30 28 -143 64 -205 55 -95 158 -183 261 -224 24 -9 120 -30 215 -46 289 -50 437 -82 470 -105 41 -27 68 -82 60 -123 -8 -39 -55 -88 -93 -95 -16 -4 -100 8 -192 27 -90 19 -205 40 -256 47 -116 16 -130 8 -181 -99 -87 -187 -219 -322 -395 -406 -111 -52 -175 -65 -376 -77 -129 -7 -193 -15 -215 -26 -83 -41 -135 -134 -122 -216 4 -23 32 -90 62 -149 108 -213 150 -397 141 -613 -10 -226 -45 -335 -212 -661 -140 -274 -182 -379 -219 -544 -36 -165 -48 -307 -44 -537 3 -197 3 -202 27 -227 14 -14 41 -30 60 -36 20 -6 169 -10 339 -10 l302 0 0 -292 c0 -333 3 -347 74 -382 36 -17 43 -18 79 -5 22 8 50 27 61 42 20 27 21 42 24 332 l3 304 692 3 c751 3 716 1 751 59 13 22 16 60 16 222 0 257 -17 385 -78 577 -40 128 -156 353 -292 565 -67 105 -137 219 -155 255 -111 218 -122 486 -31 719 32 81 47 106 232 398 l154 242 45 286 c25 157 45 315 45 350 0 121 -66 234 -164 283 -56 28 -300 84 -519 118 -89 14 -173 28 -187 31 -81 19 -166 97 -194 179 -10 27 -23 60 -29 73 -22 45 -82 73 -134 64z"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              d="M2176 5079 c-24 -21 -40 -47 -51 -84 -8 -29 -30 -73 -48 -97 -53 -70 -107 -96 -253 -124 -563 -108 -565 -109 -595 -158 -38 -62 -11 -144 57 -172 32 -13 43 -13 98 0 33 8 160 34 281 56 403 74 443 88 556 200 101 99 168 259 139 329 -34 82 -121 106 -184 50z"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M1269 3793 c-29 -18 -59 -71 -59 -104 0 -28 12 -49 151 -270 203 -324 241 -423 242 -639 1 -134 -13 -217 -56 -325 -27 -67 -65 -133 -222 -380 -122 -193 -228 -402 -268 -526 -60 -191 -77 -319 -77 -576 0 -210 6 -237 56 -264 32 -17 99 -15 128 5 48 31 53 57 59 281 10 415 63 567 357 1029 73 115 148 241 166 281 64 138 104 318 104 463 0 163 -53 377 -129 517 -84 156 -306 497 -333 511 -36 19 -87 17 -119 -3z"
            />
          </g>
        </motion.svg>
      </Link>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Fushion studio
      </Text>
    </Container>
  );
};

export default Logo;
