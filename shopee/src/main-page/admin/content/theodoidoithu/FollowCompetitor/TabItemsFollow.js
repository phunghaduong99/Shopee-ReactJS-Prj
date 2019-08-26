import React, { Component } from 'react';
import './../items.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';



class TabItemsFollow extends Component {
    chosenItem = () => {
        let followingItemSelected = this.props.itemid;
        if(followingItemSelected !== this.props.followingItem){
            console.log('a')
            this.props.removeListRivalsItem();
            this.props.removeListRivalsShop();
            this.props.removeListRivalsShopFollowing();
        }
        this.props.followingItemSelected(followingItemSelected);
    }

    DeleteChosenItem = () => {
        let chosen = this.props.chosen;
        let itemid = this.props.itemid;
        this.props.DeleteChosenItem(chosen, itemid);
    }
    render() {
        return (
                <tr>
                    <td >
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <img className="img-toy m-r-7" src={this.props.images} alt="" />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                
                            <Link to={`${this.props.match.url}/itemsFollow`} onClick={this.chosenItem}>{this.props.name} </Link>
                            </div>
                        </div>
                        </td>
                    <td> {this.props.itemid}</td>
                    <td className="text-center"> {this.props.chosen}</td>
                    <td className="text-center">
                     {this.props.auto? "Bật": "Tắt"}
                    </td>
                    <td><button className="btn btn-danger button " onClick= {this.DeleteChosenItem}>Xóa</button></td>
                </tr>
                
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        followingItem: state.followingItemSelected
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        followingItemSelected: (followingItemSelected) => {
            dispatch(actions.followingItemSelected(followingItemSelected));
        },

        removeListRivalsItem: () => {
            dispatch(actions.removeListRivalsItem());
        },
        removeListRivalsShop: () => {
            dispatch(actions.removeListRivalsShop());
        },
        removeListRivalsShopFollowing: () => {
            dispatch(actions.removeListRivalsShopFollowing());
        },
       
    }
} 
export default connect(mapStatetoProps, mapDispatchtoProps)(TabItemsFollow);
