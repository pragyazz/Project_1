import ReactDOM from "react-dom";
import React from "react";


import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import App from './components/HeadElemnt'
import StockComponent from './components/ContentComponent'
import Sign_in from './components/singnin'
ReactDOM.render((

  <>
    <App></App>
    <Sign_in></Sign_in><br/>
    <HeaderComponent></HeaderComponent><br/>
    <StockComponent></StockComponent>
    
    <FooterComponent></FooterComponent>
    
  </>
)
,document.getElementById("root"));

