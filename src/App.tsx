import React from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Map />
    </Layout>
  );
}

export default App;
