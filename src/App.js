import React from 'react';
import Layout from './Components/Layout/Layout';
import Featured from "./Components/site/Featured/Featured";
import './App.css';

function App() {
  return (
    <div>
      <Layout>
          <Featured name="josé Rainha do Cabaré"/>
      </Layout>
    </div>
  );
}

export default App;
