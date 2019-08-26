import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../items.css';
import TabItemsFollow from './TabItemsFollow';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';


class FollowCompetitor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        if (this.props.listChosenItems.length === 0)
            this.callAPI();
    }
    callAPI = () => {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/chosenItems/' + this.props.shopIdSelected,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                let listChosenItems = response.data;
                let newlistItems = this.props.listItems.map((c, index) => {
                    let itemid = c.itemid;
                    let status = listChosenItems.filter((c, index) =>
                        c.itemid === itemid
                    )
                    if (status.length > 0) c.isChosen = true;
                    return c;
                })
                this.props.saveListItems(newlistItems);
                this.props.saveListChosenItems(listChosenItems);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    DeleteChosenItem = (chosen, itemId) => {
        if (chosen === 0) {
            this.props.deleteListChosenItem(itemId);
            this.props.deleteItem(itemId);
        }
        if (chosen > 0) {
            axios({
                method: 'delete',
                url: 'http://172.104.173.222:8081/rival/' + itemId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.props.token}`
                },
            })
                .then((response) => {
                    console.log(response);
                    this.props.deleteListChosenItem(itemId);
                    this.props.deleteItem(itemId);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {

        let tableshop = this.props.listChosenItems.map((c, index) =>
            <TabItemsFollow
                name={c.name}
                itemid={c.itemid}
                chosen={c.chosen}
                images={c.images[0]}
                auto={c.auto}
                key={index}
                match={this.props.match}
                DeleteChosenItem={this.DeleteChosenItem}
            />)
        return (
            <div onSubmit={this.onSubmit} >
                <div className=" card overview col-sm-12">
                    <h2>Sản phẩm đang theo dõi</h2>
                </div>
                <div className="manage">
                    <div className="row ">
                        <div className="col-md-10">
                            <h5> Cửa hàng đang chọn: {this.props.shopNameSelected} </h5>
                            <div className="text-left">
                                <Link to={`${this.props.match.url}/AddProduct`} className="btn btn-link">Thêm sản phẩm theo dõi <span className="fa  fa-angle-double-right p-l-5"></span></Link>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-2 mr-0 ml-0">
                            <Link to={`${this.props.admin_url.url}/quanlycuahang`} className="btn btn-link">Đổi cửa hàng </Link>
                            {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
                        </div>
                    </div>

                    <div className="border">
                        <table className="table">
                            <thead>
                                <tr >
                                    <th className="cot1" > Sản phẩm </th>
                                    <th className="cot2">Mã sản phẩm</th>
                                    <th className="cot3 text-center">Số lượng đối thủ đang theo dõi</th>
                                    <th className="cot4 text-center">Chỉnh giá tự động</th>
                                    <th className="cot5"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableshop}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        token: state.token,
        shopIdSelected: state.shopIdSelected,
        shopNameSelected: state.shopNameSelected,
        listItems: state.listItems,
        listChosenItems: state.listChosenItems
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveListChosenItems: (listChosenItems) => {
            dispatch(actions.saveListChosenItems(listChosenItems));
        },
        deleteListChosenItem: (itemId) => {
            dispatch(actions.deleteListChosenItem(itemId));
        },
        deleteItem: (itemid) => {
            dispatch(actions.deleteItem(itemid));
        },

        saveListItems: (listItems) => {
            dispatch(actions.saveListItems(listItems));
        },




    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(FollowCompetitor);