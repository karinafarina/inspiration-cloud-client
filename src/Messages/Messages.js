import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MessagesContext from '../MessagesContext';
import { Fade } from 'react-slideshow-image';
import './Messages.css';

export class Messages extends Component {

  static contextType = MessagesContext;

  render() {
    const { messages } = this.context;

    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <div className="messages">
        <div className="slide-container">

          <Fade {...fadeProperties}>
            {messages.map((message, key)  => {
              console.log('messag.id', message.id, message.message)
              return(
                <div className="each-fade" key={message.id}>
                  <div className="message-container" >
                    {message.message}
                  </div>
                </div>
              )
            })
          } 
          </Fade>
        </div>
        
        <Link to='/add-message' className="add-button">Add your own encouraging or inspirational message</Link>

      </div>
    )
  }
}

export default Messages;
