import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import ListDoithu from '../../../mucluc/ListDoithu';
import RivalChosen from './rivalChosen';
import Tooltip from "react-simple-tooltip"


import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../redux/actions/index';
class Doithu extends Component {
    state = {
        numberchosen: 0
    }
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.callApi();
    }


    callApi = () => {
        if (this.props.listRivalsItem.length === 0) {
            axios({
                method: 'get',
                url: 'http://localhost:8081/getRivals/114140652/2676610631',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.props.token}`
                },
            })
                .then((response) => {
                    console.log(response);
                    let neww = response.data;
                    let newlistShop = neww.map(
                        (c, index) => {
                            c.indexItem = index;
                            c.isFollowing = false;
                            return c
                        }
                    )
                    this.props.saveListRivalsItem(newlistShop);

                })
                .catch((error) => {
                    console.log(error);
                    alert("Không lấy được item đối thủ");
                });
        }
        if (this.props.listRivalsShop.length === 0) {
            axios({
                method: 'get',
                url: 'http://localhost:8081/shopRival/114140652/2676610631',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${this.props.token}`
                },
            })
                .then((response) => {
                    console.log(response);
                    let neww = response.data;

                    this.props.saveListRivalsShop(neww);

                })
                .catch((error) => {
                    console.log(error);
                    alert("Không lấy được shop đối thủ");
                });
        }
    }
    isOnFollowing = (indexItem) => {

        let table = this.props.listRivalsItem;
        let table2 = table.filter((c) => c.isFollowing === false);
        let numberchosen = table.length - table2.length;
        if (numberchosen < 5) {
            this.props.chooseRivalsItem(indexItem);
            this.props.saveListRivalsShopFollowing(table[indexItem])
        }
        
    }
    DeleteFollowing = (indexItem, itemid) => {
        this.props.deleteRivalsItem(indexItem);
        this.props.deleteListRivalsShopFollowing(itemid)
    }

    render() {

        let tableshop_un_chosen = null;
        let tableshop_chosen = null;
        let table = "";
        if (this.props.listRivalsItem.length > 0) {
            table = this.props.listRivalsItem.map((c, index) => {
                if (this.props.listRivalsShop.length > 0) {
                    c.nameRival = this.props.listRivalsShop[index].name;
                    c.follower_count = this.props.listRivalsShop[index].follower_count;
                    c.rating_star_rival_shop = this.props.listRivalsShop[index].rating_star;
                    return c
                }
            });
            if (this.props.listRivalsShop.length > 0) {
                // let table_un_choosen = table.filter((c) => {
                //     return c.isFollowing === false;
                // })


                tableshop_un_chosen = table.map((c, index) =>
                    <ListDoithu
                        name={c.name}
                        nameRival={c.nameRival}
                        indexItem={c.indexItem}
                        key={index}
                        follower_count={c.follower_count}
                        rating_star_rival_shop={c.rating_star_rival_shop}
                        rating_star={c.rating_star}
                        sold={c.sold}
                        price={c.price}
                        images={c.images[0]}
                        isFollowing = {c.isFollowing}
                        isOnFollowing={this.isOnFollowing}

                    />)
                tableshop_chosen = this.props.listRivalsShopFollowing.map((c, index) =>
                    <RivalChosen
                        key={index}
                        nameRival={c.nameRival}
                        DeleteFollowing={this.DeleteFollowing}
                        indexItem={c.indexItem}
                        itemid = {c.itemid}
                    />
                )
            }

        }
        else {
            tableshop_un_chosen = null;
            tableshop_chosen = null;
        }

        return (
            <div>

                <div className="row ">

                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div className="card ">
                            <div className="card-header"><h4>Lựa chọn đối thủ</h4></div>
                            <div className="card-body">
                                <label className="txt7">Dưới đây là danh sách các đối thủ cạnh tranh mà hệ thống tự động tìm kiếm cho bạn. Hãy lựa chọn đối thủ để theo dõi. Tối đa 5 đối thủ.</label>
                                <table className="table table-condensed">
                                    <thead>
                                        <tr >
                                            <th className="cot6">Đối thủ</th>
                                            <th className="cot7 " >Đánh giá
                                                <Tooltip content="Đánh giá trung bình của cửa hàng (n/5.0)" fontSize="11px"   >
                                                    <span className="fa fa-info-circle red text-left m-l-5" ></span>
                                                </Tooltip>
                                            </th>
                                            <th className="cot8 " >Theo dõi
                                                <Tooltip content="Số lượng người ấn theo dõi cửa hàng" fontSize="11px" >
                                                    <span className="fa fa-info-circle red text-left m-l-5 " ></span>
                                                </Tooltip>
                                            </th>
                                            <th className="cot9" >Sản phẩm</th>
                                            <th className="cot10">Giá bán</th>
                                            <th className="cot11" ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableshop_un_chosen}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="card ">
                            <div className="card-header"><h4>Đối thủ đã chọn</h4></div>
                            <div className="card-body">
                                <label className="txt7">5 đối thủ</label>
                                <table className="table">
                                    <thead>
                                        <tr >
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableshop_chosen}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

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
        listRivalsShopFollowing: state.listRivalsShopFollowing
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveListRivalsItem: (listRivalsItem) => {
            dispatch(actions.saveListRivalsItem(listRivalsItem));
        },
        saveListRivalsShop: (listRivalsShop) => {
            dispatch(actions.saveListRivalsShop(listRivalsShop));
        },
        chooseRivalsItem: (index, numberchosen) => {
            dispatch(actions.chooseRivalsItem(index, numberchosen));
        },
        deleteRivalsItem: (index) => {
            dispatch(actions.deleteRivalsItem(index));
        },
        saveListRivalsShopFollowing: (listRivalsShopFollowing) => {
            dispatch(actions.saveListRivalsShopFollowing(listRivalsShopFollowing));
        },
        deleteListRivalsShopFollowing: (itemid) => {
            dispatch(actions.deleteListRivalsShopFollowing(itemid));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Doithu);