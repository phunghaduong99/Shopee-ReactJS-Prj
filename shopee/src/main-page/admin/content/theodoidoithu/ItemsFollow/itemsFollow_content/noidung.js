import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Doithu from './DoiThu/Doithu';
import PieceFollow from './TheoDoiGia/PieceFollow';
import ChangePieceAuto from './ChinhGiaTuDong/ChangePieceAuto';


class Noidung extends Component {

    render() {
        return (
            <div>
                <Route exact path={`${this.props.match.url}`}
                    render={props =>
                        <Doithu {...props} />} />

                <Route exact path={`${this.props.match.url}/competitorPriceFollows`}
                    render={props =>
                        <PieceFollow {...props} onUser={this.onUser} />} />
                <Route path={`${this.props.match.url}/changePriceAuto`}
                    render={props =>
                        <ChangePieceAuto {...props}  />} />
                
            </div>
        );
    }
}

export default Noidung;