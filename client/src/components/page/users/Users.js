import React from 'react'
import {Breadcrumb,Layout} from 'antd'
import 'antd/dist/antd.css';
import './index.css'
import EditableTable from './component/Table';
const {Content} = Layout 
const Users = () => {
    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Users</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <EditableTable />
            </div>
          </Content>
    )
}

export default Users 
