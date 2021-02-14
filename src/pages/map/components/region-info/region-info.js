import React from 'react'
import { Row } from 'antd';
import {useSelector} from "react-redux";
import './region-info.css';
export default function RigionInfo() {
    //------- Redux featch store state
  const reduxRegionData = useSelector(state => state.region)
    return (
    <div className="region-info-wrp">
        {/* ----Loading spinner show when http request  */}
        { reduxRegionData.isRequest && <div className="lds-dual-ring"></div>}
        {/* ---- ones data avaliple show content  */}
        {
           reduxRegionData.message == "Region data requested successful" ? 
            (<div>
                <Row className="info-iteam"> <p> <span className="title"> Name </span> :  <span className="val">{reduxRegionData.data.name} </span> </p> </Row>
                <Row className="info-iteam"> <p> <span className="title"> Flag   </span> :<span className="val"><img className="flag-img" src={reduxRegionData.data.flag}/> </span> </p></Row>  
                <Row className="info-iteam"> <p> <span className="title"> Region </span> : <span className="val">{reduxRegionData.data.region} </span> </p> </Row> 
                <Row className="info-iteam"> <p> <span className="title">Language </span> : <span className="val">{reduxRegionData.data.languages[0].nativeName} </span> </p> </Row>
                <Row className="info-iteam"> <p> <span className="title">Currency </span> : <span className="val">{reduxRegionData.data.currencies[0].code + " "+reduxRegionData.data.currencies[0].symbol} </span> </p> </Row>
                <Row className="info-iteam"> <p> <span className="title">Timezones </span> :  <span className="val">{reduxRegionData.data.timezones[0]} </span> </p> </Row>
            </div>) : reduxRegionData.message
        }
    </div>
    )
}
