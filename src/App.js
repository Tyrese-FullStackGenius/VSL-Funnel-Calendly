import React, { useState } from 'react';
import { notification } from 'antd';
import validator from 'email-validator';
import axios from 'axios';
import Home from './components/Home';
import Content from './components/Content';
import Schedule from './components/Schedule';
import {ZERO_BOUNCE_API_KEY } from './const/constants';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // const checkEmail = async (email) => {
    //     const url = `https://apilayer.net/api/check?access_key=${MAILBOXLAYER_API_KEY}&email=${email}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data.format_valid && data.mx_found;
    // }

    const checkEmail = async (email) => {
        const url = `https://api.zerobounce.net/v2/validate?api_key=${ZERO_BOUNCE_API_KEY}&email=${email}`;
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        return data.status === 'Valid';
    }

    return (
        <div>
            {
                currentPage === 'Content' ?
                    <Content scheduleAction={() => setCurrentPage('Schedule')} backAction={() => setCurrentPage('Home')} />
                    : currentPage === 'Schedule' ?
                        <Schedule backAction={() => setCurrentPage('Content')} username={username} email={email} />
                        : <Home goAction={async () => {
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
                                    message: 'Please enter a email address!'
                                });
                                return;
                            }
                            const isValid = await checkEmail(email);
                            if (!isValid) {
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