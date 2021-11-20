import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Map from "./components/Map/Map";
import { IPContext } from "./contexts/IPContext";
import Layout from "./layout/Layout";

function App() {
  const { loading } = useContext(IPContext);

  return (
    <Layout>
      {loading && <Loading />}
      <Header />
      <Map />
    </Layout>
  );
}

export default App;
