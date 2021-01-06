import React, { useState } from 'react';
import './Technology.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Technology = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Technology</title>
            </Helmet>
            <h1>Technology</h1>
          </div>
        </I18Provider>
  );
}
export default Technology;