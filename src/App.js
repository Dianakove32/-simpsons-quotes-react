import React, { Component } from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm  from "./components/QuoteForm";
import axios from 'axios';
import GetQuote from './components/GetQuote'
// import { getQueriesForElement, render } from '@testing-library/react';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      quote: 'Click BTN'
    }
    this.getQuote=this.getQuote.bind(this)
  }
  getQuote(){

     axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
     .then(res=> res.data )
     .then(data=> {
this.setState({
  quote:data[0]
})
     })
  }

  render() {
const {quote}=this.state
    return (

            <div className="App">
      <Navbar />
      <QuoteForm />
      <GetQuote quote={quote} getQuote={this.getQuote}/>
      <QuoteList   />
    </div>

    )
  }
}


