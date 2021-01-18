import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Homepage.scss';

const Homepage = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Homepage.0')}</title>
            </Helmet>
            <h1>{t('Homepage.1')}</h1>
          </div>
  );
}
export default Homepage;