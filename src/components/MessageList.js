import React from 'react'
import Message from '../src/components/Message'

class MessageList extends React.component {
    render () {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <Message key={index} username={message.senderId} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
