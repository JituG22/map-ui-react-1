import React from 'react'
import {Layout, Menu } from 'antd';
import {useSelector, useDispatch } from "react-redux";
import "./sidebar.css";
import {
    UserOutlined,
    DesktopOutlined,
    MobileOutlined
} from '@ant-design/icons';
const {Sider} = Layout;
export default function Sidebar() {
    const reduxSidebar = useSelector(state => state.sidebar);
    return (
        <Sider trigger={null}  collapsed={reduxSidebar.isOpen} collapsedWidth={0}>
            <Menu  mode="inline" defaultSelectedKeys={['1']} className="sidebar-menu-wrp">
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Jitendra
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined/>}>
                    UI Team Lead
                </Menu.Item>
                <Menu.Item key="3" icon={<MobileOutlined />}>
                    +91 9860885045
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
