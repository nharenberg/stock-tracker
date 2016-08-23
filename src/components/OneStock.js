import React, { Component } from 'react';

export default class OneStock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{ Name, Symbol, LastPrice, MarketCap, High, Low, Open } = this.props
    return (
      <div>
        <h1 className="text-center">Stock Tracker!</h1>
        <h2>  Name: { Name }</h2>
        <h3>  Symbol: { Symbol }</h3>
        <h4>  LastPrice: { LastPrice }</h4>
        <h4>  MarketCap: { MarketCap }</h4>
        <h4>  High: { High }</h4>
        <h4>  Low: { Low }</h4>
        <h4>  Open: { Open }</h4>
      </div>
    )    
  }
}