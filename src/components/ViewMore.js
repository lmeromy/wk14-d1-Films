import React from 'react';

class ViewMore extends React.Component {
  render(){

    return (
      <a href="https://www.imdb.com/calendar/?region=gb">View More!</a>
      // <button onClick="location.href = 'https://www.imdb.com/calendar/?region=gb';">View More!</button>
      
      // I would like to make this a button!

      // <input type="button" onclick="location.href='https://www.imdb.com/calendar/?region=gb';" value="View More!" />
    )
  }
}

export default ViewMore;
