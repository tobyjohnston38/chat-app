import React from 'react'

function message(props) {
        return (
            <div className="message">
                <div className="message-username">{props.user}</div>
                <div className="message-text">{props.text}</div>
            </div>
      )
}

export default Message
