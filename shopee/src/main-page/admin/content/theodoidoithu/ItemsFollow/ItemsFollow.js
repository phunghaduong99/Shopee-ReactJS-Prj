import React, { Component } from 'react';
import './../items.css';
import { Link } from "react-router-dom";
import Noidung from './itemsFollow_content/noidung';
import { connect } from 'react-redux';


class ItemsFollow extends Component {
    render() {
        let itemid = this.props.followingItemSelected;
        let Item = this.props.listChosenItems.filter((c) => c.itemid === itemid);
        let newItem = Item[0];
        return (
            <div>
                <div className="col col-sm-3"><Link to={`${this.props.Theodoidoithu_url.url}`}className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div> 
                <div className=" card overview col-sm-12 m-t-15 ">   
                    <div className="row ">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                             <img className="img-toy-1" src={newItem.images[0]} alt="" />
                        </div>
                        
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="row ">
                                 <label className="form-control-group"><h3>{newItem.name}</h3></label>
                                
                            </div>
                            <div className="row ">
                                <label className="form-control-group "><h6>{this.props.followingItemSelected}</h6></label>
                            </div>
                            <div className="row ">
                             <label className="form-control-group "><h6> Cửa hàng: "{this.props.shopNameSelected}"</h6></label>
                            </div>
                        </div>
                    </div>
                    <div className="row list">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul>
                                <li><Link className="a" to={`${this.props.match.url}`}>Đối thủ</Link></li>
                                <li> <Link className="a" to={`${this.props.match.url}/theodoigia`}>Theo dõi giá</Link></li>
                                <li><Link className="a" to={`${this.props.match.url}/chinhgiatudong`}>Chỉnh giá tự động</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="noidung">
                    
                      {/* <Doithu/> */}
                      <Noidung match = {this.props.match}/>
                 </div>
               </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
      token: state.token,
      shopNameSelected: state.shopNameSelected,
      followingItemSelected: state.followingItemSelected,
      listChosenItems: state.listChosenItems
    }
  }
export default connect(mapStatetoProps, null)(ItemsFollow);