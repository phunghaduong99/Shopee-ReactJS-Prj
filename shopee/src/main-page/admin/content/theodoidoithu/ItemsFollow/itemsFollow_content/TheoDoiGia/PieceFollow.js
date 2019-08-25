import React, { Component } from 'react';

import InfoRival from './InfoRival';
import { connect } from 'react-redux';
import axios from 'axios';
class PieceFollow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rival: this.props.listRivalsShopFollowing[0],
            listHistoryMyItem: [],
            listHistoryRivalItem: [],
            table: {
                date: '1/8/2019',
                price: '54,000'
            }
        };
    }
    onChange = (e) => {
        let index = e.target.value;
        this.setState({ rival: this.props.listRivalsShopFollowing[index] })
        this.callApi(this.props.listRivalsShopFollowing[index].itemid);

    }






    componentDidMount() {

        this.callApi(this.props.listRivalsShopFollowing[0].itemid);
    }
    callApi = ( itemid) => {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/itemPrice/' + this.props.followingItemSelected,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                if (response.data.length > 0) {
                    let newListMyItem = response.data;
                    if (newListMyItem.length > 0) {
                        newListMyItem = newListMyItem.map((c) => {
                            let indexDate = c.time.search("_");
                            let Datee = c.time.slice(0, indexDate);
                            let hour = c.time.slice(indexDate + 1, c.time.length)
                            Datee = hour + "h: " + Datee;
                            c.Date = Datee;

                            return c;
                        })
                        this.setState({
                            listHistoryMyItem: newListMyItem
                        })
                    }
                }

            })
            .catch((error) => {
                console.log(error);
            });

        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/itemPrice/' + itemid ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                if (response.data.length > 0) {
                    let newListRivalItem = response.data;
                    if (newListRivalItem.length > 0) {
                        newListRivalItem = newListRivalItem.map((c) => {
                            let indexDate = c.time.search("_");
                            let Datee = c.time.slice(0, indexDate);
                            let hour = c.time.slice(indexDate+1, c.time.length)
                            Datee = hour + 'h: ' + Datee;
                            c.Date = Datee;

                            return c;
                        })
                        this.setState({
                            listHistoryRivalItem: newListRivalItem
                        })
                    }
                }

            })
            .catch((error) => {
                console.log(error);
            });


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
        if (this.state.rival === undefined) {
            status = null
        }
        else {
            status = <InfoRival rival={this.state.rival} table={this.state.table} listHistoryMyItem={this.state.listHistoryMyItem} listHistoryRivalItem={this.state.listHistoryRivalItem} />
        }
        return (
            <div>
                <div className="card ">
                    {(this.state.rival === undefined) ? <label className="text-center m-t-10 m-b-10"><h6>Chưa có đối thủ nào được chọn để theo dõi !</h6> </label> :
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
                    }
                    {status}
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        token: state.token,
        listRivalsItem: state.listRivalsItem,
        listRivalsShop: state.listRivalsShop,
        listRivalsShopFollowing: state.listRivalsShopFollowing,
        followingItemSelected: state.followingItemSelected
    }
}
export default connect(mapStatetoProps, null)(PieceFollow);
