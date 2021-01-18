import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Notfound.scss';

const Notfound = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t("NotFound.0")}</title>
            </Helmet>
            <h1>{t("NotFound.0")}</h1>
          </div>
  );
}
export default Notfound;