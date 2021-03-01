import React, { Component } from 'react';
import './GetQuote.css'
export default class GetQuote extends Component {
    constructor(props){
        super(props)
    }
    render() {

        const {getQuote, quote}=this.props


        return (
            <div className="quote">
<img src={quote.image} alt=" quoteImg"/>
<p>{quote.character}</p>
<p>{quote.quote}</p>
<button type="button" onClick={getQuote}>Get quote</button>
            </div>
        )
    }
}
