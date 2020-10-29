import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderComponent';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}> {element} </Layout>
);

export const wrapRootElement = ({ element }) => (
  <OrderProvider>{element}</OrderProvider>
);
