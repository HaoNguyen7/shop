import React,{useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined,
  ShopOutlined,
  DropboxOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import {
  NavLink,withRouter
} from 'react-router-dom'

const { Sider } = Layout;


const MenuSider = () => {
    const [collapsed,setCollapsed] = useState(false);
    const onCollapse = collapsed => {
      setCollapsed( collapsed );
    };
    return (
        <>
        
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to="/">Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <NavLink to="/users">User</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
              <NavLink to="/carts">Carts</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<FileDoneOutlined />}>
              <NavLink to="/bills">Bills</NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<DropboxOutlined />}>
              <NavLink to="/inventory">Inventory</NavLink>
            </Menu.Item>
            <Menu.Item key="9" icon={<ShopOutlined />}>
              <NavLink to="/products">Products</NavLink>
            </Menu.Item>
            <Menu.Item key="10" icon={<InfoCircleOutlined />}>
            <NavLink to="/about">About</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    )
}

export default withRouter(MenuSider);
