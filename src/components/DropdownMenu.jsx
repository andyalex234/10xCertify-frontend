import {UserOutlined } from "@ant-design/icons";
import {Dropdown, Menu} from "antd";
import React from "react";

const menu = (items, handleMenuClick) => {
  const mylist = [];
  items.map((item) =>
    mylist.push({
      key: item.address,
      label: <>{item.address}</>,
      icon: <UserOutlined />,
    })
  );
  return <Menu onClick={handleMenuClick} items={mylist} />;
};

const DropdownMenu = ({ items, handleMenuClick }) => {
  console.log("items are", items);
  return (
    <Dropdown.Button
      overlay={() => menu(items, handleMenuClick)}
    >
      Select Account
    </Dropdown.Button>
  );
};

export default DropdownMenu;
