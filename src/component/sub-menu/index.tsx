import { RightOutlined } from "@ant-design/icons";
import "./style.scss";

export function SubMenu() {
  return (
    <div className="submenu-container">
      <ul className="submenu-list">
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Accessories & Parts</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Cables & Adapters</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Batteries</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Bags & Cases</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Electronic Cigarettes</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Audio & Video</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
        <li className="submenu-item">
          <a href="" className="submenu-item-link">
            <span className="title">Televisions</span>
            <RightOutlined style={{ fontSize: "12px" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}
