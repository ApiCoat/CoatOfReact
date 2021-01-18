import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Company.scss';

const Company = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Company.0')}</title>
            </Helmet>
            <h1>{t('Company.1')}</h1>
          </div>
  );
}
export default Company;