import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from '../src/components/MessageList'
import SendMessage from '../src/components/SendMessageForm'
import RoomList from '../src/components/RoomList'
import NewRoomForm from '../src/components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'Toby',
            tokenProvider: newChatkit.tokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 14868724,
                hooks: {
                    onNewMessage: message => {
                        console.log('message.text: ', message.text);
                    }
                }
            })
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessage />
                <NewRoomForm />
            </div>
        );
    }
}

export default App