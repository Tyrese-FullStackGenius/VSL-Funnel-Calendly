import React, { useEffect } from 'react';
import { TOKEN } from '../utils/constants'
import { InlineWidget } from "react-calendly";

function App(props) {
  const fetchUser = async () => {
    const res = await fetch("https://api.calendly.com/users/me", {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <InlineWidget url="https://calendly.com/d/z6f-ryc-vjj/30min" prefill={{
        email: props.email,
        // firstName: 'Jon',
        // lastName: 'Snow',
        name: props.username,
      }} />
    </div>
  )
}

export default App;
