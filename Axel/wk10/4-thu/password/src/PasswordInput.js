import React from 'react'

import "./PasswordInput.css"
import Bar from './Bar'
import estimateStrength from './estimateStrength'

export default class PasswordInput extends React.Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {}
  }

  handleChange(e) {
    e.persist()
    this.setState(() => {
      return estimateStrength(e.target.value)
    })
  }

  render() {
    const { score } = this.state
    const pwdStrength = score * 20
    return (
      <div>
        <div>{Object.keys(this.state).toString()}</div>
        <div>{Object.values(this.state).toString()}</div>

        <span>Strength</span>
        <Bar width={`${pwdStrength}%`} color="lime"/>
        <input onChange={this.handleChange} type="password"/>
      </div>
    )
  }
  
}










