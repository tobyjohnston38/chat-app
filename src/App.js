import React from 'react'
import MessageList from '../src/components/MessageList'
// import SendMessage from '../src/components/SendMessageForm'
// import RoomList from '../src/components/RoomList'
// import NewRoomForm from '../src/components/NewRoomForm'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <RoomList /> */}
                <MessageList />
                {/* <SendMessage /> */}
                {/* <NewRoomForm /> */}
            </div>
        );
    }
}

export default App