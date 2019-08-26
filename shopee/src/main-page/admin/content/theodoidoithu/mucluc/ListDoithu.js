import React, { Component } from 'react';


class ListDoithu  extends Component {
   
    isOnFollowing = (event) => {
        event.preventDefault();
        let indexItem = this.props.indexItem;
        let rivalItemid = this.props.rivalItemid;
        let rivalShopid = this.props.rivalShopid
        this.props.isOnFollowing(indexItem, rivalShopid, rivalItemid);
    }
    render() {
   
        let rating_star_item = Math.round(this.props.rating_star * 100) / 100;
        let rating_star_rival_shop = Math.round(this.props.rating_star_rival_shop * 100) / 100;
        let Ischosen;
         if(this.props.isFollowing) Ischosen = <label className="text-primary">Đã chọn</label>;
        else Ischosen = <button className="button" className="btn btn-primary m-l-5" onClick={this.isOnFollowing} >Chọn</button>
        return (
                <tr>
                    <td className="doithu"> {this.props.nameRival}</td>
                    <td className="doithu text-center"> {rating_star_rival_shop}</td>
                    <td className="doithu text-center"> {this.props.follower_count}</td>
                    <td className="doithu">
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <img className="img-toy3 m-r-7" src={this.props.images} alt="anh"  />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {this.props.name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div><span className="text-danger">{rating_star_item}</span>/5</div>
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <div className="text-right"><span className="text-danger">{this.props.sold}</span> đã bán</div>
                            </div>
                        </div>
                    </td>
                    <td className="doithu text-center"> {this.props.price}</td>
                    <td className="doithu">
                        {Ischosen}
                    </td>
                </tr>
                
                
        );
    }
}

export default ListDoithu  ;