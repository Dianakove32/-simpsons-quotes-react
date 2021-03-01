import React from "react"
import './QuoteCard.css'
const MAX_LENGTH = 10;

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
this.state={
    character: ''
}
this.handleSubmit= this.handleSubmit.bind(this)
this.handleOnchange = this.handleOnchange.bind(this)
    }
    handleSubmit(event){
    alert('A name was submitted: '+ this.state.character)
    event.preventDefault()
}
handleOnchange(event){
    let value1=event.target.value
    if(value1.length<= MAX_LENGTH){

      this.setState({character: value1})
    }

}

   render(){
       const maximumReached=this.state.character<=MAX_LENGTH
       const numRemaining = MAX_LENGTH - this.state.character.length;

       return(
           <form className = 'QuoteForm'
           onSubmit ={this.handleSubmit}>
<label htmlFor = 'character'>Character:</label>
<input
 className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
id='name'
name = 'character'
type = 'text'
value = {this.state.character}
onChange={this.handleOnchange}
></input>
    <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
           </form>
       )
   }
}
export default QuoteForm