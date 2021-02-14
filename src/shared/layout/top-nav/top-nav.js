import React from 'react';
// --------- Redux -----
import {useSelector, useDispatch } from "react-redux";
// -------- Ant design -----
import { UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import {Layout, Button, Row, Col} from 'antd';
import * as SidebarActions from "../../../pages/map/store/actions/sidebar.actions";
import './top-nav.css';
const {Header} = Layout;

export function TopNav() {
  const dispatch = useDispatch();
  const reduxSidebar = useSelector(state => state.sidebar);

  const sidebarIsOpen = () => {
    dispatch(SidebarActions.SidebarActions.isOpen(reduxSidebar.isOpen))
    console.log(reduxSidebar)
  };

    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row justify="space-between">
              <Col span={4} className="collapse-icon">
                <Row justify={"center"} align={"middle"}>
                      <Col className="menu-icon" onClick={sidebarIsOpen}>
                        <svg><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                      </Col>
                      <Col offset={2} className="logo-wrp">
                          Mapup
                      </Col>
                  </Row>
              </Col>
              <Col span={6}>
              <div className="top-nav-wrp">
                <Button type="primary" ghost ><UserOutlined /> Profile</Button>
                <Button type="primary" ghost ><LoginOutlined />Login</Button>
                <Button type="primary" ghost ><LogoutOutlined /> Logout</Button>
              </div>
              </Col>
        </Row>
      </Header>
    );

}

export default TopNav;

