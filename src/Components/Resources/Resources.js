import React, { useState } from 'react';
import './Resources.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Resources = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Resources</title>
            </Helmet>
            <h1>Resources</h1>
          </div>
        </I18Provider>
  );
}
export default Resources;