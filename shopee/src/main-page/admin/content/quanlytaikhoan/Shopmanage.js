import React, { Component } from 'react';
import './user.css';
import { Link } from "react-router-dom";

class ShopManage extends Component {
    state={
      status1:true,
      status2:false
    }
    HandleChange1=(e)=>{
      e.preventDefault();
      this.setState({
        status1 :false,
        status2 :true
    });
    }
    HandleChange2=(e)=>{
      e.preventDefault();
      this.setState({
        status1: true,
        status2: false
    });
    }
    onSubmit=(event)=>{
        event.preventDefault();
    }
    render() {
       let label1 ="Đang hoạt động";
        let label2="Không hoạt động";
        if (this.state.status1) {
          label1="Đang hoạt động" ;label2="Không hoạt động";
        };
        if (this.state.status2){
          label2="Đang hoạt động"; label1="Không hoạt động";
        };
        return (
            <div  onSubmit={this.onSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Quản lý cửa hàng</h2>
                    </div>
                    <div className="manage">
                      <div className="row ">
                        <div className="col-md-10">
                          <h5> Bạn đã kết nối 2 cửa hàng </h5>
                        </div>
                        <div className="col-md-2 offset-md-2 mr-0 ml-0">
                          <Link to={`${this.props.match.url}/ContactShopee`} className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết Nối </Link>
                          {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
                        </div>
                      </div>
                      
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tên cửa hàng</th>
                            <th scope="col">ID cửa hàng</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Đồ chơi trẻ em</th>
                            <td>1001234</td>
                            <td>{label1}</td>
                            <td>
                            <button className="btn btn-primary" onClick={this.HandleChange1}> Chuyển trạng thái</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Đồ chơi trẻ lớn</th>
                            <td>12341234</td>
                            <td> {label2}</td>
                            <td>
                              <button className="btn btn-primary"onClick={this.HandleChange2}> Chuyển trạng thái</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
        );
    }
}

export default ShopManage ;