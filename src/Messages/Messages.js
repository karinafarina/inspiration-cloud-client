import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MessagesContext from '../MessagesContext';
import { Fade } from 'react-slideshow-image';
import './Messages.css';

export class Messages extends Component {

  static contextType = MessagesContext;

  state = {
    fadeMessages: []
  }

  render() {
    const { messages } = this.context;
    for (let i = 0; i < messages.length; i++) {
      this.setState({
        fadeMessages: this.state.fadeMessages.push(messages[i])
      })
    }

    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: false,
      indicators: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <div className="messages">
        <div className="slide-container">

          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="message-container">
              {this.state.fadeMessages}
              </div>
            </div>
          </Fade>
        </div>
        
        <Link to='/add-message' className="add-button">Add your own encouraging or inspirational message</Link>

      </div>
    )
  }
}

export default Messages;
