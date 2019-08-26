import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../items.css';
import imageToy from './../1.jpg';
import TabItems from './TabItems';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {
                image: { imageToy },
                name: 'Xe tải đồ chơi',
                id: 'D123456778',
                price: '70,000đ',
                rating: ''
            },
            isOnSearch: false,
            listItems: [],
            search: '',
            listSearchItems: []
        };
    }
    onSearch = (event) => {
        event.preventDefault();
        let search = event.target.value;
        this.setState({ search: search });
        if (search === '') this.setState({ isOnSearch: false });
        else this.setState({ isOnSearch: true });
    }
    addItem = (itemid) => {
        console.log(itemid)
        this.props.addItem(itemid);
        let ItemChosen = this.props.listItems.filter(c => c.itemid === itemid);
        this.props.addListChosenItem(ItemChosen[0]);
    }

    render() {
        let tabItems = "";
        let newListItems;
        if (!this.state.isOnSearch) {
            newListItems = this.props.listItems;
            if (newListItems !== undefined) {
                tabItems = newListItems.map((c, index) =>
                    <TabItems
                        itemid={c.itemid}
                        price={c.price}
                        name={c.name}
                        key={index}
                        shopid={c.shopid}
                        images={c.images[0]}
                        isChosen={c.isChosen}
                        addItem={this.addItem}
                        match={this.props.match} />)
            }
            else { tabItems = null }
        }
        else {
            let search = this.state.search;

            let newListSearchItems;
            newListSearchItems = this.props.listItems.filter((c) => {
                return c.name.search(search) >= 0 || c.itemid.toString().search(search) >= 0 || c.price.toString().search(search) >= 0;
            }
            );
            if (newListSearchItems !== undefined) {
                tabItems = newListSearchItems.map((c, index) =>
                    <TabItems
                        itemid={c.itemid}
                        price={c.price}
                        name={c.name}
                        key={index}
                        shopid={c.shopid}
                        images={c.images[0]}
                        isChosen={c.isChosen}
                        addItem={this.addItem}
                        match={this.props.match} />)
            }
            else { tabItems = null }
        }
        return (
            <div onSubmit={this.onSubmit} >

                <div className=" card overview col-sm-12">
                    <h2>Sản phẩm</h2>
                </div>
                <div className="manage">
                    <div className="row ">
                        <div className="col-md-10">
                            <h5> Cửa hàng đang chọn: {this.props.shopNameSelected} </h5>

                        </div>
                        <div className="col-md-2 offset-md-2 mr-0 ml-0">
                            <Link to={`${this.props.Theodoidoithu_url.url}`} className="btn btn-link">Danh sách sản phẩm đang theo dõi<span className="fa  fa-angle-double-right p-l-5"></span> </Link>
                            {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
                        </div>
                    </div>
                    <div className="border">
                        <div className="form-group">
                            <div className="input-group ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fa fa-search text-white"
                                        aria-hidden="true"></i></span>
                                </div>
                                <input
                                    className="form-control my-0 py-1"
                                    type="text"
                                    placeholder="Tìm kiếm theo tên sản phẩm, mã sản phẩm"
                                    aria-label="Search"
                                    onChange={this.onSearch}
                                />
                            </div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr >
                                    <th >
                                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 cot1">
                                            Sản phẩm
                                        </div>
                                    </th>
                                    <th className="cot2">Mã sản phẩm</th>
                                    <th className="cot3">Giá bán</th>
                                    <th className="cot4">Rating</th>
                                    <th className="cot5"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabItems}
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
        shopNameSelected: state.shopNameSelected,
        listItems: state.listItems
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        addItem: (itemIdAdded) => {
            dispatch(actions.addItem(itemIdAdded));
        },
        addListChosenItem: (chosenItem) => {
            dispatch(actions.addListChosenItem(chosenItem));
        },

    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AddProduct);