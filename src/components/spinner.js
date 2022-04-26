import React, { Component } from 'react'
import Loading from "./loading.gif"
export class spinner extends Component {
  render() {
    return (
      <div style={{display : "flex", justifyContent : "center"}}>

        <img src={Loading} alt="" style={{margin : "auto", width : "200px"}}/>
      </div>
    )
  }
}

export default spinner