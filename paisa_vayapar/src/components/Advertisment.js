import React from 'react';
import { Advertisement } from 'semantic-ui-react';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href ="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Adverti = () => (
<div>

	<Advertisement unit='rectangle' >
	<img src='https://thumb10.shutterstock.com/display_pic_with_logo/11994/599487233/stock-vector-stock-market-word-cloud-collage-business-concept-background-599487233.jpg' />
	</Advertisement>	
</div>
)

export default Adverti

