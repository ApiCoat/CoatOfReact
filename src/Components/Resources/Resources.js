import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Resources.scss';

const Resources = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Resources.0')}</title>
            </Helmet>
            <h1>{t('Resources.1')}</h1>
          </div>
  );
}
export default Resources;