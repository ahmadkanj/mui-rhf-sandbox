import 'react-i18next';
import common from './assets/locales/en/common.json';
import forms from './assets/locales/en/forms.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      forms: typeof forms;
    };
  }
}
