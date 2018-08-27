import React from 'react'
import MessageList from '/components/MessageList'
import SendMessage from '/components/SendMessageForm'
import RoomList from '/components/RoomList'
import NewRoomForm from '/components/NewRoomForm'

class App extends React.Component {
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