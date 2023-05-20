import React, { useState } from 'react';
import { notification } from 'antd';
import validator from 'email-validator';
import Home from './components/Home';
import Content from './components/Content';
import Schedule from './components/Schedule';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            {
                currentPage === 'Content' ?
                    <Content scheduleAction={() => setCurrentPage('Schedule')} backAction={() => setCurrentPage('Home')} />
                    : currentPage === 'Schedule' ?
                        <Schedule backAction={() => setCurrentPage('Content')} username={username} email={email} />
                        : <Home goAction={() => {
                            if (!username) {
                                notification.warning({
                                    message: 'Please enter your name!'
                                });
                                return;
                            }
                            if (!email) {
                                notification.warning({
                                    message: 'Please enter your email!'
                                });
                                return;
                            }
                            if (!validator.validate(email)) {
                                notification.warning({
                                    message: 'Please enter a real email address!'
                                });
                                return;
                            }
                            setCurrentPage('Content');
                        }} setUsername={setUsername} setEmail={setEmail} username={username} email={email} />
            }
        </div>
    )
}

export default App;