import React, { Component } from 'react';

class RivalChosen extends Component {
   
    DeleteFollowing = (e) => {
        e.preventDefault();
        let indexItem = this.props.indexItem;
        let itemid = this.props.itemid;
        let rivalShopid = this.props.rivalShopid;
      
        this.props.DeleteFollowing(indexItem, itemid, rivalShopid );
    }
    render() {
        return (
            <tr className="row">
                <td className="col-xs-8 col-sm-8 col-md-8 col-lg-8"> 
                     {this.props.nameRival}
                </td>
                <td className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><button  className="btn btn-danger button" onClick = {this.DeleteFollowing}>Xóa</button></td>
            </tr>
        );
    }
}

export default RivalChosen;