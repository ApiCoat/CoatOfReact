import React, { useState } from 'react';
import './Notfound.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Notfound = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Notfound</title>
            </Helmet>
            <h1>404 - Not Found</h1>
          </div>
        </I18Provider>
  );
}
export default Notfound;