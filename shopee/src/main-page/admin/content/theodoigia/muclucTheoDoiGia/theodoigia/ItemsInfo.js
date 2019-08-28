import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../../items.css';
import ChartFollow from './ChartFollow';
import CircleChart from './CircleChart';
import { connect } from 'react-redux';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
class ItemsInfo extends Component {
    state = {
        statistical: null
    }
    componentDidMount() {
        this.callAPI();
    }
    callAPI = () => {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/statistical/' + this.props.shopIdSelected + '/' + this.props.itemId_thongke,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    statistical: response.data
                })

            })
            .catch((error) => {
                console.log(error);

            });
    }
    number_format = (number, decimals, dec_point, thousands_sep) => {
        var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point === undefined ? "," : dec_point;
        var t = thousands_sep === undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        var j = i.length;
        j = (j) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }
    render() {
        let dulieu = false;
        let itemDetail = this.props.listItems.filter((c) =>
            c.itemid === this.props.itemId_thongke
        )
        let table = [];
        let medium = 0;
        let arrayNumber = [];
        let percentNumber = [];
        let arrayPriceForChart = [];
        let numberRivals = 0;
        let arrayPrice = [];

        let SoLuongGiaThapHon = 0;
        let PhanTramGiaThapHon = 0;

        let SoLuongGiaCaoHon = 0;
        let PhanTramGiaCaoHon = 0;

        let SoLuongGiaTuongDuong = 0;
        let PhanTramGiaTuongDuong = 0;
        let status = 0;
        if (this.state.statistical !== null) {

            let table = this.state.statistical.ranks;
            medium = Math.round(this.state.statistical.medium) / 1000;

            table.map((c, index) => {
                arrayNumber.push(c.count);
                numberRivals = numberRivals + c.count;
                if (index <= 3) {
                    SoLuongGiaThapHon = SoLuongGiaThapHon + c.count
                }
                if (4 <= index && index <= 5) SoLuongGiaTuongDuong = SoLuongGiaTuongDuong + c.count
                if (index >= 6) SoLuongGiaCaoHon = SoLuongGiaCaoHon + c.count;
                return c;
            })

            if (numberRivals > 0) {
                table.map((c, index) => {
                    let number = c.count;
                    number = number / numberRivals;
                    let percent = Math.round(number * 1000) / 10;
                    percentNumber.push(percent);
                    return c;
                })
            }

            arrayNumber.map((c, index) => {
                let percent = 0.5 + index / 10;
                let price = Math.round(itemDetail[0].price * percent / 100) / 10 + '-' + Math.round(itemDetail[0].price * (percent + 0.1) / 100) / 10;
                let priceForChart = Math.round(itemDetail[0].price * percent / 1000) + '-' + Math.round(itemDetail[0].price * (percent + 0.1) / 1000);
                arrayPriceForChart.push(priceForChart)
                arrayPrice.push(price);
                return c;
            })

            if (percentNumber.length > 0) {
                percentNumber.map((c, index) => {
                    if (index <= 3) PhanTramGiaThapHon = PhanTramGiaThapHon + c;
                    if (index >= 6) PhanTramGiaCaoHon = PhanTramGiaCaoHon + c;
                    if (4 <= index && index <= 5) PhanTramGiaTuongDuong = PhanTramGiaTuongDuong + c;
                    return c;
                })
            }
            PhanTramGiaThapHon = Math.round(PhanTramGiaThapHon * 10) / 10;
            PhanTramGiaCaoHon = Math.round(PhanTramGiaCaoHon * 10) / 10;
            PhanTramGiaTuongDuong = Math.round(PhanTramGiaTuongDuong * 10) / 10;
            status = 1;
            dulieu = true;
        }
        let GiaThapHon;
        let GiaCaoHon;
        let GiaTuongDuong;
        if (status === 1) GiaThapHon = SoLuongGiaThapHon + ' (chiếm ' + PhanTramGiaThapHon + '%)';
        else GiaThapHon = '';
        if (status === 1) GiaCaoHon = SoLuongGiaCaoHon + ' (chiếm ' + PhanTramGiaCaoHon + '%)';
        else GiaCaoHon = '';
        if (status === 1) GiaTuongDuong = SoLuongGiaTuongDuong + ' (chiếm ' + PhanTramGiaTuongDuong + '%)';
        else GiaTuongDuong = '';

        let Nam0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 0.5 / 1000 * 10) / 10), 1, '.', ',')  
        let Sau0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 0.6 / 1000 * 10) / 10), 1, '.', ',') 
        let Bay0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 0.7 / 1000 * 10) / 10), 1, '.', ',') 
        let Tam0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 0.8 / 1000 * 10) / 10), 1, '.', ',') 
        let Chin0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 0.9 / 1000 * 10) / 10), 1, '.', ',') 
        let Muoi0 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.0 / 1000 * 10) / 10), 1, '.', ',') 
        let Mot1 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.1 / 1000 * 10) / 10), 1, '.', ',') 
        let Hai1 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.2 / 1000 * 10) / 10), 1, '.', ',') 
        let Ba1 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.3 / 1000 * 10) / 10), 1, '.', ',') 
        let Bon1 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.4 / 1000 * 10) / 10), 1, '.', ',') 
        let Nam1 = this.number_format(parseFloat(Math.round(itemDetail[0].price * 1.5 / 1000 * 10) / 10), 1, '.', ',') 
        return (
            <div>
                <div className="col col-sm-3"><Link to={`${this.props.Theodoigia_url.url}`} className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div>
                <div className=" card overview col-sm-12 m-t-15 ">
                    <div className="row ">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <img className="img-toy-1" src={itemDetail[0].images[0]} alt="" />
                        </div>

                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="row ">
                                <label className="form-control-group"><h3>{itemDetail[0].name}</h3></label>
                            </div>
                            <div className="form-control-group "><h6>Mã sản phẩm: {this.props.itemId_thongke}</h6></div>
                            <div className="form-control-group "><h6> Cửa hàng: "{this.props.shopNameSelected}"</h6></div>
                            <div className="form-control-group "><h6> Giá: {this.number_format(parseFloat(itemDetail[0].price), 0, '.', ',')} đ  </h6></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5>Biểu đồ thống kê giá </h5>
                        <div className="form-chu-thich">
                            <div className="col-md-4 offset-md-8 text-right"> {dulieu?<div className="chuthich">Mức giá so với giá sản phẩm của bạn : </div>:<Skeleton height={20} width={300}/>} </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <ChartFollow arrayPriceForChart={arrayPriceForChart} percentNumber={percentNumber} arrayNumber ={arrayNumber} />
                                {dulieu?<div className="chuthich2">Mức giá so với giá sản phẩm của bạn  </div>:<Skeleton height={20} width={500} />}
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            </div>
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
                                {dulieu?<CircleChart arrayPrice={arrayPrice} percentNumber={percentNumber} />:
                                    <SkeletonTheme>
                                        
                                        <div className="row">
                                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                <Skeleton circle={true} height={300} width={300}/>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                                <Skeleton height={20} width={75}/>
                                            </div>
                                        </div>
                                    </SkeletonTheme>}
                            </div>
                        </div>

                    </div>

                </div>
                <div className="card">
                    <div className="card-body">
                        <h5>Thống kê chi tiết</h5>
                        <div className="row m-t-30">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                <table className="table table-bordered ">
                                    <thead>
                                        <tr >
                                            <td className="text-center success"><h6>Mức giá <div>(% giá của bạn)</div></h6></td>
                                            <td className="text-center ">50%-60%</td>
                                            <td className="text-center ">60%-70%</td>
                                            <td className="text-center ">70%-80%</td>
                                            <td className="text-center ">80%-90%</td>
                                            <td className="text-center ">90%-100%</td>
                                            <td className="text-center ">100%-110%</td>
                                            <td className="text-center ">110%-120%</td>
                                            <td className="text-center ">120%-130%</td>
                                            <td className="text-center ">130%-140%</td>
                                            <td className="text-center ">140%-150%</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center success"><h6>Giá <div>(theo nghìn đồng)</div></h6></td>
                                            <td className="text-center ">{Nam0}-{Sau0}</td>
                                            <td className="text-center ">{Sau0}-{Bay0}</td>
                                            <td className="text-center ">{Bay0}-{Tam0}</td>
                                            <td className="text-center ">{Tam0}-{Chin0}</td>
                                            <td className="text-center ">{Chin0}-{Muoi0}</td>
                                            <td className="text-center ">{Muoi0}-{Mot1}</td>
                                            <td className="text-center ">{Mot1}-{Hai1}</td>
                                            <td className="text-center ">{Hai1}-{Ba1}</td>
                                            <td className="text-center ">{Ba1}-{Bon1}</td>
                                            <td className="text-center ">{Bon1}-{Nam1}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center success"><h6>Số Lượng</h6></td>
                                            <td className="text-center">{dulieu ? arrayNumber[0] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[1] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[2] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[3] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[4] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[5] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[6] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[7] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[8] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? arrayNumber[9] : <Skeleton />}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center success"><h6>Tỉ lệ phần trăm <div>(%)</div></h6></td>
                                            <td className="text-center">{dulieu ? percentNumber[0] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[1] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[2] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[3] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[4] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[5] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[6] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[7] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[8] : <Skeleton />}</td>
                                            <td className="text-center">{dulieu ? percentNumber[9] : <Skeleton />}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-10 offset-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Tổng số đối thủ :</h6>
                                                    </div>
                                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        {dulieu ? <label> {numberRivals > 0 ? numberRivals : ''}</label> : <Skeleton />}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                        <h6>Giá trung bình :</h6>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        {dulieu ? <label>{medium > 0 ? medium + 'đ' : ''}</label> : <Skeleton />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá thấp hơn:</h6>
                                                    </div>
                                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        {dulieu ? <label>{GiaThapHon}</label> : <Skeleton />}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá tương đương:</h6>
                                                    </div>
                                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        {dulieu ? <label> {GiaTuongDuong}</label> : <Skeleton />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá cao hơn :</h6>
                                                    </div>
                                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        {dulieu ? <label> {GiaCaoHon}</label> : <Skeleton />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        token: state.token,
        shopNameSelected: state.shopNameSelected,
        shopIdSelected: state.shopIdSelected,
        listItems: state.listItems,
        itemId_thongke: state.itemId_thongke
    }
}
export default connect(mapStatetoProps, null)(ItemsInfo);

