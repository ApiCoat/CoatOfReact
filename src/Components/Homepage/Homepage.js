import React, { useState } from 'react';
import './Homepage.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <h1>{t('Homepage.1')}</h1>
          </div>
  );
}
export default Homepage;