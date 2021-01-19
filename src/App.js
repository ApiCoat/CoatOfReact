import React from "react";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CookieConsent from "react-cookie-consent";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import Technology from './Components/Technology/Technology';
import Resources from './Components/Resources/Resources';
import Company from './Components/Company/Company';
import Notfound from './Components/Notfound/Notfound';
import './App.css';

function App() {
  const { t } = useTranslation();
  return (
    <div>
    <Router>
      <Grid container spacing={0}>
        
        <Grid item xs={12} style={{ paddingRight: 0, paddingBottom: 0 }}>
          <Navbar />
        </Grid>
        <Grid item xs={12} style={{ paddingRight: 0, paddingTop: 79 }}>
          <Switch>
                <Route exact path="/" component={ Homepage } />
                <Route path="/solutions" component={ Solutions } />
                <Route path="/products" component={ Products } />
                <Route path="/technology" component={ Technology } />
                <Route path="/resources" component={ Resources } />
                <Route path="/company" component={ Company } />
                <Route component={ Notfound } />
          </Switch>
        </Grid>
        <Grid item xs={12} style={{ paddingRight: 0, paddingBottom: 0 }}>
          <Footer />
          <CookieConsent>{t("CookiesText.0")}</CookieConsent>
        </Grid>
      </Grid>
    </Router>
  </div>
  );
}

export default App;
