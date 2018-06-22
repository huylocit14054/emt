import { List, Card, Avatar } from "antd";
const truncate = require("truncate");
import Link from 'next/link';
import { Image } from 'cloudinary-react';
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
          <Link
            prefetch
            as={`/project/${project.id}/members`}
            href={`/projectMembers?id=${project.id}`}
          >
            <a>
              <Card>
                <h4>
                  <b>{project.name}</b>
                </h4>
                <p>{truncate(project.description, 30)}</p>
              
                {
                  project.memberCount > 0 && (
                    
                      <div>
                      {project.shortenMembers.map(member => (
                        <Image
                          key={member.id}
                          cloudName={CLOUD_NAME}
                          publicId={member.avatar}
                          width="30"
                          height="30"
                          crop="scale"
                          style={{ borderRadius: '50%', border: "1px solid #00b5d0" , marginRight: 5 }}
                        />
                      ))}
                      {project.memberCount > 5 && (
                        <Avatar
                        style={{
                          color: '#f56a00',
                          backgroundColor: '#fde3cf',
                          width: 30,
                          height: 30
                        }}
                      >
                        +{project.memberCount - 5}
                      </Avatar>
                      )}
                      </div>

                  )
                }

              </Card>
            </a>
          </Link>
        </List.Item>
      )}
  />
);

export default ListOfProjects;
