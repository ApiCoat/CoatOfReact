import React, { useState } from 'react';
import './Products.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Products = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <h1>Products</h1>
          </div>
        </I18Provider>
  );
}
export default Products;