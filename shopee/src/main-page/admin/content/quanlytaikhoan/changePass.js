import React, { Component } from 'react';
import './user.css';

// const phoneRegex = RegExp(
//    /\(*\d{3}\)*( |-)*\d{3}( |-)*\d{4}/
//   );
  
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class changePass extends Component {
    constructor(props) {
        super(props);
        this.state =({
            pass:null,
            newPass:null,
            confirmNew:null,
            formErrors: {
                pass:'',
                newPass:'',
                confirmNew:''
              }
            
        });
        
    }
    
    onChange = e => {
        e.preventDefault();
        var target = e.target;
        var name = target.name;
        var value= target.value;
        this.setState({
          [name]:value
       });
        let formErrors = {...this.state.formErrors };
        
        switch (name) {
            case "pass":
            formErrors.pass =
              value.length < 6 ? "Mật khẩu cũ không đúng" : "";
            break;
            case "newPass":
            formErrors.newPass =
              value.length < 6 ? "Mật khẩu tối thiểu 6 kí tự" : "";
            break;
            
            default:
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        
    
      };
      
         
    onSubmit=(event)=>{
        event.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --Data--
            pass: ${this.state.pass}
            newPass: ${this.state.newPass}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }
    render() {
        return (
            <div onSubmit={this.onSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Đổi mật khẩu</h2>
                    </div>
                    <form className="form-horizontal">
                      <div className="col-md-6 offset-md-3 mr-auto ml-auto ">
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Mật khẩu hiện tại </label>
                            </div>
                            <div className="col-md-7">
                                <input 
                                    className="form-control"
                                    name="pass" 
                                    placeholder="Nhập mật khẩu cũ" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                  />
                                  <span className="errorMessage txt4">{this.state.formErrors.pass}</span>
                            </div>
                            
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Mật khẩu mới</label>
                            </div>
                            <div className="col-md-7">
                              <input 
                                    className="form-control" 
                                    name="newPass" 
                                    placeholder="Nhập mật khẩu mới" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                />
                              <span className="errorMessage txt4">{this.state.formErrors.newPass}</span>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Nhập lại mật khẩu mới</label>
                            </div>
                            <div className="col-md-7">
                              <input 
                                    className="form-control" 
                                    name="confirmNew" 
                                    placeholder="Nhập lại mật khẩu mới" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                />
                              <span className="errorMessage txt4 m-t-20">{(this.state.confirmNew!== null && this.state.newPass!==this.state.confirmNew) ? "Mật khẩu không khớp" : "" }</span>
                            </div>
                          </div>
                          <div className="col-md-3 offset-md-9 col-sm-6 ml-auto">
                              <button type="submit" className="btn btn-primary "data-toggle="modal" data-target="#myModal">Lưu thay đổi </button>
                          </div>
                          <div class="modal" id="myModal">
                            <div class="modal-dialog">
                              <div class="modal-content">
                               <div class="modal-body">
                                  <h4>Đổi mật khẩu thành công</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                     </form>
                </div>
                
            
        );
    }
}

export default changePass ;