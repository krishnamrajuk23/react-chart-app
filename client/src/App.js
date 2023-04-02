import { ChatEngine } from 'react-chat-engine'
import './App.css';

function App() {
  const userName = localStorage.getItem("userName");
  const secret = localStorage.getItem("secret");
  return (
    <ChatEngine
      height="100vh"
      projectID="3b63dead-e5a3-4e06-bc89-ed1b611a0c4b"
      userName={userName}
      userSecret={secret}
    />
  );
}

export default App;
