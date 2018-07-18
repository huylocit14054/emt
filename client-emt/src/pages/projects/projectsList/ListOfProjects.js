import { List, Card, Avatar } from 'antd';
import { Image } from 'cloudinary-react';
import truncate from 'truncate';
import { Link } from 'react-router-dom';
import React from 'react';
import { CLOUD_NAME } from '../../../constants';

const ListOfProjects = ({ projects }) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={projects}
    renderItem={project => (
      <List.Item>
        <Link to={`/project/${project.id}/utm-builder`}>
          <Card>
            <h4>
              <b>{project.name}</b>
            </h4>
            <p>{truncate(project.description, 30)}</p>

            {project.memberCount > 0 && (
              <div>
                {project.shortenMembers.map(member => (
                  <Image
                    key={member.id}
                    cloudName={CLOUD_NAME}
                    publicId={member.avatar}
                    width="30"
                    height="30"
                    crop="scale"
                    style={{ borderRadius: '50%', border: '1px solid #00b5d0', marginRight: 5 }}
                  />
                ))}
                {project.memberCount > 5 && (
                  <Avatar
                    style={{
                      color: '#f56a00',
                      backgroundColor: '#fde3cf',
                      width: 30,
                      height: 30,
                    }}
                  >
                    +{project.memberCount - 5}
                  </Avatar>
                )}
              </div>
            )}
          </Card>
        </Link>
      </List.Item>
    )}
  />
);

export default ListOfProjects;
