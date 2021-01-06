import React, { useState } from 'react';
import './Solutions.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Solutions = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Solutions</title>
            </Helmet>
            <h1>Solutions</h1>
          </div>
        </I18Provider>
  );
}
export default Solutions;