import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './layout.css/'
import logo from '../../assets/logo.webp';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('New sign-ups', '1', <PieChartOutlined />),
  getItem('Opt-Ins', '2', <DesktopOutlined />),
  getItem('Stuff', 'sub1', <UserOutlined />, [
    getItem('Super Admin', '3'),
    getItem('Operation Mng', '4'),
    getItem('Moderators', '5'),
  ]),
  getItem('Trainees', 'sub2', <TeamOutlined />, [getItem('Current', '6'), getItem('Graduated', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const AdminLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <img src={logo} className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          TenX-Certify ©2022 Created by Andenet Alexander
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;