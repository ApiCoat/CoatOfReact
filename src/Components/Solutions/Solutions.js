import React, { useState } from 'react';
import './Solutions.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Solutions</title>
            </Helmet>
            <h1>{t('Solutions.1')}</h1>
          </div>
  );
}
export default Solutions;