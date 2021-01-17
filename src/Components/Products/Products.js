import React, { useState } from 'react';
import './Products.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <h1>{t('Products.1')}</h1>
          </div>
  );
}
export default Products;