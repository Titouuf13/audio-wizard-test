import React from 'react';
import './App.css';
import TopNav from "./NavBars/TopNav";
import SideBarLeft from "./NavBars/SideBar";
import MainApp from './MainApp/MainApp';

function App() {
  
  return (
    <div className="App">
      <TopNav/>
      <SideBarLeft/>
      <MainApp/>
    </div>
  );
}

export default App;
