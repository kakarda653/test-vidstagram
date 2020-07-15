import React, { Component } from 'react';
import FileUploader from 'react-firebase-file-uploader';

import { withFirebase } from '../Firebase';
import MessageList from './MessageList';
import Video from './Video';

class Messages extends Component {
  state = {
    text: '',
    loading: false,
    messages: [],
    username: '',
    avatar: '',
    isUploading: false,
    progress: 0,
    videoURL: '',
  };

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase
      .messages()
      .orderByChild('createdAt')
      .on('value', snapshot => {
        const messageObject = snapshot.val();

        if (messageObject) {
          const messageList = Object.keys(messageObject).map(key => ({
            ...messageObject[key],
            uid: key,
          }));

          this.setState({
            messages: messageList,
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({
      text: this.state.text,
      videoURL: this.state.videoURL,
      username: authUser.username,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });

    this.setState({ text: '' });

    event.preventDefault();
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
  };

  handleUploadSuccess = filename => {
    if (filename.match())
      this.setState({ avatar: filename, progress: 100, isUploading: false });
    this.props.firebase
      .storage()
      .ref('video')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ videoURL: url }));
  };

  render() {
    const { text, messages, loading, isUploading, videoURL, progress, authUser } = this.state;

    const isMessageNotReady = !text || isUploading;

    return (
      <div>
        {loading ? <div>Loading ...</div> :
          <>
            {messages && (
              <>
                <strong>Total message: {messages.length}</strong>
                <MessageList
                  authUser={authUser}
                  messages={messages}
                />
              </>
            )}

            {!messages && <div>There are no messages ...</div>}
          </>}

        <form
          onSubmit={event =>
            this.onCreateMessage(event, authUser)
          }
        >
          <label>Title:</label>
          <input
            type="text"
            value={text}
            onChange={this.onChangeText}
          />
          <label>Video:</label>
          {isUploading && <p>Progress: {progress}</p>}
          {videoURL && <Video url={videoURL}/>}
          <FileUploader
            accept="video/*"
            name="avatar"
            randomizeFilename
            storageRef={this.props.firebase.storage().ref('video')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <button type="submit" disabled={isMessageNotReady}>Send</button>
        </form>
      </div>
    );
  }
}

export default withFirebase(Messages);
