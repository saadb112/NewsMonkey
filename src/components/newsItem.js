import React, { Component } from 'react'

export class newsItem extends Component {
  render() 
  {
      let {title, desc, img, author, date} = this.props
    return (
        <div className='container my-2' > 

     <div className="card" style={{width : "25rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p class="card-text"><small class="text-muted">Author: {author} <br/> Date: {date}</small></p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
        </div>
    )
  }
}

export default newsItem