import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from '../src/components/MessageList'
import SendMessage from '../src/components/SendMessageForm'
import RoomList from '../src/components/RoomList'
import NewRoomForm from '../src/components/NewRoomForm'

import { tokenUrl, instanceLocator } from '/config'

class App extends React.Component {

    constructor() {
      super()
      this.state = {
        messages:[]
      }
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'Toby',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 14868724,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                          messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList messeges={this.state.messages} />
                <SendMessage />
                <NewRoomForm />
            </div>
        );
    }
}

export default App
