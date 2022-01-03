import React from 'react';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="full-width height-min-nav center-all">
       <div className="border flex align-center column">
         <div className="custom-heading-1">
           <span className="green">Game</span> <span className="pink">Lobby</span>
         </div>
         <table>
            <thead>
              <tr>
                <th className="white">Games</th>
                <th className="white">Players</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="white">sadfsda</td>
                <td className="white">sadfadsf</td>
              </tr>
            </tbody>
         </table>
         <div className="full-width padding-3-rem green flex-between">
           <div className="buttons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Create Game
           </div>
           <div className="buttons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Join Game
           </div>
         </div>
        </div>
      </div>
    );
  }
}
