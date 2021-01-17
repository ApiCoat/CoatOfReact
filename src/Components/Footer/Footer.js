import React, { Component } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <div>
            <div className="App">
                <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
                <button onClick={()=>handleClick('en')} >
                    English
                </button>
                <button onClick={()=>handleClick('de')} >
                    German
                </button>
                <button onClick={()=>handleClick('nl')} >
                    Dutch
                </button>
                </nav>
            </div>
        </div>
    )
}

export default Footer
