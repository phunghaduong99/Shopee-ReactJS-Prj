import React, { Component } from 'react';

class Content extends Component {
    state = {}
    render() {
        return (
            <div id="content-wrapper">
                <div>Đây là body</div>
                <footer className="sticky-footer">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Your Website 2019</span>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Content;