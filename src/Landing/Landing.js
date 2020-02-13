import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'


export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-content">
          <h1>INSPIRATION CLOUD</h1>
          <h3>A place where positive people can come to share encouragement and inspiration!</h3>
          <div className="view">
            <Link to='/messages'>View Messages Here</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
