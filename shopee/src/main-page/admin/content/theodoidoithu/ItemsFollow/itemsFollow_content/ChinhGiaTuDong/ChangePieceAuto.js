import React, { Component } from 'react';
import Switch from "react-switch";
import On from './On';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../redux/actions/index';
import axios from 'axios';
class ChangePieceAuto extends Component {
    constructor() {
        super();
        this.state = {

            checked: false,
            khongbiet: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let itemid = this.props.followingItemSelected;
        let followingItemSelected = this.props.listChosenItems.filter((c) => c.itemid === itemid);
        let auto = followingItemSelected[0].auto;
        this.setState({ checked: auto })
    }
    handleChange(checked) {
        this.setState({ checked });
        if (!checked) {
            axios({
                method: 'put',
                url: 'http://172.104.173.222:8081/rivalOff/' + this.props.followingItemSelected,

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.props.token}`
                },
            })
                .then((response) => {
                    console.log(response);
                    if (response.data === "Off Auto") { 
                        this.props.changeStatusAutoPrice(checked, this.props.followingItemSelected);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

    render() {
        return (
            <div className="card ">
                {(this.props.listRivalsShopFollowing.length===0)?<label className="text-center m-t-10 m-b-10"><h6>Chưa có đối thủ nào được chọn để theo dõi !</h6> </label> :
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            {this.state.checked ? <h3>Cấu hình chỉnh giá tự động</h3> : <h6>Bạn chưa bật điều chỉnh giá tự động cho sản phẩm này</h6>}
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                                    <h5>{this.state.checked ? 'Bật' : 'Tắt'}</h5>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <Switch
                                        onChange={this.handleChange}
                                        checked={this.state.checked}
                                        className="react-switch"
                                        id="normal-switch"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.checked ? <On /> : null}
                </div>}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        listChosenItems: state.listChosenItems,
        followingItemSelected: state.followingItemSelected,

        token: state.token,
        listRivalsItem: state.listRivalsItem,
        listRivalsShop: state.listRivalsShop,
        listRivalsShopFollowing: state.listRivalsShopFollowing,

        shopIdSelected: state.shopIdSelected,

    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        changeStatusAutoPrice: (status , itemid) => {
            dispatch(actions.changeStatusAutoPrice(status , itemid));
        },
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ChangePieceAuto);

