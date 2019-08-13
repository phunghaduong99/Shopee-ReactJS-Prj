import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import Doithu from'./mucluc/Doithu';
import PieceFollow from './mucluc/PieceFollow';
import ChangePieceAuto from './mucluc/ChangePieceAuto';


class Noidung extends Component {
   
    render() { 
        return (
                <div>
                    <Route exact path={this.props.match.url}
                        render={props =>
                        <Doithu {...props}  />}  />
                    <Route path={`${this.props.match.url}/theodoigia`}
                        render={props =>
                        <PieceFollow  {...props} onUser={this.onUser} />}   />
                    <Route path={`${this.props.match.url}/chinhgiatudong`}
                        render={props =>
                        <ChangePieceAuto {...props} />}   />
                </div>
          );
    }
}
 
export default Noidung;