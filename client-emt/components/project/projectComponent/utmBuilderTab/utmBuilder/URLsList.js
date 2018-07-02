import { List, Button, Tooltip, Divider } from 'antd';
import React from 'react';

const data = [
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
  {
    link: 'http://www.w3.org/',
  },
];
export const URLsList = () => (
  <React.Fragment>
    <br />
    <Divider>Generated Links</Divider>
    <div style={{ overflow: 'auto', maxHeight: '30vh', padding: 10 }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <Tooltip placement="top" title="Copy Link">
                <Button shape="circle" icon="copy" />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              title={
                <React.Fragment>
                  {data.indexOf(item) + 1}. <span style={{ color: '#00b5d0' }}>{item.link}</span>
                </React.Fragment>
              }
            />
          </List.Item>
        )}
      />
    </div>
  </React.Fragment>
);
