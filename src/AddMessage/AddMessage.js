import React, { Component } from 'react';
import './AddMessage.css';

export class AddMessage extends Component {
  render() {
    return (
      <div className="add-message">
        <form className="add">
          <h3>Add Your encouraging or inspirational message here</h3>
          <input className="input" type="text" />
          <input type="submit" />
          {/* ON SUBMIT, ADD MESSAGE TO DATABASE */}
        </form>
      </div>
    )
  }
}

export default AddMessage
