import { List, Card, Avatar, Divider, Icon } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
class ProjectsList extends React.Component {
    render () {
        return (
            <div className="projects-list">
            <Divider orientation="left"><Icon type="solution" style={{marginRight: 8}}/>As Admin</Divider>
            <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card>
                    <h2><b>Lorem Ipsum</b></h2>
                    <p> is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <div>
                        <Avatar icon="user" />
                        <Avatar>U</Avatar>
                        <Avatar>USER</Avatar>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                    </div>
                </Card>
              </List.Item>
            )}
          />
          <Divider orientation="left"> <Icon type="user" style={{marginRight: 8}}/>As Member</Divider>
            <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card>
                    <h2><b>Lorem Ipsum</b></h2>
                    <p> is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <div>
                        <Avatar icon="user" />
                        <Avatar>U</Avatar>
                        <Avatar>USER</Avatar>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                    </div>
                </Card>
              </List.Item>
            )}
          />
           </div>
        )
    }
}

export default ProjectsList