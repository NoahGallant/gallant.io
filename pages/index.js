import React from 'react'
import Window from '../components/window'
import "../style.css"

class Main extends React.Component {

  render() {
    return (
  <div>
    <Window />


    <style jsx>{`
      @media (max-width: 52em) {
        section > * {
          margin: 0 auto;
          max-width: 24em;
        }
      }
    `}</style>
  </div>
  );
  }
}

export default Main
