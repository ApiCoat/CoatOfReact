import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Solutions.scss';

const Solutions = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Solutions.0')}</title>
            </Helmet>
            <h1>{t('Solutions.1')}</h1>
          </div>
  );
}
export default Solutions;