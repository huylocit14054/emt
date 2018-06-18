import { List, Card, Avatar } from "antd";
const truncate = require("truncate");
const ListItem = ({ project }) => (
  <List.Item>
    <Card>
      <h2>
        <b>{project.name}</b>
      </h2>
      <p>{truncate(project.description, 70)}</p>
      <div>
        <Avatar icon="user" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf"
          }}
        >
          U
        </Avatar>
        <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
      </div>
    </Card>
  </List.Item>
);

export default ListItem;
