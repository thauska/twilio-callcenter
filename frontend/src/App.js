import React from 'react';
import Login from './components/Login';
import { useImmer } from 'use-immer';
import axios from './utils/Axios';

function App() {
  const [user, setUser] = useImmer({
    username: '',
    mobileNumber: '',
    verificationCode: '',
    verificationSend: false,
  })

  async function sendSmsCode() {
    console.log('Sending SMS');
    await axios.post('/login', {
      to: user.mobileNumber,
      username: user.username,
      channel: 'sms'
    });
    setUser( draft => {
      draft.verificationSend = true;
    } )
  }

  async function sendVerificationCode() {
    console.log('Sending verification');
    const response = await axios.post('/verify', {
      to: user.mobileNumber,
      code: user.verificationCode
    });
    console.log('Verification response: ', response.data)
  }

  return (
    <div>
      <Login
        user={user}
        setUser={setUser}
        sendSmsCode={sendSmsCode}
        sendVerificationCode={sendVerificationCode}
      />
    </div>
  );
}

export default App;
