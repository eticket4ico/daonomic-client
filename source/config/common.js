// @flow

const sales = {
  development: '0xaee0eb707a23fee852c43b5eb22030a25a729937',
  production: '0x99a09f0d85bc6e95e110348a8522f98443e31c4a',
};

export const realm = '5a55f593fe725c0db41d1f43';
export const sale: string = sales[process.env.API] || sales.production;
export const contactEmail = 'dev@0v1se.com';
export const termsOfServiceURL = 'terms.url';
