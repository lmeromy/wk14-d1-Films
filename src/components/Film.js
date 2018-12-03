import React from 'react';

class Film extends React.Component {
  render(){
    return (
      <div className="film">
        <a href={this.props.film.url}>{this.props.film.name}</a>
      </div>
    )
  }

}

export default Film;
