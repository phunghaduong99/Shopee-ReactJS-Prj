import React, { Component } from 'react';
import Switch from "react-switch";
import On from './On';
import { connect } from 'react-redux';

import axios from 'axios';
class ChangePieceAuto extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false ,
            khongbiet: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }
      componentDidMount(){
        let itemid = this.props.followingItemSelected;
        let followingItemSelected = this.props.listChosenItems.filter((c) => c.itemid === itemid);
        let auto =  followingItemSelected[0].auto
        this.setState({checked: auto})
      }
      handleChange(checked) {
        this.setState({ checked });
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8081/rival',
        //     data: {
        //         "itemid": `${this.props.followingItemSelected}`,
        //         "shopid": `${this.props.shopIdSelected}`,
        //         "rivalShopid": `${this.state.rival.shopid}`,
        //         "rivalItemid": `${this.state.rival.itemid}`,
        //         "auto": `${checked}`,
        //     },
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `${this.props.token}`
        //     },
        // })
        //     .then((response) => {
        //         console.log(response);
                

        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
      }
    
    render() {
        console.log(this.state.checked)
        console.log('ss')
        console.log(this.state.khongbiet)
        return ( 
            <div className="card ">
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
                </div>
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
export default connect(mapStatetoProps, null)(ChangePieceAuto);

