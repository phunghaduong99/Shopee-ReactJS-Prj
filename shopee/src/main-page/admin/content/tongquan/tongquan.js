import React, { Component } from 'react';

class TongQuan extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className= "col-sm-12">
                    <h2>Xin chào Phùng Hà Dương</h2>
                </div>
                 {/* <!-- To Do and Live Chat --> */}
                 <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title box-title">Live Chat</h4>
                            <div className="card-content">
                                <div className="messenger-box">
                                    <ul>
                                        <li>
                                            <div className="msg-received msg-container">
                                                <div className="avatar">
                                                   <img src="images/avatar/64-1.jpg" alt=""/>
                                                   <div className="send-time">11.11 am</div>
                                                </div>
                                                <div className="msg-box">
                                                    <div className="inner-box">
                                                        <div className="name">
                                                            John Doe
                                                        </div>
                                                        <div className="meg">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.msg-received --> */}
                                        </li>
                                        <li>
                                            <div className="msg-sent msg-container">
                                                <div className="avatar">
                                                   <img src="images/avatar/64-2.jpg" alt=""/>
                                                   <div className="send-time">11.11 am</div>
                                                </div>
                                                <div className="msg-box">
                                                    <div className="inner-box">
                                                        <div className="name">
                                                            John Doe
                                                        </div>
                                                        <div className="meg">
                                                            Hay how are you doing?
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.msg-sent --> */}
                                        </li>
                                    </ul>
                                    <div className="send-mgs">
                                        <div className="yourmsg">
                                            <input className="form-control" type="text"/>
                                        </div>
                                        <button className="btn msg-send-btn">
                                            <i className="pe-7s-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.messenger-box --> */}
                            </div>
                        </div> 
                        {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title box-title">Live Chat</h4>
                            <div className="card-content">
                                <div className="messenger-box">
                                    <ul>
                                        <li>
                                            <div className="msg-received msg-container">
                                                <div className="avatar">
                                                   <img src="images/avatar/64-1.jpg" alt=""/>
                                                   <div className="send-time">11.11 am</div>
                                                </div>
                                                <div className="msg-box">
                                                    <div className="inner-box">
                                                        <div className="name">
                                                            John Doe
                                                        </div>
                                                        <div className="meg">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.msg-received --> */}
                                        </li>
                                        <li>
                                            <div className="msg-sent msg-container">
                                                <div className="avatar">
                                                   <img src="images/avatar/64-2.jpg" alt=""/>
                                                   <div className="send-time">11.11 am</div>
                                                </div>
                                                <div className="msg-box">
                                                    <div className="inner-box">
                                                        <div className="name">
                                                            John Doe
                                                        </div>
                                                        <div className="meg">
                                                            Hay how are you doing?
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.msg-sent --> */}
                                        </li>
                                    </ul>
                                    <div className="send-mgs">
                                        <div className="yourmsg">
                                            <input className="form-control" type="text"/>
                                        </div>
                                        <button className="btn msg-send-btn">
                                            <i className="pe-7s-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- /.messenger-box --> */}
                            </div>
                        </div> 
                        {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>
                {/* <!-- /To Do and Live Chat --> */}
            </div>
           
         );
    }
}
 
export default TongQuan;