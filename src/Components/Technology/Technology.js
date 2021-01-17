import React, { useState } from 'react';
import './Technology.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Technology = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Technology</title>
            </Helmet>
            <h1>{t('Technology.1')}</h1>
          </div>
  );
}
export default Technology;