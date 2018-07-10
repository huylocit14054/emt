import { Modal, Upload, Icon, message, Spin, Button, Slider } from 'antd';
import React from 'react';
import { withApollo, ApolloConsumer } from 'react-apollo';
import AvatarEditor from 'react-avatar-editor';
import { Image } from 'cloudinary-react';
import stylesheet from '../../styles/updateAvatar.less';
import { updateAvatar as UPDATE_AVATAR_MUTATION } from '../../graphql/mutations.gql';
import { getCurrentUser as GET_CURRENT_USER_QUERY } from '../../graphql/queries.gql';
import { CLOUD_NAME } from '../../constants';

class ChangeAvatarModal extends React.Component {
  state = {
    visible: false,
    loading: false,
    file: null,
    scale: 1,
  };

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage();
      canvas.toBlob(blob => this.startUpload(blob));
      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      // const canvasScaled = this.editor.getImageScaledToCanvas();
    }
  };

  onScale = scale => {
    this.setState({ scale });
  };

  setEditorRef = editor => (this.editor = editor);

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
    this.setState({ file });

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
          file: null,
          scale: 0,
        });
      });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.cancelUpdateAvatar();
    this.setState({
      visible: false,
    });
  };

  cancelUpdateAvatar = () => {
    this.setState({ file: null, scale: 1 });
  };

  render() {
    const { file, scale } = this.state;
    return (
      <React.Fragment>
        <a onClick={this.showModal} className="change-avatar-link">
          Change Avatar
        </a>
        <Modal
          maskClosable={false}
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
                  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                  {!file && (
                    <Upload
                      name="avatar"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={this.beforeUpload}
                    >
                      <Button>
                        <Icon type="upload" /> Click to Upload
                      </Button>
                    </Upload>
                  )}
                  <br />
                  <br />

                  <Spin
                    tip="Uploading..."
                    spinning={this.state.loading}
                    style={{ right: '0%' }}
                    indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
                  >
                    {file ? (
                      <React.Fragment>
                        <AvatarEditor
                          ref={this.setEditorRef}
                          image={file}
                          width={300}
                          height={300}
                          border={50}
                          scale={scale}
                        />
                        <Slider value={scale} onChange={this.onScale} min={1} max={5} step={0.1} />
                      </React.Fragment>
                    ) : (
                      <Image
                        cloudName={CLOUD_NAME}
                        publicId={currentUser.avatar}
                        width="300"
                        height="300"
                        crop="scale"
                        style={{ margin: 'auto' }}
                      />
                    )}
                  </Spin>

                  {file && (
                    <React.Fragment>
                      <Button type="primary" onClick={this.onClickSave}>
                        Save
                      </Button>
                      {'  '}
                      <Button onClick={this.cancelUpdateAvatar}>Cancel</Button>
                    </React.Fragment>
                  )}
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
