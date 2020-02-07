import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Landing extends Component {
  render() {
    return (
      <div className="messages">
        <h1>INSPIRATION CLOUD</h1>
        <h3>A place where positive people can come to share encouragement and inspiration!</h3>
        <Link to='/messages'>View Messages Here</Link>
      </div>
    )
  }
}

export default Landing
