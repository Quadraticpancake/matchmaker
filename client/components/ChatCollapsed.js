import React, { Component } from 'react';

const smallImageStyle = {
  width: '4em',
  height: '4em'
};

const textStyle = {
  alignSelf: 'auto',
  paddingLeft: '1rem'
};

const timeStyle = {
  alignSelf: 'flex-end',
  marginLeft: 'auto',
}

const chatCollapsedStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  padding: '0.5em',
  marginBottom: '10px'
}

var test = function () {
  console.log('this heart was clicked');
}


export class ChatCollapsed extends Component {

  

  render() {
    const {chat, addMessageOnEnter, pair_id, user_id, expandChat} = this.props;
    // messages vs. chats:
    // Chats refer to all messages between a particular pair (bob and amy)
    // messages are an individual message of text sent by one user

    let heartButton = 'https://freeiconshop.com/files/edd/heart-compact-flat.png';

    let renderedMessages = [];
    chat.messages.forEach((message) => {
      renderedMessages.push(<div>{message.text}</div>);
    });

    var userNotMe = chat.user_one.user_id === user_id ? chat.user_two : chat.user_one;

    return (
      <div className='well well-sm'>
        <div onClick={() => expandChat(pair_id)} style={chatCollapsedStyle}>
          <div style={ {alignSelf: 'flex-start'} }>
            <img src={userNotMe.image_url} style={smallImageStyle} />
            <img src={heartButton} style={smallImageStyle} onClick={() => test()} />
          </div>
          <div style={textStyle}>
            {userNotMe.first_name} {userNotMe.last_name} 
            <div>
              {chat.messages[chat.messages.length - 1].text}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

