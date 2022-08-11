import React from 'react';
import { Advertisement } from 'semantic-ui-react';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href ="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Adverti = () => (
<div>

	<Advertisement unit='medium rectangle'>
	<img src='https://i.ytimg.com/vi/0CtEpG4QeuE/maxresdefault.jpg' />
	</Advertisement>	
</div>
)

export default Adverti