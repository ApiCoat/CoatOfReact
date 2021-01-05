import React from 'react';
import './Notfound.css';
import { Helmet } from "react-helmet";

const Notfound = () => {
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