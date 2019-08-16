import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Doithu from './DoiThu/Doithu';
import PieceFollow from './TheoDoiGia/PieceFollow';
import ChangePieceAuto from './ChinhGiaTuDong/ChangePieceAuto';


class Noidung extends Component {

    render() {
        return (
            <div>
                <Route exact path={this.props.match.url}
                    render={props =>
                        <Doithu {...props} />} />

                <Route exact path={`${this.props.match.url}/theodoigia`}
                    render={props =>
                        <PieceFollow {...props} onUser={this.onUser} />} />
                <Route path={`${this.props.match.url}/chinhgiatudong`}
                    render={props =>
                        <ChangePieceAuto {...props} chinhgiatudong_url={this.props.match} />} />
                
            </div>
        );
    }
}

export default Noidung;