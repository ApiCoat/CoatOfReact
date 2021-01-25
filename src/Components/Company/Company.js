import React from 'react';
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import TableList from './TableList'
import './Company.scss';

const Company = () => {
  const { t } = useTranslation();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('apicoat', 'apicoat', e.target, '') // User ID will be here
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
}
  return (
          <div>
            <Helmet>
                <title>{t('Company.0')}</title>
            </Helmet>
            <h1>{t('Company.1')}</h1>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder={t("Contact.1")} name="Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder={t("Contact.2")} name="Country" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder={t("Contact.3")} name="Brand"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder={t("Contact.4")} name="Model"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder={t("Contact.5")} name="Email"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto" style={{ marginBottom: "60px" }}>
                            <input type="submit" className="btn btn-info" value={t("Contact.6")} name="contactRequest"/>
                        </div>
                    </div>
                </form>
            </div>
            <TableList />
          </div>
  );
}
export default Company;