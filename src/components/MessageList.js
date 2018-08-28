import React from 'react'
import Message from '../src/components/Message'

class MessageList extends React.component {
    render () {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message-senderId}</div>
                            <div className="message-text">{message-text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
