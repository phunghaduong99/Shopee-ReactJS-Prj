import React, { Component } from 'react';

import InfoRival from './InfoRival';
import { connect } from 'react-redux';
class PieceFollow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rival: this.props.listRivalsShopFollowing[0],
           
            table: {
                date: '1/8/2019',
                price: '54,000'
            }
        };
    }
    onChange = (e) => {
        let index = e.target.value;
        this.setState({ rival: this.props.listRivalsShopFollowing[index]})

    }
    render() {
        let listRivalsShopFollowing;
        let optionRivals;
        if (this.props.listRivalsShopFollowing.length > 0) {
            listRivalsShopFollowing = this.props.listRivalsShopFollowing;
            optionRivals = listRivalsShopFollowing.map((c, index) => {
                return <option key={index} value={index}>{c.nameRival}</option>
            })
        }
        let status;
        console.log(this.state.rival);
        if(this.state.rival === undefined) {
            status = null
        }
        else {
            status = <InfoRival rival = {this.state.rival}  table = {this.state.table}/>
        }

        return (
            <div>
                <div className="card ">
                    <div className="card-header">
                        <div className="row doithu">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                                <h3>Đối thủ</h3>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <select className="form-control" onChange={this.onChange}>
                                    {optionRivals}
                                </select>
                            </div>
                        </div>
                    </div>
                    {status}
                    
                </div>

            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        listRivalsItem: state.listRivalsItem,
        listRivalsShop: state.listRivalsShop,
        listRivalsShopFollowing: state.listRivalsShopFollowing
    }
}
export default connect(mapStatetoProps, null)(PieceFollow);
