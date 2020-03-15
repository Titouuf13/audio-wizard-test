import React from 'react';
import './App.css';
import TopNav from "./TopNav";
import SideBarLeft from "./SideBar";
import MainApp from './MainApp';

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
