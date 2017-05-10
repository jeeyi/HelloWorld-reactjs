import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import Component from './Component';

window.onload = () => {
  ReactDOM.render(
    <IntlProvider locale='en'>
        <Component />
    </IntlProvider>,
    document.querySelector('#container')
  );
};
