import React, { FC } from 'react';
import c from '../../../styles/common.module.css';
import { Helmet } from 'react-helmet-async';
import AboutCard from '../about-card';

const AboutScreen: FC = () => (
  <div className={c.fluidContainer}>
    <Helmet>
      <title>О проекте</title>
    </Helmet>
    <AboutCard />
  </div>
);

export default AboutScreen;
