import React, { Component } from 'react';
import Aside from './aside/aside';
import Header from './header/header';
import Content from './content/content';

import './index.css';

// import './assets/js/main';

import './assets/css/style.css';
import './assets/css/cs-skin-elastic.css';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 , open: false,};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
    
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        
        
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      
    open = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        console.log(this.state.width);
        console.log(this.state.height);
        return (

            <div className= {this.state.width <1010? "small-device": (this.state.open? "body open": "body")}>
            <Aside width = {this.state.width} open = {this.state.open}/>
             {/* <!-- Right Panel -->  */}
            <div id="right-panel" className="right-panel">
                <Header open = {this.open} responseF = {this.props.responseF}   width = {this.state.width}/>
                {/* <!-- Content --> */}
                <div className="content">
                    <Content/>
                </div>
                {/* <!-- /.content --> */}
                <div className="clearfix"></div>
                {/* <!-- Footer --> */}
                
            </div>
            </div>
  
         );
    }
}

export default Admin;