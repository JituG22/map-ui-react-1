import React,{useState,useEffect} from 'react';
import axios from 'axios';
// ----------- Ant design -------
import { Row, Col } from 'antd';
import { Select, Button } from 'antd';
// ----------- Component  -------
import RigionInfo from '../region-info/region-info';
// ----------- Redux  -------
import {useSelector, useDispatch } from "react-redux";
import * as RegionActions from "../../store/actions/region.actions";

import "./form-input.css";
const { Option } = Select;

export default function FormInput() { 
    const [currentCountry, setCurrentCountry] = useState("IND");
    const dispatch = useDispatch();
    var selected_option; 
    const selectRegionHandler = (selectedRegion) =>{
        selected_option = selectedRegion ;
        
    }
    const loadRegionHandler = () =>{
        if(selected_option){
            setCurrentCountry(selected_option)
        }
    }
    
    useEffect(()=>{
        // -------- redux action 2 regionDataRequest
        dispatch(RegionActions.RegionActions.regionDataRequest());
        axios.get("https://restcountries.eu/rest/v2/alpha/"+currentCountry)
        .then((res)=>{
            if(res.status === 200){
                // -------- redux action 3 regionDataRequestSuccessful
                dispatch(RegionActions.RegionActions.regionDataRequestSuccessful(res.data))
                
            }
        }).catch((error)=>{
            // -------- redux action 4 regionDataRequestFail
           dispatch(RegionActions.RegionActions.regionDataRequestFail(error))
        })
    },[currentCountry]);
    
    return (
        <div className="select-region-wrp">
                    <Row justify="center">
                        <Col>
                            <Select defaultValue="India" style={{width: 140}} onSelect={selectRegionHandler}>
                                <Option value="IND">India</Option>
                                <Option value="USA"> United States</Option>
                                <Option value="GBR">United Kingdom</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Row justify="center">
                            <Button justify="center" className="load-btn" onClick={loadRegionHandler}> Load</Button>
                    </Row>
                    <Row>
                       <RigionInfo/>     
                    </Row>
                </div>
            )
    
}


