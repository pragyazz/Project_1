import React, { Component, useCallback } from 'react';
import iex from '../config/iex';
import stock  from '../resources/stock';

class StockRow extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    applyData(data){
        this.setState({
            data: data
               
        })

    }

    componentDidMount(){
        stock.latestPrice(this.props.symbol, this.applyData.bind(this))
        .then((data)=> useCallback(data))
    }

    render(){
        return(
            <tr>
                <td>{this.props.symbol}</td>
                <td>{this.state.data.open}</td>
                <td>{this.state.data.close}</td>
                <td>{this.state.data.volume}</td>
            </tr>
        )

    }


}
export default StockRow;