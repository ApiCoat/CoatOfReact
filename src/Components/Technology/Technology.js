import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Technology.scss';

const Technology = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Technology.0')}</title>
            </Helmet>
            <h1>{t('Technology.1')}</h1>
          </div>
  );
}
export default Technology;