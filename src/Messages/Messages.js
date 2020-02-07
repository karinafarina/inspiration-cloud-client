import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Messages.css';

export class Messages extends Component {
  render() {
    const { messages } = this.props
    return (
      <div className="messages">
        {messages ? messages.map((eachMessage, index) => <p key={index}>{eachMessage.message}</p>) : "" }
        <Link to='/add-message' className="add-button">Add your own encouraging or inspirational message</Link>
      </div>
    )
  }
}

export default Messages;
