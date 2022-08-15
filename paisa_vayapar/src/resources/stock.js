import { useCallback } from 'react';
import { iex }from '../config/iex';

const stock ={

    latestPrice : (symbol , callback) => {
        const url =`${iex.base_url}/stock/${this.props.symbol}/intraday-prices?chartLast=1&token=${iex.api_token}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => useCallback(data))

        

    }

}

 
export default stock;
