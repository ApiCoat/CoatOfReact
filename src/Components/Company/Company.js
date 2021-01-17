import React, { useState } from 'react';
import './Company.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Company</title>
            </Helmet>
            <h1>{t('Company.1')}</h1>
          </div>
  );
}
export default Company;