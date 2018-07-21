import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BROTHER's NOTARY</h1>
          <h2 className="App-phone">650-452-5211</h2>
        </header>
        <p className="App-intro">
          <div>
            Welcome to the Brother's Notary service.
            I am a certified Notary Public and a Notary Signing Agent for Loan and Real Estate documents.
          </div><br /><br />
          <div>
            General Notarization is $5 per signature per page. I provide low cost, professional notary service in the Fremont and nearby area.<br/>
            I am also available via mobile for notary services to individuals, small businesses and large corporations.
            Service provided by appointment only. <br />Please call at 650-452-5211.<br />
          </div><br/><br />
          <div>
          Don't forget to bring a valid photo ID - Driver's Licence or passport, etc. <br />
          Available everyday from 9am to 9pm.
          </div><br /><br />
          <div>
          Our services include and are not limited to notarizing the affidavit of support, power of attorny, traffic school exam, <br />
          immigration documents, OCI Card, legal documents, photo copy attest, certified translations,<br />
          car/vehicle transfers, notary for Indian passport for minors, depositions, etc.
          </div><br /><br />
          <br />
          <h4>
          As part of service, I am providing first 10 notary service free of cost.
          </h4>
        </p>
        <footer className="App-footer">
          <small>Copyright © BROTHER's Notary 2018. All rights reserved.</small>
        </footer>
      </div>
    );
  }
}

export default App;
