import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function DropDownForTable() {


    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              אלמיטו
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              ספיר
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              חמודי
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              שמואל
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              ישראל
            </a>
          </Menu.Item>
        </Menu>
      );

    return (
      <>
          <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          בוגרים <DownOutlined />
        </a>
      </Dropdown>
      </>
    )
}

export default DropDownForTable

