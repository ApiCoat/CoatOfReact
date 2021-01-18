import { Helmet } from "react-helmet";
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Products.scss';

const Products = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>{t('Products.0')}</title>
            </Helmet>
            <h1>{t('Products.1')}</h1>
          </div>
  );
}
export default Products;