import React, { useState } from 'react';
import './Notfound.css';
import { Helmet } from "react-helmet";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Notfound = () => {
  const { t } = useTranslation();
  return (
          <div>
            <Helmet>
                <title>Notfound</title>
            </Helmet>
            <h1>404 - Not Found</h1>
          </div>
  );
}
export default Notfound;