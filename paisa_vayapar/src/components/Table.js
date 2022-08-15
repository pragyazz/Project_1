
import React from 'react';
import StockRow from './StockRow'
import './App.css';

function Table(){
    return(
        <div classNAme ="Table">
            <div className ="container">
                <table classNAme="table mt-5">
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <StockRow symbol ="appl"/>
                        <StockRow symbol ="goog"/>
                        <StockRow symbol ="msft"/>
                        <StockRow symbol ="tsla"/>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
