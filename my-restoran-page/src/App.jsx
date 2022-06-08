import React from "react";
import Banner from './components/banner';
import MainPage from './components/mainPage';
import Menu from './components/menu';
import Avokado from './components/avokado';
import './App.css';



function App() {
  return (
    <div className="App">
      <Banner />
      <MainPage />
      <Menu />
      <Avokado />
    </div>
  );
}

export default App;
