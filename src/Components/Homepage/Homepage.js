import React, { useState } from 'react';
import './Homepage.css';
import { Helmet } from "react-helmet";

import { I18Provider, LOCALES } from '../../i18n';
import t from '../../i18n/translate';

const Homepage = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
        <I18Provider locale={ locale }>
          <div>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <h1>Homepage</h1>
          </div>
        </I18Provider>
  );
}
export default Homepage;