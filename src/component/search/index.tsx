import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const styleBtnSearch = {
  height: "47px",
  backgroundColor: "var(--color-theme)",
  border: "none",
};

export function SearchInput() {
  return (
    <Input.Group compact>
      <Input
        style={{ width: "500px", height: "47px" }}
        placeholder="Search for your item's type..."
        defaultValue=""
      />
      <Button type="primary" style={styleBtnSearch}>
        <SearchOutlined />
      </Button>
    </Input.Group>
  );
}
