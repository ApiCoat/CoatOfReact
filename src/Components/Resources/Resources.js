import React, { useState } from 'react';
import './Resources.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Resources</title>
            </Helmet>
            <h1>{t('Resources.1')}</h1>
          </div>
  );
}
export default Resources;