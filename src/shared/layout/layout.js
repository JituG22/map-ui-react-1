import React from 'react';
// --------- component -------
import Sidebar from './sidebar/sidebar';
import TopNav from './top-nav/top-nav';
import {Layout} from 'antd';
import Map from "../../pages/map/map";
import * as SidebarActions from "../../pages/map/store/actions/sidebar.actions";
// --------- Redux -------
import {useSelector, useDispatch } from "react-redux";
import "./layout.css";
const { Footer, Content } = Layout;

export function LayoutView() {
  const dispatch = useDispatch();
  const reduxSidebar = useSelector(state => state.sidebar);

  const sidebarIsOpen = () => {
    dispatch(SidebarActions.SidebarActions.isOpen(reduxSidebar.isOpen))
    console.log(reduxSidebar)
  };
    return (
      <Layout style={{ minHeight:'100vh'}} className="mapup-layout-wrp">
       <Sidebar/>
        <Layout className="site-layout">
          <TopNav/>
            <Content  className="main-content">
                <Map/>
            </Content>
          <Footer className="map-up-footer"> Mapup ©2021 Created by Jitendra</Footer>
        </Layout>
      </Layout>
    );
  
}
export default LayoutView;

