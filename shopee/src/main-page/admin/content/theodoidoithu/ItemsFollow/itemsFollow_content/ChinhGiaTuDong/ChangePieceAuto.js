import React, { Component } from 'react';
import Switch from "react-switch";
import On from './On';

class ChangePieceAuto extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(checked) {
        this.setState({ checked });
      }
    
    render() { 
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
                    {this.state.checked ? <On/> : null}
                </div>
             </div>
         );
    }
}
 
export default ChangePieceAuto;