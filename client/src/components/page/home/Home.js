
import React from 'react'
import {Breadcrumb,Layout} from 'antd'
import 'antd/dist/antd.css';
import './index.css'
const {Content} = Layout 
const Home = () => {
    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Home page 
            </div>
          </Content>
    )
}

export default Home
