import { List, Button, Tooltip, Divider, message } from 'antd';
import React from 'react';

const copyToClipboard = str => {
  console.log(str);
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
  message.success('Link copied');
};
export const URLsList = ({ urls }) => (
  <React.Fragment>
    <br />
    <Divider>Generated Links</Divider>
    <div style={{ padding: 10 }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={urls}
        renderItem={(url, index) => (
          <List.Item
            actions={[
              <Tooltip placement="top" title="Copy Link">
                <Button shape="circle" icon="copy" onClick={() => copyToClipboard(url)} />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              title={
                <React.Fragment>
                  {index + 1}. <span style={{ color: '#00b5d0' }}>{url}</span>
                </React.Fragment>
              }
            />
          </List.Item>
        )}
      />
    </div>
  </React.Fragment>
);
