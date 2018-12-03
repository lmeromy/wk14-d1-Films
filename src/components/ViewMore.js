import React from 'react';

class ViewMore extends React.Component {
  render(){

    // createLink(){
    //   "https://www.imdb.com/calendar/?region=gb"
    // }

    return (
      // <button href="https://www.imdb.com/calendar/?region=gb">View More!</button>
      // <button onClick="location.href = 'https://www.imdb.com/calendar/?region=gb';">View More!</button>

      <input type="button" onclick="location.href='https://www.imdb.com/calendar/?region=gb';" value="View More!" />
    )
  }
}

export default ViewMore;
