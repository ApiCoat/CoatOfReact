import React, { useState } from 'react';
import './Company.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Company = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Company</title>
            </Helmet>
            <h1>Company</h1>
          </div>
        </I18Provider>
  );
}
export default Company;