import React from "react";
import "./App.css";
import { Footer, Header, RatpTable } from "./components";


export default function App() {
  return (
    <div className="App">
      <Header/>
      <RatpTable/>
      <Footer/>
    </div>
  );
}
