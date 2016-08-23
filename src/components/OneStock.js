import React, { Component } from 'react';
import TodoStore from "../stores/TodoStore";
import ServerActions from "../actions/ServerActions";
import TodoActions from "../actions/TodoActions";


export default class OneStock extends Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this)
  }

  componentDidMount() {
    // ServerActions.findQuote();
    TodoStore.on('NEW_QUOTE', this.getQuote);
  }

  getQuote(){
    console.log("in getQuote")
    this.setState({
      quote: TodoStore.getOneQuote()
    })
    console.log("this.state:", this.state);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Stock Tracker!</h1>
        <h2>  Name: { this.state.quote.Name }</h2>
        <h3>  Symbol: { this.state.quote.Symbol }</h3>
        <h4>  LastPrice: { this.state.quote.LastPrice }</h4>
        <h4>  MarketCap: { this.state.quote.MarketCap }</h4>
        <h4>  High: { this.state.quote.High }</h4>
        <h4>  Low: { this.state.quote.Low }</h4>
        <h4>  Open: { this.state.quote.Open }</h4>
      </div>
    )    
  }
}