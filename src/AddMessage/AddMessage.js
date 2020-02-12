import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import MessagesContext from '../MessagesContext'
import ValidationError from '../ValidationError';
import './AddMessage.css';

export class AddMessage extends Component {

  static contextType = MessagesContext;

  state = {
    messageError: null,
    message: {
      value: '',
      touched: false
    }
    
  };

  updateMessage(message) {
    this.setState({message: { value: message, touched: true } })
  };

  handleSubmit = e => {
    e.preventDefault();
    //get form fields from event

    const message = this.state.message.value.trim();

    this.setState({ messageError: null })

    fetch(`${config.API_BASE_URL}/messages`, {
      method: 'POST',
      body: JSON.stringify( { message }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      console.log('houwdy', res)
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then((newMessage) => {
      console.log('data', newMessage)
      this.context.addMessage(newMessage)
      this.props.history.push('/messages')
    })
    .catch(error => {
      console.log(error)
      this.setState({ error })
    })
  }

  validateMessage() {
    const message = this.state.message.value.trim();
    if(message.length === 0) {
      return "Message is required";
    } else if (message.length < 3) {
      return "Message must be at least 3 characters long";
    }
  }

  render() {
    const messageError = this.validateMessage();

    return (
      <div className="add-message">
        <h3>Add Your encouraging or inspirational message here</h3>
        <form className="add" onSubmit={this.handleSubmit}>
          <textarea 
            id="message" 
            rows="8" 
            cols="50" 
            name="adding" 
            onChange={e => this.updateMessage(e.target.value)}>
          </textarea>
          {this.state.message.touched && (
            <ValidationError message={messageError} />
          )}
          <input type="submit" />
          {/* ON SUBMIT, ADD MESSAGE TO DATABASE */}
        </form>
        <button type="submit"><Link to='./messages'>Cancel</Link></button>

      </div>
    )
  }
}

export default AddMessage
