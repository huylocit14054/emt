import { Modal, Upload, Icon, message, Spin } from 'antd';
import React from 'react';
import { withApollo, ApolloConsumer } from 'react-apollo';
import { Image } from 'cloudinary-react';
import stylesheet from '../../styles/updateAvatar.less';
import { updateAvatar as UPDATE_AVATAR_MUTATION } from '../../graphql/mutations.gql';
import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../../graphql/queries.gql';
import { CLOUD_NAME } from '../../constants';

class ChangeAvatarModal extends React.Component {
  state = {
    visible: false,
    loading: false,
  };

  beforeUpload = file => {
    const isJPG = file.type === 'image/jpeg' || 'image/png';
    if (!isJPG) {
      message.error('You can only upload JPG or PNG file!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return false;
    }
    this.startUpload(file);
    return false;
  };

  startUpload = async file => {
    this.setState({ loading: true });

    this.props.client
      .mutate({
        mutation: UPDATE_AVATAR_MUTATION,
        variables: {
          input: {
            avatar: file,
          },
        },
      })
      .then(data => {
        const { avatarUrl } = data.data.updateAvatar;

        const { currentUser } = this.props.client.readQuery({
          query: GET_CURRENT_USER_QUERY,
        });
        currentUser.avatar = avatarUrl;
        this.props.client.writeQuery({
          query: GET_CURRENT_USER_QUERY,
          data: { currentUser },
        });

        this.setState({
          loading: false,
        });
      });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <a onClick={this.showModal} className="change-avatar-link">
          Change Avatar
        </a>
        <Modal
          title="Change Picture"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <ApolloConsumer>
            {client => {
              const data = client.readQuery({
                query: GET_CURRENT_USER_QUERY,
              });
              const { currentUser } = data;
              return (
                <div className="upload-avatar-layout">
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                  >
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Spin
                      tip="Uploading..."
                      spinning={this.state.loading}
                      style={{ right: '0%' }}
                      indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
                    >
                      <Image
                        cloudName={CLOUD_NAME}
                        publicId={currentUser.avatar}
                        width="300"
                        height="300"
                        crop="scale"
                        style={{ margin: 'auto' }}
                      />
                    </Spin>
                  </Upload>
                </div>
              );
            }}
          </ApolloConsumer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withApollo(ChangeAvatarModal);
