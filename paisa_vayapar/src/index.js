import ReactDOM from "react-dom";
import React from "react";


import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import App from './components/HeadElemnt'
import StockComponent from './components/ContentComponent'
import Table from './components/Table'

ReactDOM.render((

  <>
    <App></App>
    <HeaderComponent></HeaderComponent><br/>
    <StockComponent></StockComponent>
    <Table></Table>
    <FooterComponent></FooterComponent>
    
  </>
)
,document.getElementById("root"));
