import React from 'react'
import Message from '../src/components/Message'

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.component {
    render () {
        return (
            <div className="message-list">
                {DUMMY_DATA/Map((message, index) => {
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