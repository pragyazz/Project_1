import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => {

return (
	<div style={{border: 'none' ,backgroundcolor: 'secondary',padding: '15px 32px',textalign:'center', textdecoration: 'none',display: 'inline-block',fontsize: '16px',margin:'4px 2px',cursor : 'pointer'}}>
	<Button variant="contained" color= "primary">Home</Button>
	<Button variant="contained" color= "primary">Market</Button>
	<Button variant="contained" color="primary">News</Button>
	<Button variant="contained" color="primary"href="https://groww.in/mutual-funds">Mutual funds</Button>
	<Button variant="contained" color="primary"href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-stocks-that-hit-52-week-lows-on-nse-in-todays-trade/articleshow/93478401.cms">Economics Times</Button>
	</div>



);
}

export default App;
