import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Content from './components/Content';
import Schedule from './components/Schedule';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <div>
            {
                currentPage === 'Content' ?
                    <Content scheduleAction={() => setCurrentPage('Schedule')} backAction={() => setCurrentPage('Home')} />
                    : currentPage === 'Schedule' ?
                        <Schedule backAction={() => setCurrentPage('Content')} username={username} email={email} />
                        : <Home goAction={() => {
                            if (!emailRegex.test(email)) {
                                alert('Please enter a valid email address')
                            } else {
                                setCurrentPage('Content');
                            }
                        }} setUsername={setUsername} setEmail={setEmail} username={username} email={email} />
            }
        </div>
    )
}

export default App;