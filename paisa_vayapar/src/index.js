
import ReactDOM from "react-dom";
import React from "react";


import ContentComponent from './components/ContentComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
ReactDOM.render((
  <>
    
    <HeaderComponent></HeaderComponent><br/><hr/>
    <ContentComponent></ContentComponent><br/><hr/>
    <FooterComponent></FooterComponent>
  </>
)
,document.getElementById("root"));

