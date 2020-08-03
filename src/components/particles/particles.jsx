import React from 'react';
import classNames from 'classnames';
import ParticlesJS from 'react-tsparticles';

import './particles.scss';

const Particles = () => {
  return (
    <ParticlesJS
      className={classNames('particles')}
      params={{
        particles: {
          number: {
            value: 30,
            max: -1,
            density: {
              enable: false,
              value_area: 1200,
            },
          },
          color: {
            value: ['#FFD15C', '#FF4C60', '#44D7B6', '#6C6CE5'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
      }}
    />
  );
};

export default Particles;
