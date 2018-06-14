import stylesheet from 'styles/topHeader.less';
import { Layout, Icon, Dropdown, Menu, Avatar } from 'antd';

const { Header } = Layout;
const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick} className="menu-dropdown">
    <Menu.Item key="1">  
      <a>
        <Icon type="profile"/> Profile
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a>
        <Icon type="logout"/> Sign out
      </a>
    </Menu.Item>
  </Menu>
);

export default class TopHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header style={{
          background: '#fff',
          padding: 0
        }}>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link user-dropdown" href="#">
            <Avatar  src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" />
             
            </div>
          </Dropdown>
        </Header>
      </React.Fragment>
    )
  }
}
