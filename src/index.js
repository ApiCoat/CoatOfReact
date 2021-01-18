import App from './App';
import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import './index.css';
import './i18next';

ReactDOM.render(
    <Suspense fallback={(<div>Loading the page</div>)}>
        <App /> 
    </Suspense>, 
    document.getElementById('root')
);
