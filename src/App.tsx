import React from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import IPContextProvider from './contexts/IPContext';
import Layout from './layout/Layout';

function App() {
  return (
    <IPContextProvider>
      <Layout>
        <Header />
        <Map />
      </Layout>
    </IPContextProvider>
  );
}

export default App;
