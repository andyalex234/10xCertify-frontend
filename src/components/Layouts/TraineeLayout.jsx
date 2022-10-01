import { Breadcrumb, Layout } from "antd";
import React from "react";
import logo from "../../assets/logo.webp";
import './layout.css'

const { Header, Content, Footer } = Layout;

const TraineeLayout = ({ children }) => (
  <Layout className="layout">
    <Header>
      <img src={logo} height="80" width="100" className="logo" />
    </Header>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      ></Breadcrumb>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      TenX-Certify ©2022 Created by Andenet Alexander
    </Footer>
  </Layout>
);

export default TraineeLayout;
